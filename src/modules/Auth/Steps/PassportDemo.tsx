import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Image from "next/image";

import Dropzone from 'react-dropzone'

import { AddressButton, WalletButton, PrimaryButton, BackButton } from "components/Common/Buttons";

import Logo from "components/Common/Logo";

import { AddressImg, AvatarImg, DaoBGImg, DaoImg1, DaoImg2, DaoPicImg, DiscordImg, EthereumImg, GalleryImg, GithubImg, PolygonImg, ProfileImg, TwitterImg } from "components/Common/Images";
import { DomainInput, SharedInput } from "components/Common/Forms";
import { AvatarPanel, DaoPanel } from "components/Common/Panels";
import { DiscordLink } from "../Links";
import { TwitterLink } from "../Links/TwitterLink";
import { minifyAddress } from "utils";

import { useDispatch, RootStateOrAny, useSelector } from "react-redux";
import { setup } from '../../../redux/slices/profileSlice'
import { startLoadingApp, stopLoadingApp } from '../../../redux/slices/commonSlice'

const PassportDemo = () => {
  const dispatch = useDispatch()
  const router = useRouter();
  const { steps } = router.query
  const { profileData } = useSelector(
    (state: RootStateOrAny) => ({
      profileData: state.profile.data
    })
  );

  // bug code
  const publicKey = localStorage.getItem('publickey');
  const walletType = localStorage.getItem('type');

  const miniPublicKey = minifyAddress(publicKey, 3);
  const provider = (window as any).phantom.solana;

  const [step, setStep] = useState<Number>(0);
  const [files, setFiles] = useState<File[]>(null);
  const [loadedFiles, setLoadedFiles] = useState<any[]>([]);
  const [domain, setDomain] = useState<String>('');
  const [title, setTitle] = useState<String>('');
  const [selectedAvatar, setSelectedAvatar] = useState<File>(null);


  useEffect(() => {
    // const { infoAdded, accountsLinked, daoClaimed, profilePicUpdated } = profileData.stepsCompleted
    // if (infoAdded) {
    //   setStep(1)
    // }
    // if (daoClaimed) {
    //   setStep(2)
    // }
  })

  const onLoadAvatar = (files) => {
    setFiles(files);
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        let listFiles = loadedFiles;
        listFiles.push(reader.result);
        setLoadedFiles([...listFiles]);
        console.log(loadedFiles);
      }
    };

    reader.readAsDataURL(files[0]);
  }

  useEffect(() => {
    dispatch(startLoadingApp())
    switch (step) {
      case 1:
        if (domain !== "" && title !== "") {
          const payload = {
            action: "info",
            domain,
            title
          }
          dispatch(setup({
            data: payload,
            successFunction: () => { },
            errorFunction: () => { },
            finalFunction: () => { },
          }))
        } else {
          alert('please input field')
          setStep(1)
          return;
        }
        break;
      case 2:

    }
    dispatch(stopLoadingApp())
  }, [step]);

  if (steps === 'userInfo') {
    // return 
  }

  return (
    <div className="hidden lg:block text-center">
      <Logo />
      <div className="relative h-[calc(100vh-180px)]">
        <div className="absolute w-[576px] h-[384px] bg-[#159C6C] left-0 right-0 top-0 bottom-0 m-auto rounded-[40px] passport-card z-10">
          <div className="absolute w-[576px] h-[268px] left-0 right-0 top-0 bottom-0 mx-auto rounded-[40px] passport-body">
            <div className="mt-[45px]">
              <Image src={AvatarImg} />
            </div>
            <div className="mt-[18px]">
              <span className="text-white/80 text-[24px] z-[30]">{domain ? domain : "Enter your domain"}</span>
            </div>
            <div className="mt-[5px]">
              <span className="text-white/80 text-[18px] z-[30]">{title ? title : "Enter your title"}</span>
            </div>
            <div className="mt-[3px]">
              <span className="text-white/60 text-[16px] z-[30]">Connect your socials</span>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-[268px] h-[116px]">
            <div className="z-10 passport-liner !pt-3">
              <span className="text-white/60">Wallets</span>
              <div className="mt-3"><Image src={AddressImg} /></div>
            </div>
            <div className="z-10 !pt-3">
              <span className="text-white/60">Your DAOs</span>
              <div className="mt-2 justify-between relative margin-auto">
                <div className="absolute left-0 right-0 -ml-[30px]"><Image src={DaoImg2} /></div>
                <div className="absolute left-0 right-0 ml-[25px]"><Image src={DaoImg1} /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="eclipse-1 absolute"></div>
        <div className="eclipse-2 absolute"></div>
      </div>
    </div>
  );
};

export default PassportDemo;