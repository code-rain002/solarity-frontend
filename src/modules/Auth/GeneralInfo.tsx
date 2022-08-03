import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import Logo from "components/Common/Logo";

import { AddressImg, AvatarImg, DaoBGImg, DaoImg1, DaoImg2, GalleryImg } from "components/Common/Images";
import { MetamaskImg, PhantomImg, SlopeImg, SolflareImg, SolletExImg, SolletImg, TorusImg } from "components/Common/Images";
import { useDispatch, RootStateOrAny, useSelector } from "react-redux";
import { setup, getUserDaos } from '../../redux/slices/profileSlice'
import { startLoadingApp, stopLoadingApp } from '../../redux/slices/commonSlice'
import { UserDaos, UserInfo, UserPic } from "./Steps";
import { UserAvatar } from "components/Common/Panels";
import { changeInfo, goStep } from "redux/slices/authSlice";

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

export const GeneralInfo = () => {
  const dispatch = useDispatch()
  const router = useRouter();
  const { steps } = router.query
  const { userInfo, step } = useSelector(
    (state: RootStateOrAny) => ({
      userInfo: state.auth.userInfo,
      step: state.auth.step
    })
  );

  const [domain, setDomain] = useState<String>(undefined);
  const [title, setTitle] = useState<String>('');
  const [daos, setDaos] = useState<Object[]>([]);
  const [avatar, setAvatar] = useState<Object>(null);

  const publicKey = localStorage.getItem('publickey');
  const walletType = localStorage.getItem('type');

  useEffect(() => {
    const payload = {
      value: publicKey,
      type: "solanaAddress"
    }
    dispatch(changeInfo({ payload: payload }))
  }, [])

  const handleUserDaos = () => {
    dispatch(startLoadingApp())
    dispatch(getUserDaos({
      successFunction: () => {
        dispatch(stopLoadingApp())
      },
      errorFunction: () => { },
      finalFunction: () => { },
    }))
  }

  const handleUserPic = () => {
    const address = userInfo.solanaAddress
    console.log(address)
    const mintingUrl = process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_LOCAL_MINTING_URL : process.env.NEXT_PUBLIC_MINTING_URL
    console.log(mintingUrl)
    window.location.href = `${mintingUrl}/mint/${address}`
  }

  const onGoStep = (stepNum) => {
    const payload = {
      stepNum
    }
    dispatch(goStep({ payload: payload }))
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-[20px] items-baseline">
      {
        step === 1 ?
          <UserInfo
            goStep={onGoStep}
          />
          : step === 2 ?
            <UserDaos
              getDaos={handleUserDaos}
              setDaos={setDaos}
            />
            : step === 3 ?
              <UserPic
                setAvatar={setAvatar}
                avatar={avatar}
                submit={handleUserPic}
              />
              : null
      }
      <div className="hidden lg:block text-center">
        <Logo />
        <div className="relative h-[calc(100vh-180px)]">
          <div className="absolute w-[576px] h-[384px] bg-[#159C6C] left-0 right-0 top-0 bottom-0 m-auto rounded-[40px] passport-card z-10">
            <div className="absolute w-[576px] h-[268px] left-0 right-0 top-0 bottom-0 mx-auto rounded-[40px] passport-body">
              {
                avatar ?
                  <div className="mt-[26px] flex justify-center">
                    <UserAvatar imageSrc={avatar} title="RESSURECTION..." />
                  </div>
                  :
                  <div className="mt-[45px] flex justify-center">
                    <Image src={AvatarImg} />
                  </div>
              }
              {/* <Image src={AvatarImg} /> */}
              {/* <AvatarPanel imageSrc={avatar} title="RESSURECTION..." /> */}
              <div className="mt-[18px]">
                <span className="text-white/80 text-[24px] z-[30]">{userInfo.domain ? userInfo.domain : "Enter your domain"}</span>
              </div>
              <div className="mt-[5px]">
                <span className="text-white/80 text-[18px] z-[30]">{userInfo.title ? userInfo.title : "Enter your title"}</span>
              </div>
              <div className="mt-[3px]">
                <span className="text-white/60 text-[16px] z-[30]">Connect your socials</span>
              </div>
            </div>
            <div className="grid grid-cols-2 mt-[268px] h-[116px]">
              <div className="z-10 passport-liner !pt-3">
                <span className="text-white/60">Wallets</span>
                <div className="mt-3">
                  {
                    <span className="ml-1">
                      {userInfo.solanaAddress ? <Image src={PhantomImg} /> : null}
                    </span>
                  }
                  {
                    <span className="ml-1">
                      {userInfo.ethereumAddress ? <Image src={MetamaskImg} /> : null}
                    </span>
                  }
                </div>
              </div>
              <div className="z-10 !pt-3">
                <span className="text-white/60">Your DAOs</span>
                <div className="mt-2 justify-between relative margin-auto">
                  {
                    daos?.length ?
                      daos.map((dao, index) => (
                        <div className="absolute left-0 right-0 -ml-[30px]"><Image src={DaoImg2} /></div>
                      ))
                      : null
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="eclipse-1 absolute"></div>
          <div className="eclipse-2 absolute"></div>
        </div>
      </div>
    </div>
  );
};
