import React, { useState } from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ButtonLabel } from "components/Common/Buttons";

import { ConnectWalletModal } from "./ConnectWalletModal";
import { BannericonImg1, BannericonImg2, BannericonImg3 } from "components/Common/Images";

export const BannerText = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <>
        <div className="mt-[13vh] mb-[5vh] sm:my-[3vh] relative text-left z-50">
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
              <span className="hidden sm:inline text-white text-[46px] md:text-[60px] lg:text-[74px] font-semibold tracking-wide leading-[2.7rem] md:leading-[120%] banner-text">
                <span className="text-gradient">Start your </span><br />
                <span>web3</span> <span className="text-gradient pl-[13px]">journey</span>
              </span>
              <span className="inline sm:hidden text-white text-[64px] font-semibold tracking-wide leading-[4.5rem] banner-text !text-left">
                <span>Start </span><br /><span>your web3</span><br />
                <span>journey</span>
              </span>
            </AnimationOnScroll>
        </div>
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn" className="relative z-50">
          <div className="my-[2.2vh] mb-[56px] text-left">
            <div className="flex items-center mb-[1.5vh]">
                <ButtonLabel icon={BannericonImg1} />
                <span className="leading-[60px] text-[#B3B3B7] pl-6">Connect your wallet</span> 
            </div>
            <div className="flex items-center mb-[1.5vh]">
                <ButtonLabel icon={BannericonImg2} />
                <span className="leading-[60px] text-[#B3B3B7] pl-6">Create passport</span> 
            </div>
            <div className="flex items-center mb-[1.5vh]">
                <ButtonLabel icon={BannericonImg3} />
                <span className="leading-[60px] text-[#B3B3B7] pl-6">Start exploring!</span> 
            </div>
          </div>
        </AnimationOnScroll>
        <ConnectWalletModal />
    </>
  );
};
