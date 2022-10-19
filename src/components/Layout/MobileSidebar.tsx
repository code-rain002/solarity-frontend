import React, { useState } from 'react'
import { LogoSVGImg } from "../Common/Images"
import Image from 'next/image'
import { Your_Daos, Top_Daos, MagnifyIcon } from '../../data/Sidebar'
import MobileSidebarAvatar from 'components/Common/Layout/MobileSidebarAvatar'

const MobileSidebar = (props) => {

    return (
        <div className='sm:hidden xs:flex flex-row border-l-[1px] border-semiSplitter bg-globalBgColor'>
            <div className={`relative flex flex-col w-[100px]  items-center`} >

                <div className={`w-full pt-[18px] pb-[26px] border-b-[1px] border-semiSplitter flex flex-col items-center`}>
                    <div className={`text-[14px] font-[500] text-[#474749] text-center pb-[16px]`}>
                        {Your_Daos.title}
                    </div>
                    {Your_Daos.avatars.map(function (i) {
                        return <MobileSidebarAvatar key={i.name} img_url={i.url} />
                    })}
                </div>
                <div className={`w-full pt-[18px] pb-[26px] border-b-[1px] border-semiSplitter flex flex-col items-center`}>
                    <div className={`text-[14px] font-[500] text-[#474749] text-center pb-[16px]`}>
                        {Top_Daos.title}
                    </div>
                    <div className="relative group border-[1px] border-[#272829] hover:border-[#29B080] hover:shadow-[0_0_5px_4px_rgba(41,176,128,0.1)] duration-300 
                            rounded-[16px] w-[40px] h-[40px] mb-[16px] flex items-center justify-center cursor-pointer">
                        {MagnifyIcon}
                        <div className={`absolute left-[65px] z-[1000] pt-[8px] pb-[10px] px-[0px]  bg-[#181818] border-[#1d1f1f] rounded-tl-[3px]
                            rounded-r-[12px] rounded-b-[12px] font-500 text-primary text-[14px] w-[0px] shadow-none shadow-transparent
                            overflow-hidden  truncate opacity-0 ${props.sidebarToggler ? "" : "group-hover:opacity-100 group-hover:w-max group-hover:px-[12px]"}`}>
                            Browse
                        </div>
                    </div>
                    {Top_Daos.avatars.map(function (i) {
                        return <MobileSidebarAvatar key={i.name} img_url={i.url} />
                    })}
                </div>
            </div>

        </div>
    )
}

export default MobileSidebar