import React, { useState } from "react";
import Image from "next/image";

import Logo from "../../assets/images/logo.png";

const Navbar = () => {

  return (
    //   navbar goes here
    <>
      <nav >
        <div className="max-w-[93rem] mx-auto h-24px px-3 sm:px-11 py-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* logo */}
              <div>
                <a href="/" className="flex items-center py-3 px-2 text-white">
                  <Image src={Logo} width={37} height={37}></Image>

                  <span className="font-semibold text-[25px] px-2 tracking-widest uppercase">Solarity</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
