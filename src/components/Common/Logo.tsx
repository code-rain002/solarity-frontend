import React from "react";
import Image from "next/image";
import { LogoSVGImg } from "./Images";

const Logo = () => {
  return (
    <div>
        <a href="#" className="flex items-center py-3 px-2 text-white justify-center hidden sm:flex">
            <Image src={LogoSVGImg} width={37} height={37}></Image>
            <span className="font-semibold text-[25px] px-2 tracking-widest uppercase logo-text">Solarity</span>
        </a>
        <a href="#" className="flex items-center py-3 px-2 text-white justify-center flex sm:hidden">
            <Image src={LogoSVGImg} width={25} height={25}></Image>
            <span className="font-semibold text-[17px] px-3 tracking-widest uppercase logo-text">Solarity</span>
        </a>
    </div>
  );
};

export default Logo;