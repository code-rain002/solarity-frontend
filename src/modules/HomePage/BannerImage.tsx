import React, { useEffect, FC } from "react";
import Image from "next/image";
import {
  BannerImg,
  BannerLeftImg,
  BannerMobileImg,
  BannerRightImg,
} from "components/Common/Images";
export interface BannerImageProps {
  isMobile: boolean;
}

export const BannerImage: FC<BannerImageProps> = ({ isMobile }) => {
  return (
    <>
      <div
        className={`grid grid-cols-1 relative text-right ${!!isMobile
          ? "banner-image-container"
          : "banner-image-container-mobile"
          }`}
      >
        <div className="round-glow-1 z-50"></div>
        <div className="round-glow-2 z-50"></div>
        <div className="round-glow-5 z-50 hidden lg:block"></div>
        {!!isMobile ? (
          <Image
            src={BannerImg}
            alt="Solarity"
            priority={false}
            objectFit={"contain"}
            className="custom-animation-bounce banner-image"
            layout="fixed"
          ></Image>
        ) : (
          <Image
            src={BannerMobileImg}
            alt="Solarity"
            priority={false}
            className="custom-animation-bounce banner-image"
            objectFit={"contain"}
            layout="fixed"
          ></Image>
        )}
      </div>
    </>
  );
};
