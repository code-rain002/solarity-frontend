import React from "react";
import Image from 'next/image';

const DaoEventPanel = () => {
  return (
    <div className="bg-[#181818] rounded-[10px] mt-6">
      <div className="relative w-[385px] h-[110px]">
        <Image src={"/images/games/event.png"} className="rounded-[10px]" layout="responsive" width={385} height={110} />
        <div className="absolute bottom-2 left-4 text-[13px] text-white flex items-center">
          <div className="w-[25px] h-[25px] pr-2">
            <Image src="/images/community/img/one.png" className="rounded-full" layout="responsive" width={25} height={25} />
          </div>
          monkeDAO
        </div>
      </div>
      <div className="px-5 pb-5 pt-2">
        <div className="text-white text-[16px]">Aurory Hatch Event</div>
        <div className="flex justify-between">

        </div>
      </div>
    </div>
  );
}

export default DaoEventPanel;