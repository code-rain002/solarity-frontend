<<<<<<< HEAD
=======
import React, {useState} from "react";

>>>>>>> master
import Image from "next/image";

export interface AvatarPanelProps {
  imageSrc: any;
  title: string;
<<<<<<< HEAD
=======
  onClick: Function;
  selected?: boolean;
>>>>>>> master
}

const AvatarPanel = (props: AvatarPanelProps) => {
  return (
<<<<<<< HEAD
    <div className="relative w-full h-[200px] rounded-[20px] border-[1.5px] border-white/10 hover:border-primary z-10 bg-transparent cursor-pointer">
        <div className="absolute top-1 left-1 right-1 rounded-[20px] avatar-panel h-[150px]">
=======
    <div onClick={() => props.onClick()} className={`relative w-full h-[200px] rounded-[20px] border-[1.5px] border-white/10 hover:border-primary z-10 bg-transparent cursor-pointer max-w-[190px] ${props.selected?"border-primary":""}`}>
        <div className="absolute top-1 left-1 right-1 rounded-[20px] avatar-panel h-[150px] max-w-[180px]">
>>>>>>> master
            <Image
                src={props.imageSrc}
                alt={props.title}
                layout="fill"
            />
        </div>
        <div className="absolute flex items-center h-[25px] top-[15px] left-[15px] m-auto w-auto px-2 bg-[rgba(12,12,14,0.5)] rounded-[15px]">
            <span className="text-[12px] text-[#f3f3f3]">Collection Name</span>
        </div>
        <div className="relative mt-[158px] text-center">
            <span className="text-[14px] text-[#929298]">{props.title}</span>
        </div>
<<<<<<< HEAD
        
=======
>>>>>>> master
    </div>
  );
};

export default AvatarPanel;
