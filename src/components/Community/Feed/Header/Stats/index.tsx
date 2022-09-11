import React from 'react'
import StatsItem from './StatsItem'
import { stats } from '../../../../../data/Community'

function Stats() {
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 gap-[24px]'>
        {
            stats.map((stat, index) => (
                <StatsItem key={index} icon={stat?.icon} count={stat?.count} unit={stat?.unit} name={stat?.name} />
            ))
        }
    </div>
  )
}

export default Stats