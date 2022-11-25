import React from 'react'
import { useDispatch } from 'react-redux';
import LiveRoomItem from './LiveRoomItem';
import { setSelectedRoom, setRoomIndex } from 'redux/slices/chatSlice';

export default function LiveRoomItems(props) {
  const dispatch = useDispatch();
  const selectRoom = (index, item) => {
    dispatch(setSelectedRoom(item));
    dispatch(setRoomIndex(index));
  }
  return (
    <div className='relative w-full mt-[22px]'>
      <div className='room-items flex gap-7 h-30 w-[100%] relative cursor-pointer overflow-y-hidden overflow-x-hidden scroll-smooth flex-nowrap'>
        {
          props.items.map((item, index) => (
            <div onClick={() => selectRoom(index, item)}>
              <LiveRoomItem {...item} key={index} />
            </div>
          ))
        }
      </div>
    </div>
  )
}
