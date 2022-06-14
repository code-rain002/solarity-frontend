import React from "react";
import NavBar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  return (
    <div className="p-0 mobile-galaxy overflow-hidden">
      <NavBar />
      {props.children}
    </div>
  );
}
