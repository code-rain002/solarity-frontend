import React from "react";
import Image from 'next/image';

const LogoComp = () => {
  return (
    <div className="flex w-full h-full items-center px-10 pr-20">
      <div className="w-16 h-16">
        <Image src={'/logos/simple-logo.png'} layout="responsive" width={60} height={60} />
      </div>
      <h1 className="pl-5 pt-1 font-semibold text-[30px] text-[#BCBCBC]">SOLARITY</h1>
    </div>
  );
}
export default LogoComp