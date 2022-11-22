import React from 'react'
import Image from "next/image"
import { Users } from 'components/icons';
import { useDispatch } from 'react-redux';
import { setJoinModalVisibility } from "redux/slices/chatSlice";

export interface NFTItemProps {
  roomName: string;
  imageUrl: string;
  speakers: any[];
  DaoTitle: string;
  DaoAvatar: string;
  collectionName: string;
  collectionImage: string;
}

const LiveRoomItem = (props: NFTItemProps) => {
  const dispatch = useDispatch();
  return (
    <div className=" flex flex-col border-[1.2px] border-[#272829] rounded-[20px] p-[8px]
                        relative cursor-pointer hover:border-primary" onClick={() => dispatch(setJoinModalVisibility(true))}>
      <div className=" relative rounded-[15px] overflow-hidden lg:w-[312px] md:w-[312px]">
        <img src={props.imageUrl} width="100%" height={136} alt="room_image" />
        <div className="absolute flex items-center justify-center bottom-[8px] right-[20px] m-auto w-auto gap-[8px] text-white">
          <Users />
          {props.speakers.length}
        </div>
      </div>
      <div className='flex md:flex-row xs:flex-col-reverse justify-between gap-[6px] mt-[20px]'>
        <div className='font-[500] text-[14px] ml-[12px] flex gap-4 w-full'>
          <div className='w-[46px]'>
            <Image src={'/images/loading_logo.png'} className="rounded-full" layout="responsive" width={46} height={46} alt="Dao Image" />
          </div>
          <div className='w-full'>
            <div className="font-['Outfit'] text-white">
              {props.roomName}
            </div>
            <div className='flex justify-between w-full'>
              <span className='text-[#929298]'>{'@Solarity_VR'}</span>
              <div className='flex gap-1'>
                <div className='w-[20px]'>
                  <Image src={'/images/loading_logo.png'} className="rounded-full" layout="responsive" width={20} height={20} />
                </div>
                <span className='text-[#929298]'>{'Solarity'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiveRoomItem