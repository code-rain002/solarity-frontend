import React from 'react'
import Header from './Header'
import Items from './Items'

export interface RoomsType {
  visitRoom: any;
}

function Rooms(props: RoomsType) {
  return (
    <div>
      <div className='mt-[45px] mb-[30px]'>
        <Header />
      </div>
      <Items visitRoom={props.visitRoom} />
    </div>
  )
}

export default Rooms