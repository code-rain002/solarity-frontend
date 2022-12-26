import React from 'react'
import Image from 'next/image'

const ToolTip = ({ children }) => {
    return (
        <div className="absolute right-[80px] duration-800 pt-[8px] pb-[10px] px-[0px] group-hover:px-[12px] bg-[#181818] border-[#1d1f1f] rounded-tl-[3px]
                        rounded-r-[12px] rounded-b-[12px] font-500 text-[#b3b3b7] text-[14px] w-[0px] group-hover:w-max
                        overflow-hidden opacity-0 group-hover:opacity-100 truncate">
            {children}
        </div>
    )
}

const SidebarAvatar = (props) => {
    return (
        <div className={`${props.selected ? 'border-[#29B080]': 'border-[#272829]'} z-[100000] group relative border-[1px] duration-800 rounded-[10px] w-[48px] h-[48px] mb-[16px] flex items-center justify-center cursor-pointer`} 
            onClick={() => (alert("DAO!"))}>
            <Image src={props.img_url} className="rounded-[6px]" width={36} height={36} alt={props.img_url} />
            {props.expanded ? <ToolTip>{props.name}</ToolTip> : ''}
        </div>
    )
}

export const SidebarAvatarName = (props) => {
    return (
        <div className="duration-300 font-500 text-[16px] text-[#929298] truncate hover:text-[#f3f3f3]
                        w-full h-[48px] mb-[16px] flex items-start justify-start cursor-pointer" onClick={() => (alert("DAO!"))}>
            {props.name}
        </div>
    )
}

export default SidebarAvatar