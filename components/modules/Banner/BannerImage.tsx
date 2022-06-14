import React from "react";
import Image from "next/image";

import BannerImg from "../../../assets/images/bannerImg.png";

export const BannerImage = () => {
  return (
    <>
        <div className="grid grid-cols-1 relative text-right absolute banner-image-container">
          <Image src={BannerImg} alt="Solarity" objectFit={'contain'} className="custom-animation-bounce banner-image" layout="fixed"></Image>
        </div>
    </>
  );
};
