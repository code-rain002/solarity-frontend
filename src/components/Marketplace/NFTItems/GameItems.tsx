import React from 'react'
import GameItem from './GameItem';

export default function GameItems(props) {
  return (
    <div className='relative w-full mt-[22px]'>
      <div className='game-items flex gap-7 h-30 w-[100%] relative cursor-pointer overflow-y-hidden overflow-x-hidden scroll-smooth flex-nowrap'>
        {
          props.items.map((item, index) => (
            <GameItem {...item} key={index} type="game" id={index} />
          ))
        }
      </div>
    </div>
  )
}
