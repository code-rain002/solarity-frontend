import React from 'react'
import Items from './Items'

import { rooms } from '../../../../../../data/Community'

export interface RoomsType {
  visitRoom: any;
}

function Rooms(props: RoomsType) {
  return (
    <div>
      <Items visitRoom={props.visitRoom} rooms={rooms.slice(0, 5)} />
    </div>
  )
}

export default Rooms