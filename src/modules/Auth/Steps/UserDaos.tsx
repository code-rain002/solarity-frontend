import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import {
  AddressButton,
  WalletButton,
  PrimaryButton,
  BackButton,
} from "components/Common/Buttons";

import { AddressImg, DaoBGImg } from "components/Common/Images";
import { AvatarPanel, DaoPanel } from "components/Common/Panels";
import { minifyAddress } from "utils";

import { useDispatch, RootStateOrAny, useSelector } from "react-redux";
import {
  startLoadingApp,
  stopLoadingApp,
} from "../../../redux/slices/commonSlice";
import { apiCaller } from "utils/fetcher";
import { changeInfo, goStep } from "redux/slices/authSlice";
import { StepTitle, WalletAddress } from "../Components";
import { useMetaplex } from "utils/contexts/useMetaplex";
import { getNfts } from "hooks";
import axios from "axios";

// const daos = [
//   {
//     name: "DeGods",
//     symbol: "DeGods",
//     description: "Welcome to new Dao",
//     profileImage: {
//       link: "/images/daos/degods.png",
//       address: "/images/daos/degods.png"
//     }
//   }, {
//     name: "BAYC",
//     symbol: "BAYC",
//     description: "Welcome to new Dao",
//     profileImage: {
//       link: "/images/daos/bayc.jpeg",
//       address: "/images/daos/bayc.jpeg"
//     }
//   }, {
//     name: "SolGods",
//     symbol: "SolGods",
//     description: "Welcome to new Dao",
//     profileImage: {
//       link: "/images/daos/solgods.jpeg",
//       address: "/images/daos/solgods.jpeg"
//     }
//   }, {
//     name: "MoneyBoys",
//     symbol: "MoneyBoys",
//     description: "Welcome to new Dao",
//     profileImage: {
//       link: "/images/daos/moneyboys.jpeg",
//       address: "/images/daos/moneyboys.jpeg"
//     }
//   }, {
//     name: "Doodles",
//     symbol: "Doodles",
//     description: "Welcome to new Dao",
//     profileImage: {
//       link: "/images/daos/doodles.png",
//       address: "/images/daos/doodles.png"
//     }
//   }, {
//     name: "CryptoPunks",
//     symbol: "CryptoPunks",
//     description: "Welcome to new Dao",
//     profileImage: {
//       link: "/images/daos/cryptopunk.png",
//       address: "/images/daos/cryptopunk.png"
//     }
//   }, 
// ];

const UserDaos = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { userInfo, loading, isMobile } = useSelector((state: RootStateOrAny) => ({
    userInfo: state.auth.userInfo,
    loading: state.common.appLoading,
    isMobile: state.common.isMobile
  }));

  const [nfts, setNfts] = useState([]);
  const [daos, setDaos] = useState([]);
  const [selectedDaos, setSelectedDaos] = useState([]);
  const [daoLoading, setDaoLoading] = useState(false);

  useEffect(() => {
    const config = {
      headers: {
        'APIKeyID': process.env.NEXT_PUBLIC_BLOCKCHAIN_API_KEY,
        'APISecretKey': process.env.NEXT_PUBLIC_BLOCKCHAIN_API_SECRET
      }
    }
    setDaoLoading(true);
    axios.get(`https://api.blockchainapi.com/v1/solana/wallet/mainnet-beta/${userInfo.solanaAddress}/nfts`, config)
      .then(response => {
        const nfts = response.data.nfts_metadata
        console.log(nfts)
        const formattedNfts = nfts.map(nft => ({
          name: nft.off_chain_data.collection ? nft.off_chain_data.collection.name : '',
          // name: nft.off_chain_data.name,
          image: nft.off_chain_data.image,
          description: nft.off_chain_data.description,
          symbol: nft.off_chain_data.symbol
        }))
        console.log(formattedNfts)
        setNfts(formattedNfts);
        setDaoLoading(false);
      })
      .catch(error => {
        setDaoLoading(false);
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (nfts.length) {
      console.log(nfts);
      const collectionNfts = nfts.filter(nft => nft.name !== "");
      let daos = []
      for (let i = 0; i < collectionNfts.length; i++) {
        if (daos.findIndex(dao => dao.name === collectionNfts[i].name) < 0) {
          daos.push(collectionNfts[i]);
        }
      }
      console.log(daos)
      setDaos(daos);
    }
  }, [nfts])

  useEffect(() => {
    const payload = {
      value: selectedDaos,
      type: "daos",
    };
    dispatch(
      changeInfo({
        payload: payload,
      })
    );
  }, [selectedDaos]);

  const onContinue = () => {
    const data = {
      daos: userInfo.daos
    }
    const payload = {
      stepNum: 3,
      data,
    }
    dispatch(goStep(payload));
  }

  const onUndo = () => {
    const payload = {
      stepNum: 1,
      data: {
        username: null,
        bio: null
      },
    }
    dispatch(goStep(payload));
  }

  const onSelectDao = (selected) => {
    let tempDaos;
    let index = selectedDaos.findIndex((dao, index) => dao.name === selected.name)
    if (index >= 0) {
      tempDaos = selectedDaos.filter((dao, index) => dao.name !== selected.name);
    } else {
      tempDaos = [...selectedDaos, selected];
      if (tempDaos.length > 3) {
        alert('Maximum count is 3');
        return;
      }
    }
    setSelectedDaos(tempDaos);
  }

  return (
    <>
      <div className="flex items-center justify-between pt-8 pl-5 pr-5 lg:p-5 lg:pt-8 lg:pb-0 lg:pr-5 rounded-t">
        {!isMobile ? (
          <h3 className="text-[22px] sm:text-[30px] text-white font-medium tracking-[0.02em]">
            DAOs you&apos;re already in
          </h3>
        ) : (
          <StepTitle caption={'DAOs'} />
        )}
        <WalletAddress />
      </div>
      {/*body*/}
      <div className="relative px-5 sm:pt-5 lg:p-5 flex-auto">
        {daoLoading ? (
          <div className="text-center	text-[24px] lg:text-[24px] text-white font-medium tracking-[0.02em]">
            Daos Loading...
          </div>
        ) : daos.length ? (
          <div className="grid xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 custom-2xl:grid-cols-3 max-h-[calc(100vh-392px)] sm:max-h-[476px] overflow-scroll gap-3">
            {daos.map((dao, index) => (
              <DaoPanel
                imageSrc={dao?.image}
                backSrc={DaoBGImg}
                title={dao.name}
                key={index}
                selected={selectedDaos.findIndex((item, index) => dao.name === item.name) >= 0 ? true : false}
                onClick={() => onSelectDao(dao)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center	text-[24px] lg:text-[24px] text-white font-medium tracking-[0.02em]">
            No DAOs you are in.
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

export default UserDaos;
