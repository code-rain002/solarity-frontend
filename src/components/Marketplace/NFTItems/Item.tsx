import React from 'react'
import Image from "next/image"

export interface NFTItemProps {
    name: string;
    description: string;
    id: number;
    value: number;
    icon: any;
    imgUrl: string;
}

const Item = (props: NFTItemProps) => {
    return (
        <div className=" flex flex-col border-[1.2px] border-[#272829] rounded-[20px] p-[8px]
                        relative cursor-pointer hover:border-primary">
            <div className=" rounded-[15px] overflow-hidden lg:w-[242px] md:w-[242px] sm:w-[143px] xs:w-[143px]">
                <Image src={props.imgUrl} layout="responsive" width={242} height={232} alt="room_image" />
            </div>
            <div className='flex md:flex-row xs:flex-col-reverse justify-between gap-[6px] mt-[20px]'>
                <div className='font-[500] text-[14px] ml-[12px]'>
                    <div className="font-['Outfit'] text-[#929298]">
                        {props.name}
                    </div>
                    <div className='text-[#929298]'>
                        #{props.id}
                    </div>
                </div>
                <div className='flex'>
                    {props.icon}
                    <div className='ml-[6px] text-[18px] text-white mr-[20px]'>
                        {props.value}
                    </div>
                </div>
            </div>


            <div className="absolute flex items-center justify-center top-[20px] left-[20px] m-auto w-auto gap-[12px]">
                <span className="flex items-center justify-center h-[25px] text-[12px] text-[#f3f3f3] px-2 bg-[rgba(12,12,14,0.5)] rounded-[15px]
                                border-[1.5px] border-[rgba(0,0,0,0)] hover:border-primary cursor-pointer">{props.name}</span>
            </div>
        </div>
    )
}

export default Item