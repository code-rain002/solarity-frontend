import React from 'react'
import LiveRoomItem from './LiveRoomItem';

export default function LiveRoomItems(props) {
  return (
    <div className='relative w-full mt-[22px]'>
      <div className='nft-items flex gap-7 h-30 w-[100%] relative cursor-pointer overflow-y-hidden overflow-x-hidden scroll-smooth flex-nowrap'>
        {
          props.items.map((item, index) => (
            <LiveRoomItem {...item} />
          ))
        }
      </div>
    </div>
  )
}
