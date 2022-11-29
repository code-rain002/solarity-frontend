import React, { useState } from 'react';
import Link from 'next/link';
import { DiscordIcon, TwitterIcon } from 'assets/svgs';

const GameDescription = () => {
  const description = "Solana Money Boys is thrilled to announce its debut PFP (profile picture) collection—The Loaded Lions. The drop is the first native platform-owned."
  const [expandDescription, setExpandDescription] = useState(false);
  return (
    <div>
      <div className='flex mb-4 lg:flex-row md:flex-row sm:flex-col xs:flex-col items-center
                      gap-[12px]'>
        <div className='text-[28px] text-[#F3F3F3] font-["outfit"] font-[500]'>Cyberpunk</div>
        <div className='grid grid-cols-7 gap-[16px]'>
          <Link href={"/"}>
            <div className='p-[10px] border-[1.2px] borer-[#272829] rounded-[40px] border-[#272829] flex justify-center items-center hover:border-primary hover:cursor-pointer'>
              <TwitterIcon />
            </div>
          </Link>
          <Link href={"/"}>
            <div className='p-[10px] border-[1.2px] borer-[#272829] rounded-[40px] border-[#272829] flex justify-center items-center hover:border-primary hover:cursor-pointer'>
              <DiscordIcon />
            </div>
          </Link>
        </div >
      </div>
      <div className='text-[18px] text-[#929298] font-[400] font-["outfit"] w-[650px]'>
        {
          description.length > 140 && !expandDescription ? description.slice(0, 140) + '...' : description
        }&nbsp;
        {description.length > 140 && !expandDescription && <span className='text-primary hover:cursor-pointer' onClick={() => setExpandDescription(expand => !expand)}>Show more</span>}
        {description.length > 140 && expandDescription && <span className='text-primary hover:cursor-pointer' onClick={() => setExpandDescription(expand => !expand)}>Show less</span>}
      </div>
    </div>
  );
}

export default GameDescription;