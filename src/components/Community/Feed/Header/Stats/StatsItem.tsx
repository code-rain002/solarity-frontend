import React from 'react'

export interface StatsItemProps {
    icon: any;
    count: number;
    unit?: string;
    name: string;
}

function StatsItem(props: StatsItemProps) {
  return (
    <div className='border-[#272829] border-[1.2px] rounded-[25px] p-[24px] flex flex-col gap-[4px] relative'>
        <div className='mt-[20px] text-[20px] text-[#F3F3F3] font-[500] font-["outfit"]'>{props.count} <span className='text-[#929298]'>{props?.unit}</span></div>
        <div className='mt-[4px] text-[16px] text-[#929298] font-[400] font-["outfit"]'>{props.name}</div>
        <div className='absolute top-[-5.2px] left-[24px]'>
            {props.icon}
        </div>
    </div>
  )
}

export default StatsItem