import React from 'react';
import WeeklyMovement from 'components/Community/Feed/Main/Feed/RightSide/WeeklyMovement';
import DaoEventPanel from './DaoEventPanel';

const GameHome = () => {
  return (
    <div className='pt-6'>
      <div className='flex custom-2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col gap-6'>
        <div className='flex-auto'>
        </div>
        <div className='custom-2xl:w-[385px] xl:w-[385px] lg:w-[385px] md:w-[385px] sm:w-full xs:w-full'>
          <WeeklyMovement id={0} />
          <DaoEventPanel />
        </div>
      </div>
    </div>
  );
}

export default GameHome;