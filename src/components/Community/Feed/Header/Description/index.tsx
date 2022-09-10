import React, { useState } from 'react'

export interface DescriptionProps {
  title: string;
  description: string;
  walletAddress: string;
  icon: any;
}

function Description(props: DescriptionProps) {

  const [expandDescription, setExpandDescription] = useState(false);
  return (
    <div className='flex flex-col mb-[24px] gap-[16px]'>
      <div className='flex lg:flex-row md:flex-row sm:flex-col xs:flex-col items-center
                      gap-[12px]'>
        <div className='text-[28px] text-[#F3F3F3] font-["outfit"] font-[500]'>{props.title}</div>
        <div className='flex border-[1.2px] border-[#272829] rounded-[40px] p-[8px] gap-[8px] hover:border-primary hover:cursor-pointer'>
          {props.icon}
          <div className='text-[14px] text-[#F3F3F3] font-[400] font-["outfit"] items-center flex justify-center'>0x{props.walletAddress.slice(0, 4) + ' ... ' + props.walletAddress.slice(props.walletAddress.length - 4)}</div>
        </div>
      </div>
      <div className='text-[18px] text-[#929298] font-[400] font-["outfit"]'>
        {
        props.description.length > 146 && !expandDescription ? props.description.slice(0, 146) + '...' : props.description
        }&nbsp;
        {props.description.length > 146 && !expandDescription && <span className='text-primary hover:cursor-pointer' onClick={() => setExpandDescription(expand => !expand)}>Show more</span>}
        {props.description.length > 146 && expandDescription && <span className='text-primary hover:cursor-pointer' onClick={() => setExpandDescription(expand => !expand)}>Show less</span>}
      </div>
    </div>
  )
}

export default Description