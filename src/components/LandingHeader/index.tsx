import React from "react";
import LandingNavBar from "./LandingNavBar";

type Props = {
  children: React.ReactNode;
};

const LandingHeader = ({ children }: Props) => {
  return (
    <div className="p-0 mobile-galaxy">
      <LandingNavBar />
      { children }
    </div>
  );
}

export default LandingHeader