import TabItem from 'components/Common/Forms/TabItem';
import React, { useState } from 'react';
import GameHome from './GameHome';

const GameContent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className='w-full'>
      <div className={`relative w-full`}>
        <div className={`profile-tab flex flex-row relative sm:px-[0px] xs:px-[20px]
                          md:w-full xs:w-[87vw]
                          border-b-[1px] border-b-semiSplitter overflow-x-scroll scroll-smooth`}>
          <TabItem
            title="Home"
            selectedStatus={activeIndex === 0}
            onClick={() => {
              setActiveIndex(0)
            }}
          />
          <TabItem
            title="Quests"
            selectedStatus={activeIndex === 1}
            onClick={() => {
              setActiveIndex(1)
            }}
          />
          <TabItem
            title="Marketplace"
            selectedStatus={activeIndex === 2}
            onClick={() => {
              setActiveIndex(2)
            }}
          />
          <TabItem
            title="Guilds"
            selectedStatus={activeIndex === 3}
            onClick={() => {
              setActiveIndex(3)
            }}
          />
        </div>
      </div>
      {activeIndex === 0 && (
        <GameHome />
      )}
      {activeIndex === 1 && (
        <div>Quests Part</div>
      )}
      {activeIndex === 2 && (
        <div>Marketplace Part</div>
      )}
      {activeIndex === 3 && (
        <div>Guilds Part</div>
      )}
    </div>
  );
}

export default GameContent;