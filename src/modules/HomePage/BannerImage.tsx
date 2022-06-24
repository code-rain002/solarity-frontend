import React from "react";
import Image from "next/image";
import { BannerImg, BannerLeftImg, BannerMobileImg, BannerRightImg } from "components/Common/Images";

export const BannerImage = (props) => {
  return (
    <>
        <div className={`grid grid-cols-1 relative text-right absolute ${props.isMobile?'banner-image-container':'banner-image-container-mobile'}`}>
            <div className="round-glow-1 z-50"></div>
            <div className="round-glow-2 z-50"></div>
            <div className="round-glow-3 z-50"></div>
            <div className="round-glow-4 z-50"></div>
            <div className="round-glow-5 z-50"></div>
            {props.isMobile ? 
              <Image src={BannerImg} alt="Solarity" objectFit={'contain'} className="custom-animation-bounce banner-image" layout="fixed"></Image> : 
              <>
                <Image src={BannerMobileImg} alt="Solarity" className="custom-animation-bounce banner-image"></Image>
                
              </>}
            
        </div>
    </>
  );
};
