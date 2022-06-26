import React, { FC } from "react";
import LandingNavBar from "./LandingNavBar";

type Props = {
  children: React.ReactNode;
};
const Index: FC<Props> = (props: Props) => {
  return (
    <div className="p-0 mobile-galaxy">
      <LandingNavBar />
      { props.children }
    </div>
  );
}

export default Index;