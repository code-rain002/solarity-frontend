import React from 'react'
import Image from 'next/image'

const ToolTip = ({children}) => {
    return (
        <div className="absolute left-[65px] duration-800 z-[1000] pt-[8px] pb-[10px] px-[0px] group-hover:px-[12px] bg-[#181818] border-[#1d1f1f] rounded-tl-[3px]
                        rounded-r-[12px] rounded-b-[12px] font-500 text-[#b3b3b7] text-[14px] w-[0px] group-hover:w-max
                        overflow-hidden opacity-0 group-hover:opacity-100 truncate">
                {children}
        </div>
    )
}

const SidebarAvatar = (props) => {
    return (
        <div className="group relative border-[1px] border-[#272829]  duration-800 
                        rounded-[20px] w-[48px] h-[48px] mb-[16px] flex items-center justify-center cursor-pointer" onClick={() => (alert("DAO!"))}>
            <Image src={props.img_url} width={32} height={32} alt={props.img_url} />
            <ToolTip>{props.name}</ToolTip>
        </div>
    )
}

// hover:border-[#29B080] hover:shadow-[0_0_5px_4px_rgba(41,176,128,0.1)]

export default SidebarAvatar