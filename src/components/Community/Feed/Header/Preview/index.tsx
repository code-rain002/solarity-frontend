import Image from 'next/image'
import React from 'react'
import { GreenButton } from '../../../../Common/Buttons';
import { CloudIcon } from '../../../../icons/CloudIcon';
import { ViewIcon } from '../../../../icons';

export interface PreviewProps {
  avatarUrl: string;
  backUrl: string;
  title: string;
  description: string;
  setGameModalVisibility: Function;
  gameBannerVisibility: boolean;
  setGameBannerVisibility: Function;
}

function Preview(props: PreviewProps) {
  return (
    <div className='relative'>
      {props.gameBannerVisibility ? (
        <div>
          <div className='lg:h-[450px] md:h-[450px] sm:h-[300px] xs:h-[300px] w-full'>
            <iframe src={"https://theportal.to/demo"} frameBorder="0" className="w-full h-full"></iframe>
          </div>
          <div className=' absolute right-5 md:right-20 bottom-5'>
            <GreenButton caption='Full Screen' icon={<ViewIcon />} onClick={() => props.setGameModalVisibility(true)} />
          </div>
        </div>
      ) : (
        <div>
          <div className='lg:h-[450px] md:h-[450px] sm:h-[300px] xs:h-[300px] w-full'>
            <Image className='rounded-[25px]' width={1708} height={450} layout="responsive" src={props.backUrl} />
          </div>
          <div className=' absolute left-10 lg:left-20 hidden md:block bottom-5'>
            <h2 className='text-[32px] font-semibold text-white'>{props.title}</h2>
            <p className=' text-lg font-light text-[#CECCCC] custom-2xl:w-[550px] xl:w-[450px] lg:w-[300px] md:w-[270px]'>{props.description}</p>
          </div>
          <div className=' absolute right-5 md:right-20 bottom-5'>
            <GreenButton caption='Play' icon={<CloudIcon />} onClick={() => props.setGameBannerVisibility(true)} />
          </div>
          <div className='absolute bottom-[-32px] transform left-1/2 -translate-x-1/2 
                            lg:w-[130px] md:w-[130px] sm:w-[100px] xs:w-[100px] 
                            lg:h-[130px] md:h-[130px] sm:h-[100px] xs:h-[100px]  
                            rounded-[80px] border-[2px] border-black'>
            <Image className='rounded-[80px]' width={130} height={130} layout="responsive" src={props.avatarUrl} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Preview