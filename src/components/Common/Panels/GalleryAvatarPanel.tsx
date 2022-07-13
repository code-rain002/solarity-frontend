import React, {useState} from "react";

import Image from "next/image";

export interface GalleryAvatarPanelProps {
  imageSrc: any;
  title: string;
  onClick: Function;
  selected?: boolean;
  subtitle : string,
  iconUrl : string,
  price : number
}

const GalleryAvatarPanel = (props: GalleryAvatarPanelProps) => {
  return (
    <div onClick={() => props.onClick()} className={`transition duration-500 p-2 flex flex-col relative w-[258px] h-[310px] rounded-[20px] border-[1.5px] border-white/10 hover:border-primary z-10 bg-transparent cursor-pointer ${props.selected?"border-primary":""}`}>
        <div className="rounded-[20px] avatar-panel w-full">
            <Image
                src={props.imageSrc}
                alt={props.title}
                layout="responsive"
                width={242}
                height={232}
            />
        </div>
        
        <div className="flex flex-row justify-between items-center mt-[10px] mx-[12px] text-center">
            <div className="flex flex-col max-w-[65%] items-start">
                <span className="text-left font-500 text-[14px] text-[#929298] w-full truncate">{props.title}</span>
                <span className="text-left font-500 text-[14px] text-[#929298] w-full truncate">{props.subtitle}</span>
            </div>
            <div className="flex flex-row max-w-[35%]">
                <div className="">
                    <Image src={props.iconUrl} layout="fixed" width={20} height={20} alt={props.iconUrl} />
                </div>
                <div className="font-500 text-[18px] text-[#f3f3f3]">
                    {props.price}
                </div>
            </div>
        </div>

        <div className="absolute flex items-center h-[25px] top-[15px] left-[15px] m-auto w-auto px-2 bg-[rgba(12,12,14,0.5)] rounded-[15px]">
            <span className="text-[12px] text-[#f3f3f3]">Collection Name</span>
        </div>
    </div>
  );
};


export default GalleryAvatarPanel