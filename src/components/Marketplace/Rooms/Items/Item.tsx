import Image from 'next/image';
import React from 'react'


export interface RoomItemProps {
  roomNo: number;
  active?: boolean;
  collectionName: string;
  imgUrl: string;
  walletIcon: any;
  valueIcon: any;
  roomName: string;
  price: number;
  description?: string;
}

function Item(props: RoomItemProps) {
  return (
    <div className={`flex flex-col border-[1.2px] border-[#272829] rounded-[20px] p-[8px]
                        relative cursor-pointer hover:border-primary col-span-4 ${props.active ? 'border-primary' : ''}`}>
      <div className=" rounded-[15px] overflow-hidden">
        <Image src={props.imgUrl} layout="responsive" width={387} height={232} alt="room_image" />
      </div>
      <div className='flex md:flex-row xs:flex-col-reverse justify-between mt-[20px] gap-[6px] ml-[12px]'>
        <div className='font-[500] text-[14px]'>
          <div className="font-['Outfit'] text-[#929298] h-[48px]">
            {props.roomName}
          </div>
        </div>
        <div className='flex'>
          {props.valueIcon}
          <div className='ml-[6px] text-[18px] text-white mr-[20px]'>
            {props.price}
          </div>
        </div>
      </div>

      <div className="absolute flex items-center justify-center top-[20px] left-[20px] m-auto w-auto gap-[12px]">
        <span className="md:flex xs:hidden items-center justify-center h-[25px] w-[25px] text-[12px] text-[#f3f3f3] bg-[rgba(12,12,14,0.5)] rounded-[15px]
                                border-[1.5px] border-[rgba(0,0,0,0)] hover:border-primary cursor-pointer">
          {props.walletIcon}
        </span>
        <span className="flex items-center justify-center h-[25px] text-[12px] text-[#f3f3f3] px-2 bg-[rgba(12,12,14,0.5)] rounded-[15px]
                                border-[1.5px] border-[rgba(0,0,0,0)] hover:border-primary cursor-pointer">{props.collectionName}</span>
      </div>
    </div>
  )
}

export default Item