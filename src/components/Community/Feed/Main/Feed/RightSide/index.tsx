import React from 'react'
import Link from './Link'
import Users from './Users'
import WeeklyMovement from './WeeklyMovement'

type RightSideType = {
  id: any;
  type: string;
}

function RightSide(props: RightSideType) {
  return (
    <div className='flex flex-col gap-[32px]'>
      <WeeklyMovement id={props.id} />
      <Users id={props.id} />
      <Link id={props.id} type={props.type} />
    </div>
  )
}

export default RightSide