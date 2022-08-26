import React from 'react'

import { rooms } from '../../../../data/Marketplace'
import Item from './Item'

export interface ItemsProps {
  visitRoom: any;
}

function Items(props: ItemsProps) {
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 gap-8 mb-[56px]'>
      {
        rooms.map((room, index) => (
          <div onClick={() => props.visitRoom(room, index)} key={index}>
            <Item valueIcon={room.valueIcon} collectionName={room.collectionName} imgUrl={room.imgUrl} walletIcon={room.walletIcon} roomName={room.roomName} price={room.price} />
          </div>
        ))
      }
    </div>
  )
}

export default Items