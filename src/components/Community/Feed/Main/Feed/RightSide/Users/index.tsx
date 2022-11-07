import React from 'react'
import { members } from '../../../../../../../data/Community'
import Avatar from './Avatar'

function Users({ id }) {
  return (
    <div className='pt-[24px] pb-[32px] px-[32px] bg-[#19191A] rounded-[20px]'>
      <div className='text-[20px] text-[#F3F3F3] font-[500] font-["outfit"] pb-[24px]'>Members</div>
      <div className='grid grid-cols-6 gap-[15px]'>
        {
          members.map((member, index) => (
            <Avatar key={index} imgUrl={member.imgUrl} />
          ))
        }
        <div className='w-[48px] h-[48px] border-primary border-dashed border-[1px] bg-[#162724] rounded-[40px] text-primary text-[12px] flex justify-center items-center hover:cursor-pointer hover:border-solid'>+1.5k
        </div>
      </div>
    </div>
  )
}

export default Users