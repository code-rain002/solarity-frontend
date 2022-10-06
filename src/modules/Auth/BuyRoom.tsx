import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import Logo from "components/Common/Logo";

import {
  AddressImg,
  AvatarImg,
  DaoBGImg,
  DaoImg1,
  DaoImg2,
  GalleryImg,
} from "components/Common/Images";
import {
  MetamaskImg,
  PhantomImg,
  SlopeImg,
  SolflareImg,
  SolletExImg,
  SolletImg,
  TorusImg,
} from "components/Common/Images";
import { useDispatch, RootStateOrAny, useSelector } from "react-redux";
import {
  startLoadingApp,
  stopLoadingApp,
} from "../../redux/slices/commonSlice";
import {
  EditStyle,
  UserBadges,
  UserDaos,
  UserInfo,
  UserPic,
  NftDemo,
  UserRoom,
  RoomIframe,
  EditRoom,
  // RoomDemo,
} from "./Steps";
import { UserAvatar } from "components/Common/Panels";
import { changeInfo, goStep, jumpStep, setStep, updateUserInfo } from "redux/slices/authSlice";
import ProgressBar from "./ProgressBar";
import Circle from "./Circle";
import { apiCaller } from "utils/fetcher";

export const BuyRoomPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { profile, step } = useSelector((state: RootStateOrAny) => ({
    profile: state.profile.data,
    step: state.profile.step,
  }));
  
  return (
    <div className="lg:flex lg:flex-row justify-center md:flex-col gap-[25px] mt-[50px] items-center">
      <div className="w-[90%] md:w-[65%] lg:w-[50%] xl:w-[55%] custom-2xl:w-[45%] m-auto z-10">
        <div className="relative w-auto mx-auto">
          <div className="rounded-[30px] min-h-[800px] lg:min-h-[calc(100vh-100px)] shadow-lg relative w-full bg-[#141416] outline-none focus:outline-none flex flex-row">
            <div className="w-[100%] xl:w-[100%] flex flex-col relative">
              {step === 1 && <UserRoom />}
              {step === 2 && <EditRoom />}
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] md:w-[85%] lg:w-[50%] xl:w-[45%] custom-2xl:w-[55%] lg:block m-auto">
        {step == 1 && <RoomIframe />}
        {/* {step == 7 && <RoomDemo />} */}
      </div>
    </div>
  );
};

export default BuyRoomPage;
