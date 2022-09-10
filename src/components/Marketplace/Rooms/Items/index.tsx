import React from 'react'
import Item, { RoomItemProps } from './Item'
import { rooms } from '../../../../data/Marketplace'
export interface ItemsProps {
  visitRoom: any;
  rooms: RoomItemProps[];
}

function Items(props: ItemsProps) {
  return (
    <div className='grid custom-2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 gap-8 mb-[56px]'>
      {
        props.rooms.map((room, index) => (
          <div onClick={() => props.visitRoom(room, index)} key={index}>
            <Item valueIcon={room.valueIcon} collectionName={room.collectionName} imgUrl={room.imgUrl} walletIcon={room.walletIcon} roomName={room.roomName} price={room.price} />
          </div>
        ))
      }
    </div>
  )
}

export default Items