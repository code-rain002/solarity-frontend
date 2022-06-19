import React from "react";
import Image from "next/image";
import { BannerImg, BannerMobileImg } from "components/Common/Images";

export const BannerImage = (props) => {
  return (
    <>
        <div className="grid grid-cols-1 relative text-right absolute banner-image-container-mobile">
            <div className="round-glow-1"></div>
            <div className="round-glow-2"></div>
            <div className="round-glow-3"></div>
            <div className="round-glow-4"></div>
            <div className="round-glow-5"></div>
            {props.isMobile ? 
              <Image src={BannerImg} alt="Solarity" objectFit={'contain'} className="custom-animation-bounce banner-image" layout="fixed"></Image> : 
              <Image src={BannerMobileImg} alt="Solarity" layout={'responsive'} className="custom-animation-bounce banner-image"></Image>}
        </div>
    </>
  );
};
