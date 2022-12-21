import React from 'react'
import Image from "next/image"
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setSelectedGame } from 'redux/slices/commonSlice';

const GameItem = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const gotoGameDetail = () => {
    dispatch(setSelectedGame({
      title: props.communityName,
      websiteUrl: props.websiteUrl,
    }));
    router.push('/community/feed/' + props.id + '?type=' + props.type);
  }

  return (
    <div className=" flex flex-col border-[1.2px] border-[#272829] rounded-[20px] p-[8px]
                        relative cursor-pointer hover:border-primary" onClick={gotoGameDetail}>
      <div className=" rounded-[15px] overflow-hidden lg:w-[242px] md:w-[242px] sm:w-[143px] xs:w-[143px]">
        <Image src={props.itemUrl} layout="responsive" className='rounded-2xl' width={242} height={232} alt="room_image" />
      </div>
      <div className='flex md:flex-row xs:flex-col-reverse justify-between gap-[6px] mt-[20px]'>
        <div className='font-[500] text-[14px] ml-[12px] text-center'>
          <div className="font-['Outfit'] text-[#929298]">
            {props.communityName}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameItem