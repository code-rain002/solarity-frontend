import React, { useState } from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ButtonLabel } from "components/Common/Buttons";

import { ConnectWalletModal } from "./ConnectWalletModal";
import { BannericonImg1, BannericonImg2, BannericonImg3 } from "components/Common/Images";

export const BannerText = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <>
        <div className="my-[3vh] relative text-center sm:text-left">
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
              <span className="text-white text-[46px] md:text-[60px] lg:text-[74px] font-semibold tracking-wide leading-[2.7rem] md:leading-[120%] banner-text">
                <label className="text-gradient">Start your </label><br />
                <label>web3</label> <label className="text-gradient pl-[13px]">journey</label></span>
            </AnimationOnScroll>
        </div>
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
          <div className="my-[2.2vh] mb-[56px] text-center sm:text-left">
            <div className="flex items-center mb-[1.5vh]">
                <ButtonLabel icon={BannericonImg1} />
                <label className="leading-[60px] text-white pl-6">Connect your wallet</label> 
            </div>
            <div className="flex items-center mb-[1.5vh]">
                <ButtonLabel icon={BannericonImg2} />
                <label className="leading-[60px] text-white pl-6">Create passport</label> 
            </div>
            <div className="flex items-center mb-[1.5vh]">
                <ButtonLabel icon={BannericonImg3} />
                <label className="leading-[60px] text-white pl-6">Start exploring!</label> 
            </div>
          </div>
        </AnimationOnScroll>
        <ConnectWalletModal />
    </>
  );
};
