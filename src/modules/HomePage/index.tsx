import React from "react";
import Image from "next/image";
import { BannerText } from "./BannerText";
import { BannerImage } from "./BannerImage";
import { BannerLeftImg, BannerRightImg } from "components/Common/Images";
import { ConnectWallet } from "./ConnectWallet";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export const HomePage = () => {
  return (
    <>
      <div className="block sm:hidden mobile-gradient"></div>
      <div className="block sm:hidden mobile-gradient-2"></div>
      <div className="absolute block sm:hidden -ml-[37px] -mt-[50px] w-[50vw]">
        <Image src={BannerLeftImg} alt="Solarity" layout="responsive" className="custom-animation-bounce banner-image"></Image>
      </div>
      <div className="absolute block sm:hidden right-0 -ml-[20px] -mt-[50px] w-[50vw]">
        <Image src={BannerRightImg} alt="Solarity" layout="responsive" className="custom-animation-bounce banner-image"></Image>
      </div>
      <div className="absolute block sm:hidden"><BannerImage isMobile={false} /></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-[20px] items-baseline px-[10px] sm:pl-0">
        <div>
          <BannerText />
          <ConnectWallet />
        </div>
      </div>
      <div className="hidden sm:block absolute top-0 right-0 -z-10"><BannerImage isMobile={true} /></div>
    </>
  );
};
