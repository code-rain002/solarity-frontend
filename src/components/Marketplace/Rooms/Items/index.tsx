import React from 'react'
import Item, { RoomItemProps } from './Item'
import { rooms } from '../../../../data/Marketplace'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { setRoom } from 'redux/slices/marketplaceSlice';
export interface ItemsProps {
  rooms: RoomItemProps[];
}

function Items(props: ItemsProps) {
  const dispatch = useDispatch();
  const { selectedRoom } = useSelector((state: RootStateOrAny) => ({
    selectedRoom: state.marketplace.selectedRoom
  }))

  const visitRoom = (room: RoomItemProps) => {
    dispatch(setRoom(room));
  }
  return (
    <div className='grid custom-2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 gap-8 mb-[56px]'>
      {
        props.rooms.map((room, index) => (
          <div onClick={() => visitRoom(room)} key={index}>
            <Item roomNo={room.roomNo} active={room.roomNo === selectedRoom.roomNo} valueIcon={room.valueIcon} collectionName={room.collectionName} imgUrl={room.imgUrl} walletIcon={room.walletIcon} roomName={room.roomName} price={room.price} />
          </div>
        ))
      }
    </div>
  )
}

export default Items