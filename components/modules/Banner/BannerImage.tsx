import React from "react";
import Image from "next/image";

import BannerImg from "../../../assets/images/bannerImg.png";

export const BannerImage = () => {
  return (
    <>
        <div className="grid grid-cols-1 relative text-right absolute banner-image-container">
            <div className="round-glow-1"></div>
            <div className="round-glow-2"></div>
            <div className="round-glow-3"></div>
            <div className="round-glow-4"></div>
            <div className="round-glow-5"></div>
            <Image src={BannerImg} alt="Solarity" objectFit={'contain'} className="custom-animation-bounce banner-image" layout="fixed"></Image>
        </div>
    </>
  );
};
