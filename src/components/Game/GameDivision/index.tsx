import { RoundButton } from 'components/Common/Buttons';
import React from 'react';

const GameDivision = () => {
  return (
    <div className='flex flex-col w-[385px] rounded-[20px] bg-[#19191A] pt-[20px] px-[31px] pb-[20px]'>
      <div className='flex items-center mb-4'>
        <div className='w-[110px] text-[16px] text-white'>
          TYPE
        </div>
        <div className='flex items-center gap-2'>
          <RoundButton caption="Sports" />
          <RoundButton caption="Sports" />
        </div>
      </div>
      <div className='flex items-center mb-4'>
        <div className='w-[110px] text-[16px] text-white'>
          P2E
        </div>
        <div className='flex items-center gap-2'>
          <RoundButton caption="NFT" />
          <RoundButton caption="Crypto" />
        </div>
      </div>
      <div className='flex items-center'>
        <div className='w-[110px] text-[16px] text-white'>
          NETWORK
        </div>
        <div className='flex items-center gap-2'>
          <RoundButton caption="SOL" />
          <RoundButton caption="ETH" />
        </div>
      </div>
    </div>
  );
}

export default GameDivision;