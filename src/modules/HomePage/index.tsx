import React from "react";
import { BannerText } from "./BannerText";
import { BannerImage } from "./BannerImage";

export const HomePage = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-[20px] min-h-[100vh] items-baseline">
        <div className="absolute block sm:hidden"><BannerImage isMobile={false} /></div>
        <div><BannerText /></div>
      </div>
      <div className="hidden sm:block absolute top-0 right-0 -z-10"><BannerImage isMobile={true} /></div>
    </>
  );
};
