import React from 'react'
import FeedContent from './FeedContent'
import RightSide from './RightSide'
import Rooms from './Rooms'
import Header from './Rooms/Header'

type FeedType = {
  id: any;
}

function Feed(props: FeedType) {
  return (
    <div>
      <div className='flex flex-col'>
        <div className='mt-[45px] mb-[30px]'>
          <Header />
        </div>
        <div className='flex custom-2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col gap-6'>
          <div className='flex-auto'>
            <Rooms visitRoom={() => { }} />
          </div>
          <div className='custom-2xl:w-[385px] xl:w-[385px] lg:w-[385px] md:w-[385px] sm:w-full xs:w-full'>
            <RightSide id={props.id} />
          </div>
        </div>
      </div>
      <div>
        <div className='lg:col-span-3 md:col-span-3 sm:col-span-1 xs:col-span-1 flex flex-col'>
          <FeedContent />
        </div>
      </div>
    </div>
  )
}

export default Feed