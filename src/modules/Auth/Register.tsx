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
import { EditStyle, UserDaos, UserInfo, UserPic } from "./Steps";
import { UserAvatar } from "components/Common/Panels";
import { changeInfo, goStep } from "redux/slices/authSlice";
import ProgressBar from "./ProgressBar";
import NftDemo from "./Steps/NftDemo";
import Circle from "./Circle";
import UserRoom from "./Steps/UserRoom";

const WALLETS = [
  {
    label: "Phantom",
    id: "phantom",
    type: "solana",
    image: PhantomImg,
  },
  {
    label: "Solflare",
    id: "solflare",
    type: "solana",
    image: SolflareImg,
  },
  {
    label: "Metamask",
    id: "metamask",
    type: "ethereum",
    image: MetamaskImg,
  },
];

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { steps } = router.query;
  const { userInfo, step } = useSelector((state: RootStateOrAny) => ({
    userInfo: state.auth.userInfo,
    step: state.auth.step,
  }));

  const [avatar, setAvatar] = useState<Object>(null);

  const publicKey = localStorage.getItem("publickey");
  const walletType = localStorage.getItem("type");

  useEffect(() => {
    if (publicKey) {
      const payload = {
        value: publicKey,
        type: "solanaAddress",
      };
      dispatch(changeInfo({ payload: payload }));
    }
  }, []);

  const onGoStep = (stepNum) => {
    const payload = {
      stepNum,
    };
    dispatch(goStep({ payload: payload }));
  };

  return (
    <div className="flex flex-row justify-center gap-[25px] mt-[50px] items-center">
      <div className="w-[90%] xl:w-[60%] md:w-[60%]">
        <div className="relative w-auto mx-auto">
          <div className="rounded-[30px] min-h-[calc(100vh-100px)] shadow-lg relative w-full bg-[#141416] outline-none focus:outline-none flex flex-row">
            <div className="hidden xl:w-[40%] xl:block h-full">
              <div className="py-6">
                <Logo />
              </div>
              <Circle />
              <ProgressBar />
            </div>
            <div className="w-[100%] xl:w-[60%] h-full flex flex-col">
              {step === 1 && <UserInfo goStep={onGoStep} />}
              {step === 2 && <UserDaos goStep={onGoStep} />}
              {step === 3 && (
                <UserPic
                  setAvatar={setAvatar}
                  avatar={avatar}
                  goStep={onGoStep}
                />
              )}
              {step === 4 && (
                <EditStyle goStep={onGoStep} />    
              )}
              {step === 5 && <UserRoom goStep={onGoStep} />}
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[50%] xl:w-[40%] hidden lg:block">
        <NftDemo setAvatar={setAvatar} avatar={avatar} goStep={onGoStep} />
      </div>
    </div>
  );
};

export default RegisterPage;
