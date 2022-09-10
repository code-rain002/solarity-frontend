import React from 'react'
import { ChainIcon } from './Icons/ChainIcon'
import { DiscordIcon } from './Icons/DiscordIcon'
import { OpenSeaIcon } from './Icons/OpenSeaIcon'
import { TwitterIcon } from './Icons/TwitterIcon'

function Link() {
  return (
    <div className='grid grid-cols-7 gap-[16px]'>
      <div className='border-[1.2px] borer-[#272829] rounded-[40px] border-[#272829] col-span-4 p-[10px] flex hover:border-primary hover:cursor-pointer'>
        <div className='flex justify-center items-center'>
          <ChainIcon />
        </div>
        <div className='w-full text-center text-[14px] font-["outfit"] font-[500] text-[#B3B3B7]'>
          Website
        </div>
      </div>
      <div className='p-[10px] border-[1.2px] borer-[#272829] rounded-[40px] border-[#272829] flex justify-center items-center hover:border-primary hover:cursor-pointer'>
        <OpenSeaIcon />
      </div>
      <div className='p-[10px] border-[1.2px] borer-[#272829] rounded-[40px] border-[#272829] flex justify-center items-center hover:border-primary hover:cursor-pointer'>
        <DiscordIcon />
      </div>
      <div className='p-[10px] border-[1.2px] borer-[#272829] rounded-[40px] border-[#272829] flex justify-center items-center hover:border-primary hover:cursor-pointer'>
        <TwitterIcon />
      </div>
    </div>
  )
}

export default Link