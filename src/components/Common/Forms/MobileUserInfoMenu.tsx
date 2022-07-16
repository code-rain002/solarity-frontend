import React from "react"
import { UpArrow, DownArrow, SettingsIcon, LogOutIcon } from "components/icons"


const MobileUserInfoMenu = (props) => {
    return (
        <div className="select-none flex flex-row w-full items-center justify-between border-l-semiSplitter border-l-[1px] h-full pt-[16px] pb-[32px] px-[24px] ">
            <div className="flex">
              <div className="flex justify-center w-10 h-10 bg-[#1F1F20] rounded-[15px] items-center cursor-pointer" >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#3F3F43" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
              </div>
              <div className="group relative ml-[14px] text-[#929298] text-[14px] font-500 cursor-pointer flex items-center" onMouseEnter={props.onEnter} onMouseLeave={props.onLeave}>
                  Konstantin1982.sol
              </div>
            </div>

            <div className="flex gap-[27px]">
                <SettingsIcon />
                <LogOutIcon />
            </div>
        </div>
    )
}

export default MobileUserInfoMenu