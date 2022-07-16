import React, { useState } from 'react'
import { LogoSVGImg } from "../Common/Images"
import Image from 'next/image'
import { Your_Daos, Top_Daos, MagnifyIcon } from '../../data/Sidebar'
import  SideAvatar, { SidebarAvatarName }  from '../Common/Layout/SidebarAvatar'


const RightArrow = () => {
    return (
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.941223 9.99156C1.16289 9.99156 1.38456 9.90989 1.55956 9.73489L5.67789 5.61656C6.01622 5.27823 6.01622 4.71823 5.67789 4.3799L1.55956 0.261562C1.22122 -0.0767708 0.661223 -0.0767708 0.32289 0.261562C-0.0154433 0.599896 -0.0154433 1.1599 0.32289 1.49823L3.82289 4.99823L0.32289 8.49823C-0.0154433 8.83656 -0.0154433 9.39656 0.32289 9.73489C0.486223 9.90989 0.70789 9.99156 0.941223 9.99156Z" fill="#3F3F43"/>
        </svg>

    )
}

const LeftArrow = () => {
    return (
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.05878 9.99156C4.83711 9.99156 4.61544 9.90989 4.44044 9.73489L0.322109 5.61656C-0.016224 5.27823 -0.016224 4.71823 0.322109 4.3799L4.44044 0.261562C4.77878 -0.0767708 5.33878 -0.0767708 5.67711 0.261562C6.01544 0.599896 6.01544 1.1599 5.67711 1.49823L2.17711 4.99823L5.67711 8.49823C6.01544 8.83656 6.01544 9.39656 5.67711 9.73489C5.51378 9.90989 5.29211 9.99156 5.05878 9.99156Z" fill="#3F3F43"/>
        </svg>
    )
}

const ToggleShowBtn = (props) => {
    return (
        <div
            className={`cursor-pointer w-[28px] h-[28px] rounded-[5px] border-[#272829] border-[2px] flex items-center justify-center bg-globalBgColor
                        absolute ${props.toggle ? 'right-[-154px]' : 'right-[-14px]'} top-[36px] z-[999]`}  onClick={props.onClick}>
                {props.toggle ? <LeftArrow /> : <RightArrow />}
        </div>
    )
}


const Sidebar = (props) => {


    const your_daos_avatars = Your_Daos.avatars.map(function(i){
        return <SideAvatar key={i.name} img_url={i.url} name={i.name} expanded={!props.sidebarToggler} />
    })

    const top_daos_avatars = Top_Daos.avatars.map(function(i){
        return <SideAvatar key={i.name} img_url={i.url} name={i.name} expanded={!props.sidebarToggler} />
    })

    const your_daos_names = Your_Daos.avatars.map(function(i){
        return <SidebarAvatarName key={i.name} name={i.name} />
    })

    const top_daos_names = Top_Daos.avatars.map(function(i){
        return <SidebarAvatarName key={i.name} name={i.name} />
    })

    return (
        <div className='sm:flex xs:hidden flex-row border-r-[1px] border-semiSplitter bg-globalBgColor'>
            <div className={`relative flex flex-col w-[100px]  items-center`} >
                <div className="px-[30px] py-[26px] border-b-[1px] border-semiSplitter relative">
                    <div className="border-[1px] border-[#f3f3f3] rounded-[20px] w-10 h-10 cursor-pointer">
                        <Image src={LogoSVGImg} width={40} height={40}></Image>
                    </div>
                    <ToggleShowBtn toggle={props.sidebarToggler} onClick={props.onClick} />
                </div>
                <div className={`w-full pt-[18px] pb-[26px] border-b-[1px] border-semiSplitter flex flex-col items-center`}>
                    <div className={`text-[14px] font-[500] text-[#474749] text-center pb-[16px]`}>
                        {Your_Daos.title}
                    </div>
                        {your_daos_avatars}
                </div>
                <div className={`w-full pt-[18px] pb-[26px] border-b-[1px] border-semiSplitter flex flex-col items-center`}>
                    <div className={`text-[14px] font-[500] text-[#474749] text-center pb-[16px]`}>
                        {Top_Daos.title}
                    </div>
                    <div className="relative group border-[1px] border-[#272829] hover:border-[#29B080] hover:shadow-[0_0_5px_4px_rgba(41,176,128,0.1)] duration-300 
                            rounded-[20px] w-[48px] h-[48px] mb-[16px] flex items-center justify-center cursor-pointer">
                        {MagnifyIcon}
                        <div className={`absolute left-[65px] z-[1000] pt-[8px] pb-[10px] px-[0px]  bg-[#181818] border-[#1d1f1f] rounded-tl-[3px]
                            rounded-r-[12px] rounded-b-[12px] font-500 text-primary text-[14px] w-[0px] shadow-none shadow-transparent
                            overflow-hidden  truncate opacity-0 ${props.sidebarToggler ? "" : "group-hover:opacity-100 group-hover:w-max group-hover:px-[12px]"}`}>
                                Browse
                        </div>
                    </div>
                        {top_daos_avatars}
                </div>
            </div>

            <div className={`flex flex-col ${props.sidebarToggler ? 'w-[140px]' : 'w-[0px]'} h-full items-start`}>
                <div className="px-[0px] py-[35.5px] border-b-[1px] border-semiSplitter relative w-full">
                    <div className={`w-full h-full cursor-pointer font-500 text-[14px] text-[#f3f3f3] truncate ml-[-11px]`}>
                        SOLARITY
                    </div>
                </div>
                <div className={`pt-[65px] pb-[16px] ml-[-11px] border-b-[1px] border-semiSplitter flex flex-col items-center w-full truncate`}>
                        {your_daos_names}
                </div>
                <div className={`pt-[65px] pb-[16px] ml-[-11px] border-b-[1px] border-semiSplitter flex flex-col items-center w-full`}>
                    <div className="duration-300 text-primary text-[16px] font-500 truncate
                                    w-full h-[48px] mb-[16px] flex justify-start cursor-pointer">
                                Browse
                    </div>
                        {top_daos_names}
                </div>
            </div>
        </div>
    )
}

export default Sidebar