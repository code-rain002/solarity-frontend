import React from 'react'
import Link from './Link'
import Users from './Users'
import WeeklyMovement from './WeeklyMovement'

function RightSide() {
  return (
    <div className='flex flex-col gap-[32px]'>
      <WeeklyMovement />
      <Users />
      <Link />
    </div>
  )
}

export default RightSide