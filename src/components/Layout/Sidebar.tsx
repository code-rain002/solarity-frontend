import React from 'react'
import { LogoSVGImg } from "../Common/Images"
import Image from 'next/image'
import { Your_Daos, Top_Daos, MagnifyIcon } from '../../data/Sidebar'
import  SideAvatar  from '../Common/Layout/SidebarAvatar'

const ToggleShowBtn = () => {
    return (
        <div
            className="cursor-pointer w-[28px] h-[28px] rounded-[5px] border-[#272829] border-[2px] flex items-center justify-center bg-globalBgColor
                        absolute right-[-14px] top-[36px]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#3F3F43" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
        </div>
    )
}


const Sidebar = () => {
    const your_daos_avatars = Your_Daos.avatars.map(function(i){
        return <SideAvatar key={i.name} img_url={i.url} name={i.name} />
    })

    const top_daos_avatars = Top_Daos.avatars.map(function(i){
        return <SideAvatar key={i.name} img_url={i.url} name={i.name} />
    })

    return (
        <div className="relative flex flex-col max-w-[100px] border-r-[1px] border-semiSplitter items-center" >
            <div className="px-[30px] py-[26px] border-b-[1px] border-semiSplitter relative">
                <div className="border-[1px] border-[#f3f3f3] rounded-[20px] w-10 h-10 cursor-pointer">
                    <Image src={LogoSVGImg} width={40} height={40}></Image>
                </div>
                <ToggleShowBtn />
            </div>

            <div className="pt-[18px] pb-[26px] border-b-[1px] border-semiSplitter flex flex-col items-center">
                <div className="text-[14px] font-[500] text-[#474749] text-center pb-[16px]">
                    {Your_Daos.title}
                </div>
                    {your_daos_avatars}
            </div>

            <div className="pt-[18px] pb-[26px] border-b-[1px] border-semiSplitter flex flex-col items-center">
                <div className="text-[14px] font-[500] text-[#474749] text-center pb-[16px]">
                    {Top_Daos.title}
                </div>
                <div className="relative group border-[1px] border-[#272829] hover:border-[#29B080] hover:shadow-[0_0_5px_4px_rgba(41,176,128,0.1)] duration-300 
                        rounded-[20px] w-[48px] h-[48px] mb-[16px] flex items-center justify-center cursor-pointer">
                    {MagnifyIcon}

                    <div className="absolute left-[65px] z-[1000] pt-[8px] pb-[10px] px-[0px] group-hover:px-[12px] bg-[#181818] border-[#1d1f1f] rounded-tl-[3px]
                        rounded-r-[12px] rounded-b-[12px] font-500 text-primary text-[14px] w-[0px] group-hover:w-max
                        overflow-hidden opacity-0 group-hover:opacity-100 truncate">
                            Browse
                    </div>
                </div>
                    {top_daos_avatars}
            </div>

            <div className="absolute h-full w-[100px] left-[80px] ">
                
            </div>

        </div>
    )
}

export default Sidebar