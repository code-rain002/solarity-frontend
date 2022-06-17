import React, { useState } from "react";
import Image from "next/image";

import Dropzone from 'react-dropzone'

import AddressButton from "../../common/Buttons/AddressButton";

import addressImg from "../../../assets/images/address.png";
import DomainInput from "../../common/Forms/DomainInput";
import WalletButton from "../../common/Buttons/WalletButton";

import avatar from '../../../assets/images/Avatar.png';
import twitterImg from "../../../assets/images/twitter.png";
import discordImg from "../../../assets/images/discord.png";
import githubImg from "../../../assets/images/github.png";
import PrimaryButton from "../../common/Buttons/PrimaryButton";
import Logo from "../../common/Logo";
import DaoImg1 from "../../../assets/images/dao-pic-1.png";
import DaoBackImg1 from "../../../assets/images/dao-bg-1.png";
import GalleryImg from "../../../assets/images/gallery.png";

import daoImg1 from "../../../assets/images/dao1.png";
import daoImg2 from "../../../assets/images/dao2.png";
import BackButton from "../../common/Buttons/BackButton";
import DaoPanel from "../../common/DaoPanel";

export const GeneralInfo = () => {
  const [step, setStep] = useState(0);
  const [files, setFiles] = useState(0);
  const [inputValue, setInputValue] = useState('');
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-[20px] items-baseline">
        {step == 0?<div className=" pr-[0] lg:pr-[20%]">
          <div className="relative w-auto my-6 mx-auto">
            {/*content*/}
            <div className="rounded-[30px] h-[calc(100vh-100px)] shadow-lg relative flex flex-col w-full bg-[#141416] outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between pt-5 pl-14 pr-12 rounded-t">
                <h3 className="text-[36px] text-white font-medium tracking-[0.02em]">
                  Creating a passport
                </h3>
                <AddressButton caption="Ak...VqT9" icon={addressImg} onClick={null} />
              </div>
              {/*body*/}
              <div className="relative p-14 flex-auto">
                <div>
                  <DomainInput changeValue={setInputValue} />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="my-6 lg:text-left">
                    <WalletButton caption="Connect" icon={twitterImg} onClick={null} styles="!w-[100%] lg:!w-[95%]" />
                  </div>
                  <div className="my-6 lg:text-center">
                    <WalletButton caption="Connected" icon={discordImg} onClick={null} styles="!w-[100%] lg:!w-[95%]" connected={true} />
                  </div>
                  <div className="my-6 lg:text-right">
                    <WalletButton caption="Connect" icon={githubImg} onClick={null} styles="!w-[100%] lg:!w-[95%]" />
                  </div>
                </div>
                <div className="grid grid-cols-1 mt-[20px]">
                  <div className="my-3">
                    <WalletButton caption="Connect ETH wallet" icon={twitterImg} onClick={null} styles="!w-[100%]" description="optional" />
                  </div>
                  <div className="my-3">
                    <WalletButton caption="Connect Polygon wallet" icon={discordImg} onClick={null} styles="!w-[100%]" description="optional" />
                  </div>
                </div>
              </div>
              <div className="w-full p-14 flex-auto absolute bottom-0">
                <div>
                  <PrimaryButton caption="Continue" icon="" bordered={false} onClick={() => setStep(1)} disabled={inputValue?false:true} styles="rounded-[15px]" />
                </div>
              </div>
            </div>
          </div>
        </div>:""}
        {step == 1?<div className=" pr-[0] lg:pr-[20%]">
          <div className="relative w-auto my-6 mx-auto">
            {/*content*/}
            <div className="rounded-[30px] h-[calc(100vh-100px)] shadow-lg relative flex flex-col w-full bg-[#141416] outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between pt-5 pl-14 pr-12 rounded-t">
                <h3 className="text-[36px] text-white font-medium tracking-[0.02em]">
                  DAOs you&apos;re already in 
                </h3>
                <AddressButton caption="Ak...VqT9" icon={addressImg} onClick={null} />
              </div>
              {/*body*/}
              <div className="relative p-14 flex-auto">
                <div className="grid grid-cols-2 xl:grid-cols-3">
                  <div className="p-2">
                    <DaoPanel imageSrc={DaoImg1} backSrc={DaoBackImg1} title="Solana Money Boys" />
                  </div>
                  <div className="p-2">
                    <DaoPanel imageSrc={DaoImg1} backSrc={DaoBackImg1} title="Solana Money Boys" />
                  </div>
                </div>
              </div>
              <div className="w-full p-14 flex-auto absolute bottom-0">
                <div className="inline-block w-[20%] pr-2">
                  <BackButton onClick={() => setStep(0)} styles="rounded-[15px]" />
                </div>
                <div className="inline-block w-[80%] pl-2">
                  <PrimaryButton caption="Continue" icon="" bordered={false} onClick={() => setStep(2)} disabled={false} styles="rounded-[15px]" />
                </div>
              </div>
            </div>
          </div>
        </div>:""}
        {step == 2?<div className=" pr-[0] lg:pr-[20%]">
          <div className="relative w-auto my-6 mx-auto">
            {/*content*/}
            <div className="rounded-[30px] h-[calc(100vh-100px)] shadow-lg relative flex flex-col w-full bg-[#141416] outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between pt-5 pl-14 pr-12 rounded-t">
                <h3 className="text-[36px] text-white font-medium tracking-[0.02em]">
                  Choose profile picture
                </h3>
                <AddressButton caption="Ak...VqT9" icon={addressImg} onClick={null} />
              </div>
              <div className="relative p-14 flex-auto">
              <Dropzone onDrop={acceptedFiles => {console.log(acceptedFiles); setFiles(acceptedFiles.length);}}>
                {({getRootProps, getInputProps}) => (
                  <div className="max-w-xl" {...getRootProps()}>
                    <input {...getInputProps()} />
                    <label
                        className="flex w-full h-24 px-4 transition bg-transparent border-2 border-white/20 border-dashed rounded-md appearance-none cursor-pointer hover:border-white/30 focus:outline-none">
                        <span className="flex items-center space-x-2 mr-3">
                          <Image src={GalleryImg} />
                        </span>
                        <span className="flex items-center space-x-2">
                            {files?<span className="font-medium text-[#f3f3f3]">
                                <label className="text-primary">{files}</label> file&#40;s&#41; selected
                                <br></br>
                                <label className="text-[14px] text-white/30">Supports&#58; JPEG, JPEG2000, PNG</label>
                            </span>:<span className="font-medium text-[#f3f3f3]">
                                Drop image here or&nbsp;<label className="text-primary">browse</label>
                                <br></br>
                                <label className="text-[14px] text-white/30">Supports&#58; JPEG, JPEG2000, PNG</label>
                            </span>}
                        </span>
                    </label>
                  </div>
                )}
              </Dropzone>
                
              </div>
              <div className="w-full p-14 flex-auto absolute bottom-0">
                <div className="inline-block w-[20%] pr-2">
                  <BackButton onClick={() => setStep(1)} styles="rounded-[15px]" />
                </div>
                <div className="inline-block w-[80%] pl-2">
                  <PrimaryButton caption="Continue" icon="" bordered={false} onClick={() => setStep(3)} disabled={false} styles="rounded-[15px]" />
                </div>
              </div>
            </div>
          </div>
        </div>:""}
        <div className="text-center">
          <Logo />
          <div className="relative h-[calc(100vh-180px)]">
            <div className="absolute w-[576px] h-[384px] bg-[#159C6C] left-0 right-0 top-0 bottom-0 m-auto rounded-[40px] passport-card z-10">
              <div className="absolute w-[576px] h-[268px] left-0 right-0 top-0 bottom-0 mx-auto rounded-[40px] passport-body">
                <div className="mt-[45px]">
                  <Image src={avatar} />
                </div>
                <div className="mt-[26px]">
                  <span className="text-white/80 text-[24px] z-[30]">{inputValue?inputValue:"Enter your domain"}</span>
                </div>
                <div className="mt-[5px]">
                  <span className="text-white/60 text-[16px] z-[30]">Connect your socials</span>
                </div>
              </div>
              <div className="grid grid-cols-2 mt-[268px] h-[116px]">
                <div className="z-10 passport-liner !pt-3">
                  <span className="text-white/60">Wallets</span>
                  <div className="mt-3"><Image src={addressImg}/></div>
                </div>
                <div className="z-10 !pt-3">
                  <span className="text-white/60">Your DAOs</span>
                  <div className="mt-2 justify-between relative margin-auto">
                    <div className="absolute left-0 right-0 -ml-[30px]"><Image src={daoImg2} /></div>
                    <div className="absolute left-0 right-0 ml-[25px]"><Image src={daoImg1} /></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="eclipse-1 absolute"></div>
            <div className="eclipse-2 absolute"></div>
          </div>
        </div>
      </div>
    </>
  );
};
