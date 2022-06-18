import React from "react";
import NavBar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  console.log();
  return (
    <div className="p-0 mobile-galaxy">
      {
        props.children['type'].name == "Home"?<NavBar />:""
      }
      {props.children}
    </div>
  );
}
