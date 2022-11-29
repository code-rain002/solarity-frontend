import GameContent from 'components/Game/GameContent';
import GameDescription from 'components/Game/GameDescription';
import GameDivision from 'components/Game/GameDivision';
import React, { useState } from 'react';

const Game = () => {

  return (
    <div className='mb-[24px]'>
      <div className='flex justify-between gap-[16px] mt-10'>
        <GameDescription />
        <GameDivision />
      </div>
      <div>
        <GameContent />
      </div>
    </div>
  );
}

export default Game;