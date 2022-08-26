import React from 'react'

export interface FilterItemProps {
    name: string;
    active: boolean;
}

export default function FilterItem(props: FilterItemProps) {
    return (
        <div className={`flex justify-center items-center rounded-[40px] border-[1.2px] 
                        font-['Outfit'] font-[500] text-[16px]  cursor-pointer h-[48px] px-[13px] ${props.active ? "border-[#29B080] text-[#29B080] bg-[#162724]" : "border-[#272829] text-[#929298] bg-[#131314] hover:border-primary"} `}
        >
            <p className='whitespace-nowrap'>{props.name}</p>
        </div>
    )
}
