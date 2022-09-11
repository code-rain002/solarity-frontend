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
import { UserDaos, UserInfo, UserPic } from "./Steps";
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
    <div className="flex flex-row justify-center gap-[55px] mt-[20px] items-center">
      <div className="w-[40%] max-w-[500px] hidden lg:block">
        <div className="relative w-auto mx-auto">
          <div className="rounded-[30px] min-h-[calc(100vh-100px)] shadow-lg relative flex flex-col w-full bg-[#141416] outline-none focus:outline-none">
            <div className="pt-6"><Logo /></div>
            <Circle />
            <ProgressBar />
          </div>
        </div>
      </div>
      <div className="w-[80%] lg:w-[60%] max-w-[750px]">
        <div className="relative w-auto my-6 mx-auto">
          <div className="rounded-[30px] min-h-[calc(100vh-100px)] shadow-lg relative flex flex-col w-full h-full justify-between bg-[#141416] outline-none focus:outline-none">
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
              <NftDemo
                setAvatar={setAvatar}
                avatar={avatar}
                goStep={onGoStep}
              />
            )}
            {step === 5 && <UserRoom goStep={onGoStep} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
