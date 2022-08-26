import React from 'react'

export interface InfoProps {
    title: string;
    subtitle: string;
    description: string;
}

export default function Info(props: InfoProps) {
  return (
    <div className=''>
        <p className='text-[#929298] font-[500] text-[16px]'>{props.title}</p>
        <p className='text-[#F3F3F3] font-[500] md:text-[32px] xs:text-[28px] mt-[12px]'>{props.subtitle}</p>
        <p className='text-[#929298] font-[500] text-[16px] md:mt-[24px] xs:mt-[16px]'>{props.description}</p>
    </div>
  )
}
