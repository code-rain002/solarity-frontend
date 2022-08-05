import React, {useState} from "react";

import Image from "next/image";

export interface RoomsAvatarPanelProps {
  imageSrc: any;
  title: string;
  onClick: Function;
  selected?: boolean;
  no : number
}

const RoomsAvatarPanel = (props: RoomsAvatarPanelProps) => {
  return (
    <div onClick={() => props.onClick()} className={`transition duration-500 p-2 flex flex-col relative w-[403px] h-[310px] rounded-[20px] border-[1.5px] border-white/10 hover:border-primary z-10 bg-transparent cursor-pointer ${props.selected?"border-primary":""}`}>
        <div className="rounded-[20px] avatar-panel w-full">
            <Image
                src={props.imageSrc}
                alt={props.title}
                layout="responsive"
                width={387}
                height={232}
            />
        </div>
        
        <div className="w-[320px] h-full flex flex-row justify-between items-center mt-[10px] mx-[12px] text-center">
            <div className="flex max-w-[60%] items-start">
                <span className="text-left font-500 text-[14px] text-[#f3f3f3] w-full truncate">{props.title}</span>
            </div>
            <div className="flex max-w-[40%] truncate">
                <div className="font-500 text-[18px] text-[#f3f3f3]">
                    #{props.no}
                </div>
            </div>
        </div>

        <div className="absolute flex items-center justify-center top-[15px] left-[15px] m-auto w-auto gap-[12px]">
            <span className="flex items-center justify-center h-[25px] w-[25px] text-[12px] text-[#f3f3f3] bg-[rgba(12,12,14,0.5)] rounded-[15px]
                            border-[1.5px] border-[rgba(0,0,0,0)] hover:border-primary">
                <Image src="/images/wallets/solana-(sol).png" layout="fixed" width={18} height={18} />
            </span>
            <span className="flex items-center justify-center h-[25px] text-[12px] text-[#f3f3f3] px-2 bg-[rgba(12,12,14,0.5)] rounded-[15px]
                            border-[1.5px] border-[rgba(0,0,0,0)] hover:border-primary">Collection Name</span>
        </div>

        <div className="absolute flex items-center justify-center top-[15px] right-[15px] m-auto w-auto gap-[12px]">
            <span className="flex items-center justify-center h-[25px] w-[25px] text-[12px] text-[#f3f3f3] bg-[rgba(12,12,14,0.5)] rounded-[15px]
                            border-[1.5px] border-[rgba(0,0,0,0)] hover:border-primary">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.73903 2.14263L1.94856 7.02865C1.76768 7.2142 1.59263 7.57966 1.55762 7.83268L1.34173 9.65439C1.26587 10.3122 1.75601 10.762 2.43286 10.6496L4.3117 10.3404C4.57427 10.2954 4.94187 10.1098 5.12276 9.91866L9.91323 5.03264C10.7418 4.18925 11.1152 3.22779 9.8257 2.05267C8.54202 0.888797 7.56759 1.29925 6.73903 2.14263Z" stroke="#F3F3F3" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6 3.3335C6.2104 4.76262 7.30642 5.85518 8.66667 6.00016" stroke="#F3F3F3" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </span>
        </div>
    </div>
  );
};


export default RoomsAvatarPanel