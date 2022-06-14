import React from "react";
import Button from "../../common/Button";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const BannerText = () => {
  return (
    <>
        <div className="my-5 relative text-center sm:text-left">
            <div className="absolute w-[400px] h-[400px] -top-[180px] -left-[200px] -z-50 bg-gradient-radial from-purple-500 via-pink-500 to-red-500"></div>
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
              <span className="text-white text-[26px] md:text-[88px] font-semibold tracking-wider leading-[2.7rem] md:leading-[120%] banner-text">
                <label className="text-gradient">Start your </label><br />
                <label>Web</label><sup className="text-[53px]">3</sup> <label className="text-gradient pl-[13px]">journey</label></span>
            </AnimationOnScroll>
        </div>
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
          <div className="my-5 mb-[56px] text-center sm:text-left">
              <span className="text-content text-[14px] md:text-[22px]">Building, accelerating and powering <br /> the metaverse, one DAO at a time.</span>
              <span className="text-content text-[14px] md:text-[22px]">Building, accelerating and powering <br /> the metaverse, one DAO at a time.</span>
              <span className="text-content text-[14px] md:text-[22px]">Building, accelerating and powering <br /> the metaverse, one DAO at a time.</span>
              <span className="text-content text-[14px] md:text-[22px]">Building, accelerating and powering <br /> the metaverse, one DAO at a time.</span>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3">
              <div className="pr-5 mb-5"><Button caption="Connect Wallet" icon="" bordered={false} /></div>
          </div>
        </AnimationOnScroll>
    </>
  );
};
