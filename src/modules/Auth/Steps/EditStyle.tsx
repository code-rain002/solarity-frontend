import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { HexColorPicker } from 'react-colorful';

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

  const onSetColor = (value, target) => {
    let tempStyle = {}
    Object.assign(tempStyle, userInfo.passportStyle)
    const payload = {
      value: {
        ...tempStyle,
        [target]: value
      },
      type: 'passportStyle'
    }
    dispatch(changeInfo({ payload: payload }));
  }

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
      <div className="flex items-center justify-between pt-8 pl-5 pr-5 lg:p-5 lg:pb-0 lg:pt-8 rounded-t">
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
      <div className="relative p-5 lg:p-5 flex-auto">
        <div className="mb-3 flex flex-row justify-between items-center">
          <span className="text-white">Logo Color: </span>
          <HexColorPicker className="!w-[150px] !h-[150px]" color={"#29b080"} onChange={(value) => onSetColor(value, 'logo')} />
        </div>
        <div className="mb-3 flex flex-row justify-between items-center">
          <span className="text-white">Background Color: </span>
          <HexColorPicker className="!w-[150px] !h-[150px]" color={"#333333"} onChange={(value) => onSetColor(value, 'background')} />
        </div>
        <div className="mb-3 flex flex-row justify-between items-center">
          <span className="text-white">Line Color: </span>
          <HexColorPicker className="!w-[150px] !h-[150px]" color={"#29b080"} onChange={(value) => onSetColor(value, 'line')} />
        </div>
        <div className="flex flex-row justify-between items-center">
          <span className="text-white">Text Color: </span>
          <HexColorPicker className="!w-[150px] !h-[150px]" color={"#FFFFFF"} onChange={(value) => onSetColor(value, 'text')} />
        </div>
      </div>
      <div className="w-full px-5 py-5 lg:px-5 lg:py-5 flex-auto flex items-end">
        <div className="inline-block w-[20%] pr-2">
          <BackButton onClick={() => goStep(3)} styles="rounded-[15px]" />
        </div>
        <div className="inline-block w-[80%] pl-2">
          <PrimaryButton
            caption="Continue"
            icon=""
            bordered={false}
            onClick={() => goStep(5)}
            disabled={loading ? true : false}
            styles="rounded-[15px]"
          />
        </div>
      </div>
    </>
  );
};

export default EditStyle;
