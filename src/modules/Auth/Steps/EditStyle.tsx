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
import { changeInfo } from "redux/slices/authSlice";

const EditStyle = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { goStep } = props;
  const { userInfo, loading } = useSelector((state: RootStateOrAny) => ({
    userInfo: state.auth.userInfo,
    loading: state.common.appLoading,
  }));

  // bug code
  const publicKey = localStorage.getItem("publickey");
  const walletType = localStorage.getItem("type");

  const miniPublicKey = minifyAddress(publicKey, 3);
  const provider = (window as any).phantom.solana;

  useEffect(() => {
    
  }, []);

  const register = async () => {
    const payload = {
      publicKey,
      walletType,
      username: userInfo.domain,
      bio: userInfo.title,
      profileImage: userInfo.profileImage,
      daos: userInfo.daos,
    };
    await apiCaller
      .post("auth/register", payload)
      .then((response) => {
        mint();
        // router.push({ pathname: '/' })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const mint = () => {
    const address = userInfo.solanaAddress;
    const mintingUrl =
      process.env.NODE_ENV === "development"
        ? process.env.NEXT_PUBLIC_LOCAL_MINTING_URL
        : process.env.NEXT_PUBLIC_MINTING_URL;
    window.location.href = `${mintingUrl}`;
  };

  return (
    <>
      <div className="flex items-start justify-between pt-8 pl-10 pr-10 lg:p-10 lg:pb-0 lg:pr-12 rounded-t">
        <h3 className="text-[28px] lg:text-[30px] text-white font-medium tracking-[0.02em]">
          Edit Style
        </h3>
        <AddressButton
          caption={miniPublicKey ? miniPublicKey : ""}
          icon={AddressImg}
          onClick={null}
        />
      </div>
      {/*body*/}
      <div className="relative p-10 lg:p-14 flex-auto">
        <div className="my-3 flex flex-row justify-between items-center">
          <span className="text-white">Logo Color: </span>
          <select className="w-[100px] text-center rounded-[10px] border-[1px] border-white bg-[#141416] text-white">
            <option>grey</option>
            <option>red</option>
            <option>blue</option>
          </select>
        </div>
        <div className="my-3 flex flex-row justify-between items-center">
          <span className="text-white">Background Color: </span>
          <select className="w-[100px] text-center rounded-[10px] border-[1px] border-white bg-[#141416] text-white">
            <option>grey</option>
            <option>red</option>
            <option>blue</option>
          </select>
        </div>
      </div>
      <div className="w-full px-10 py-10 lg:px-10 lg:py-8 flex-auto flex items-end">
        <div className="inline-block w-[20%] pr-2">
          <BackButton onClick={() => goStep(3)} styles="rounded-[15px]" />
        </div>
        <div className="inline-block w-[80%] pl-2">
          <PrimaryButton
            caption="Mint"
            icon=""
            bordered={false}
            onClick={() => register()}
            disabled={loading ? true : false}
            styles="rounded-[15px]"
          />
        </div>
      </div>
    </>
  );
};

export default EditStyle;
