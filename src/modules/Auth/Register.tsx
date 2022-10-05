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
  RoomDemo,
} from "./Steps";
import { UserAvatar } from "components/Common/Panels";
import { changeInfo, goStep, jumpStep, setStep, updateUserInfo } from "redux/slices/authSlice";
import ProgressBar from "./ProgressBar";
import Circle from "./Circle";
import { apiCaller } from "utils/fetcher";

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { steps } = router.query;
  const { userInfo, step } = useSelector((state: RootStateOrAny) => ({
    userInfo: state.auth.userInfo,
    step: state.auth.step,
  }));

  const [avatar, setAvatar] = useState<Object>(null);

  useEffect(() => {
    apiCaller
      .post("/auth/checkStep")
      .then((response) => {
        if (response.data.user) {
        const user = response.data.user;
          let tempUserInfo = userInfo;
          switch (user.registerStep) {
            case 6:
              tempUserInfo = {
                ...tempUserInfo,
                passportStyle: user.passportStyle
              }
            case 5:
              tempUserInfo = {
                ...tempUserInfo,
                badges: user.badges
              }
            case 4:
              tempUserInfo = {
                ...tempUserInfo,
                profileImage: user.profileImage
              }
            case 3:
              tempUserInfo = {
                ...tempUserInfo,
                daos: user.daos
              }
            case 2:
              tempUserInfo = {
                ...tempUserInfo,
                domain: user.username,
                title: user.bio
              }
            case 1:
              tempUserInfo = {
                ...tempUserInfo,
                solanaAddress: user.solanaAddress,
                links: user.externalLinks
              }
              break;
          }
          dispatch(updateUserInfo({
            payload: tempUserInfo,
            callback: () => dispatch(jumpStep({ stepNum: user.registerStep }))
          }))
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="lg:flex lg:flex-row justify-center md:flex-col gap-[25px] mt-[50px] items-center">
      <div className="w-[90%] md:w-[65%] lg:w-[50%] xl:w-[55%] custom-2xl:w-[55%] m-auto z-10">
        <div className="relative w-auto mx-auto">
          <div className="rounded-[30px] min-h-[800px] lg:min-h-[calc(100vh-100px)] shadow-lg relative w-full bg-[#141416] outline-none focus:outline-none flex flex-row">
            <div className="hidden xl:w-[40%] xl:block h-full">
              <div className="py-6">
                <Logo />
              </div>
              <Circle />
              <ProgressBar />
            </div>
            <div className="w-[100%] xl:w-[60%] flex flex-col relative">
              {step === 1 && <UserInfo />}
              {step === 2 && <UserDaos />}
              {step === 3 && <UserPic />}
              {step === 4 && <UserBadges />}
              {step === 5 && <EditStyle />}
              {step === 6 && <UserRoom />}
              {step === 7 && <EditRoom />}
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] md:w-[85%] lg:w-[50%] xl:w-[45%] custom-2xl:w-[45%] lg:block m-auto">
        {step <= 5 && <NftDemo />}
        {step == 6 && <RoomIframe />}
        {step == 7 && <RoomDemo />}
      </div>
    </div>
  );
};

export default RegisterPage;
