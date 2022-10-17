import React, { useEffect } from "react";
import { useRouter } from "next/router";
import {
  PrimaryButton,
  BackButton,
} from "components/Common/Buttons";
import { useDispatch, RootStateOrAny, useSelector } from "react-redux";
import {
  startLoadingApp,
  stopLoadingApp,
} from "../../../redux/slices/commonSlice";
import WalletAddress from "./WalletAddress";
import { useMetaplex } from "utils/contexts/useMetaplex";
import { useWallet } from "@solana/wallet-adapter-react";
import { getNfts } from "hooks";
import { NftPanel } from "components/Common/Panels";
import { selectNft } from "redux/slices/marketplaceSlice";
import { goStep } from "redux/slices/profileSlice";
import Image from "next/image";

const EditRoom = (props) => {
  const { setNFT } = props;
  const dispatch = useDispatch();
  const router = useRouter();
  const { metaplex } = useMetaplex();
  const { userInfo, loading } = useSelector((state: RootStateOrAny) => ({
    userInfo: state.auth.userInfo,
    loading: state.common.appLoading,
  }));
  const [nfts, nftLoading, nftError, fetchNFTs] = getNfts(userInfo.domain, userInfo.solanaAddress, true);

  useEffect(() => {
    fetchNFTs();
  }, []);

  const onSelectNft = (nft) => {
    dispatch(selectNft({ nftData: nft }));
  }

  const onContinue = () => {
    const data = {};
    const payload = {
      stepNum: 8,
    };
    dispatch(goStep(payload));
  };

  const onUndo = () => {
    const payload = {
      stepNum: 1,
    };
    dispatch(goStep(payload));
  };

  return (
    <>
      <div className="flex items-center justify-between pt-8 pl-5 pr-5 lg:p-5 lg:pb-0 lg:pt-8 rounded-t">
        <h3 className="text-[28px] lg:text-[30px] text-white font-medium tracking-[0.02em]">
          Edit with your NFT
        </h3>
        <WalletAddress />
      </div>
      {/*body*/}
      <div className="relative p-5 lg:p-5 flex-auto">
        {nftLoading ? (
          <h3 className="text-center text-[24px] lg:text-[26px] text-white font-medium tracking-[0.02em]">
            Loading NFTs...
          </h3>
        ) : (
          <div className="grid grid-cols-2 xl:grid-cols-3">
            {nfts.map((nft, index) => (
              <div className="p-2 flex justify-center items-center" key={index}>
                <div onClick={() => setNFT(nft)} className={`relative h-[150px] w-[150px] rounded-[20px] border-[1.5px] border-white/10 hover:border-primary z-10 bg-transparent cursor-pointer max-w-[150px] overflow-hidden`}>
                  <img
                    src={nft.image}
                    alt={nft.name}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="w-full px-5 py-5 lg:px-5 lg:py-5 flex-auto flex items-end">
        <div className="inline-block w-[20%] pr-2">
          <BackButton onClick={() => onUndo()} styles="rounded-[15px]" />
        </div>
        <div className="inline-block w-[80%] pl-2">
          <PrimaryButton
            caption="Continue"
            icon=""
            bordered={false}
            onClick={() => onContinue()}
            disabled={loading ? true : false}
            styles="rounded-[15px]"
          />
        </div>
      </div>
    </>
  );
};

export default EditRoom;
