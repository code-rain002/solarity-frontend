import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { MENU_ITEMS } from "../../data/HeaderMenu";

const Footer = (props) => {
  const { profileData } = useSelector((state: RootStateOrAny) => ({
    profileData: state.profile.data
  }))
  const [currentPath, setCurrentPath] = useState('')
  const { asPath } = useRouter();

  useEffect(() => {
    const pathSegments = asPath.split("/");
    setCurrentPath(pathSegments[pathSegments.length - 1]);
    console.log(profileData);
  }, [asPath])

  return (
    <div className="fixed bottom-0 w-full border-t-[1px] p-[14px] py-[20px] px-5 border-semiSplitter flex justify-between bg-[#141414]">
      {
        MENU_ITEMS.map((item, index) => (
          <div
            className={"cursor-pointer hover:text-primary " + (currentPath == item.path ? "text-primary" : "text-white")}
            key={index}
          >
            <Link href={(item.name == 'user' && !!profileData.username) ? `/${profileData.username}/${item.path}` : `/${item.path}`}>
              <a>{item.content}</a>
            </Link>
          </div>
        ))
      }
    </div>
  );
}

export default Footer;