import React, { useState } from "react";
import Image from "next/image";

import { LogoSVGImg } from "../Common/Images";
import { Your_Daos, Top_Daos, MagnifyIcon } from "../../data/Sidebar";
import SideAvatar, { SidebarAvatarName } from "../Common/Layout/SidebarAvatar";
import { RightArrow } from "components/icons";
import { LeftArrow } from "components/icons";

const ToggleShowBtn = (props) => {
  return (
    <div
      className={`cursor-pointer w-[28px] h-[28px] rounded-[5px] border-[#272829] border-[2px] flex items-center justify-center bg-globalBgColor
                        absolute ${props.toggle ? "right-[-154px]" : "right-[-14px]"
        } top-[36px] z-[999]`}
      onClick={props.onClick}
    >
      {props.toggle ? <LeftArrow /> : <RightArrow />}
    </div>
  );
};

export const ToggleChatBtn = (props) => {
  return (
    <div
      className={`cursor-pointer w-[28px] h-[28px] rounded-[5px] border-[#272829] border-[2px] flex items-center justify-center bg-globalBgColor top-[36px] z-[999]
      ${props.toggle ? 'border-primary text-primary' : 'text-[#343434]'}
      `}
      onClick={props.onClick}
    >
      {props.toggle ? <LeftArrow /> : <RightArrow />}
    </div>
  );
};

const Sidebar = (props) => {
  return (
    <div className="fixed top-[92px] left-0 bottom-0 overflow-y-auto z-[100]">
      <div className="sm:flex xs:hidden flex-row border-r-[1px] border-semiSplitter bg-globalBgColor">
        <div className={`relative flex flex-col w-[100px]  items-center`}>
          {/* <div className="px-[25px] py-[21px] border-b-[1px] border-semiSplitter relative">
            <div className="w-[50px] h-[50px] cursor-pointer">
              <Image src="/favicon.png" width={40} height={40}></Image>
            </div>
            <ToggleShowBtn
              toggle={props.sidebarToggler}
              onClick={props.onClick}
            />
          </div> */}
          <div
            className={`w-full pt-[18px] pb-[26px] border-b-[1px] border-semiSplitter flex flex-col items-center`}
          >
            <div
              className={`text-[14px] font-[500] text-[#474749] text-center pb-[16px]`}
            >
              {Your_Daos.title}
            </div>
            {Your_Daos.avatars.map(function (i) {
              return (
                <SideAvatar
                  key={i.name}
                  img_url={i.url}
                  name={i.name}
                  expanded={!props.sidebarToggler}
                />
              );
            })}
          </div>
          <div
            className={`w-full pt-[18px] pb-[26px] border-b-[1px] border-semiSplitter flex flex-col items-center`}
          >
            <div
              className={`text-[14px] font-[500] text-[#474749] text-center pb-[16px]`}
            >
              {Top_Daos.title}
            </div>
            <div
              className="relative group border-[1px] border-[#272829] hover:border-[#29B080] hover:shadow-[0_0_5px_4px_rgba(41,176,128,0.1)] duration-300 
                              rounded-[20px] w-[48px] h-[48px] mb-[16px] flex items-center justify-center cursor-pointer"
            >
              {MagnifyIcon}
              <div
                className={`absolute left-[65px] z-[1000] pt-[8px] pb-[10px] px-[0px]  bg-[#181818] border-[#1d1f1f] rounded-tl-[3px]
                              rounded-r-[12px] rounded-b-[12px] font-500 text-primary text-[14px] w-[0px] shadow-none shadow-transparent
                              overflow-hidden  truncate opacity-0 ${props.sidebarToggler
                    ? ""
                    : "group-hover:opacity-100 group-hover:w-max group-hover:px-[12px]"
                  }`}
              >
                Browse
              </div>
            </div>
            {Top_Daos.avatars.map(function (i) {
              return (
                <SideAvatar
                  key={i.name}
                  img_url={i.url}
                  name={i.name}
                  expanded={!props.sidebarToggler}
                />
              );
            })}
          </div>
        </div>

        <div
          className={`flex flex-col ${props.sidebarToggler ? "w-[140px]" : "w-[0px]"
            } h-full items-start`}
        >
          <div className="px-[0px] py-[35.5px] border-b-[1px] border-semiSplitter relative w-full">
            <div
              className={`w-full h-full cursor-pointer font-500 text-[14px] text-[#f3f3f3] truncate ml-[-11px]`}
            >
              SOLARITY
            </div>
          </div>
          <div
            className={`pt-[65px] pb-[16px] ml-[-11px] border-b-[1px] border-semiSplitter flex flex-col items-center w-full truncate`}
          >
            {Your_Daos.avatars.map(function (i) {
              return <SidebarAvatarName key={i.name} name={i.name} />;
            })}
          </div>
          <div
            className={`pt-[65px] pb-[16px] ml-[-11px] border-b-[1px] border-semiSplitter flex flex-col items-center w-full`}
          >
            <div
              className="duration-300 text-primary text-[16px] font-500 truncate
                                      w-full h-[48px] mb-[16px] flex justify-start cursor-pointer"
            >
              Browse
            </div>
            {Top_Daos.avatars.map(function (i) {
              return <SidebarAvatarName key={i.name} name={i.name} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
