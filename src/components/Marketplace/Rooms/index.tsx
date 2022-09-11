import React from 'react'
import Header from './Header'
import Items from './Items'
import { RoomItemProps } from './Items/Item';

export interface RoomsType {
  visitRoom: any;
  rooms: RoomItemProps[];
  headerTitle: string;
  count: number;
}

function Rooms(props: RoomsType) {
  return (
    <div>
      <div className='mt-[45px] mb-[30px]'>
        <Header count={props.count} title={props.headerTitle} />
      </div>
      <Items rooms={props.rooms} visitRoom={props.visitRoom} />
    </div>
  )
}

export default Rooms