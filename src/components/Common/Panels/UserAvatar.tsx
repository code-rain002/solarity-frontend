import React, { useState } from "react";

import Image from "next/image";

export interface AvatarPanelProps {
  imageSrc: any;
  title: string;
  selected?: boolean;
}

const UserAvatar = (props: AvatarPanelProps) => {
  return (
    <div className={`relative w-[112px] h-[112px] rounded-[20px] border-[1.5px] border-white/10 hover:border-primary z-10 bg-transparent cursor-pointer max-w-[190px] ${props.selected ? "border-primary" : ""}`}>
      <div className="absolute top-1 left-1 right-1 rounded-[20px] avatar-panel h-[100px] w-[100px] max-w-[180px]">
        <Image
          src={props.imageSrc}
          alt={props.title}
          layout="fill"
          height={100}
          width={100}
        />
      </div>
      {/* <div className="absolute flex items-center h-[25px] top-[15px] left-[15px] m-auto w-auto px-2 bg-[rgba(12,12,14,0.5)] rounded-[15px]">
        <span className="text-[12px] text-[#f3f3f3]">Collection Name</span>
      </div> */}
    </div>
  );
};

export default UserAvatar;
