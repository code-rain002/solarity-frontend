import React from "react";
import Button from "../../common/Button";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ButtonLabel from "../../common/BannerLabel";

import buttonlabel1 from "../../../assets/images/bannericon1.png";
import buttonlabel2 from "../../../assets/images/bannericon2.png";
import buttonlabel3 from "../../../assets/images/bannericon3.png";

export const BannerText = () => {
  return (
    <>
        <div className="my-5 relative text-center sm:text-left">
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
              <span className="text-white text-[46px] md:text-[60px] lg:text-[84px] font-semibold tracking-wide leading-[2.7rem] md:leading-[120%] banner-text">
                <label className="text-gradient">Start your </label><br />
                <label>web</label><sup className="text-[33px] md:text-[36px] lg:text-[53px]">3</sup> <label className="text-gradient pl-[13px]">journey</label></span>
            </AnimationOnScroll>
        </div>
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
          <div className="my-[40px] mb-[56px] text-center sm:text-left">
            <div className="flex items-center mb-[25px]">
                <ButtonLabel icon={buttonlabel1} />
                <label className="leading-[60px] text-white pl-6 cursor-pointer">Connect your wallet</label> 
            </div>
            <div className="flex items-center mb-[25px]">
                <ButtonLabel icon={buttonlabel2} />
                <label className="leading-[60px] text-white pl-6 cursor-pointer">Create passport</label> 
            </div>
            <div className="flex items-center mb-[25px]">
                <ButtonLabel icon={buttonlabel3} />
                <label className="leading-[60px] text-white pl-6 cursor-pointer">Start exploring!</label> 
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3">
              <div className="pr-5 mb-5"><Button caption="Connect wallet" icon="" bordered={false} /></div>
          </div>
        </AnimationOnScroll>
    </>
  );
};
