import React from "react";
import Image from "next/image";

import LogoImg from "../../assets/images/logo.png";

const Logo = () => {
  return (
    <div>
        <a href="#" className="flex items-center py-3 px-2 text-white justify-center">
            <Image src={LogoImg} width={37} height={37}></Image>
            <span className="font-semibold text-[25px] px-2 tracking-widest uppercase logo-text">Solarity</span>
        </a>
    </div>
  );
};

export default Logo;