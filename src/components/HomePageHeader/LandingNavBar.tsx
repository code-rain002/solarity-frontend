import React, { useState } from "react";

import Logo from "components/Common/Logo";

const LandingNavBar = () => {

  return (
    <>
      <nav className="absolute sm:relative">
        <div className="max-w-[93vw] mx-auto h-24px px-3 sm:px-11 py-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <Logo />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default LandingNavBar;
