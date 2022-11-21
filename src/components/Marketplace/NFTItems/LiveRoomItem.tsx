import React from 'react'
import Image from "next/image"
import { Users } from 'components/icons';

export interface NFTItemProps {
  name: string;
  backImage: string;
  members: number;
  DaoTitle: string;
  DaoAvatar: string;
  collectionName: string;
  collectionImage: string;
}

const LiveRoomItem = (props: NFTItemProps) => {
  return (
    <div className=" flex flex-col border-[1.2px] border-[#272829] rounded-[20px] p-[8px]
                        relative cursor-pointer hover:border-primary">
      <div className=" relative rounded-[15px] overflow-hidden lg:w-[312px] md:w-[312px] sm:w-[143px] xs:w-[143px]">
        <Image src={props.backImage} layout="responsive" width={252} height={136} alt="room_image" />
        <div className="absolute flex items-center justify-center bottom-[8px] right-[20px] m-auto w-auto gap-[8px] text-white">
          <Users />
          {props.members}
        </div>
      </div>
      <div className='flex md:flex-row xs:flex-col-reverse justify-between gap-[6px] mt-[20px]'>
        <div className='font-[500] text-[14px] ml-[12px] flex gap-4'>
          <div className='w-[71px]'>
            <Image src={props.DaoAvatar} className="rounded-full" layout="responsive" width={71} height={46} alt="Dao Image" />
          </div>
          <div className=''>
            <div className="font-['Outfit'] text-white">
              {props.name}
            </div>
            <div className='flex justify-between'>
              <span className='text-[#929298]'>{props.DaoTitle}</span>
              <div className='flex gap-1'>
                <div className='w-[20px]'>
                  <Image src={props.collectionImage} className="rounded-full" layout="responsive" width={20} height={20} />
                </div>
                <span className='text-[#929298]'>{props.collectionName}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiveRoomItem