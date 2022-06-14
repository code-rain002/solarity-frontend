import React from "react";
import { BannerText } from "./BannerText";
import { BannerImage } from "./BannerImage";

export const Banner = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-[20px] min-h-[450px] md:min-h-[670px] items-center">
            <div className="block sm:hidden"><BannerImage /></div>
            <div><BannerText /></div>
      </div>
    </>
  );
};
