import React from 'react'
import Item, { RoomItemProps } from './Item'
import MoreRooms from './MoreRooms';

export interface ItemsProps {
  visitRoom: any;
  rooms: RoomItemProps[];
}

function Items(props: ItemsProps) {
  return (
    <div className='grid custom-2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 xs:grid-cols-2 gap-8 mb-[56px]'>
      {
        props.rooms.map((room, index) => (
          <div onClick={() => props.visitRoom(room, index)} key={index}>
            <Item valueIcon={room.valueIcon} collectionName={room.collectionName} imgUrl={room.imgUrl} walletIcon={room.walletIcon} roomName={room.roomName} price={room.price} />
          </div>
        ))
      }
      <MoreRooms />
    </div>
  )
}

export default Items