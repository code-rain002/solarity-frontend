import React, { useState } from "react";

import Image from "next/image";

export interface AvatarPanelProps {
  imageUrl: any;
  title: string;
  onClick?: Function;
  selected?: boolean;
}

const AvatarPanel = (props: AvatarPanelProps) => {
  return (
    <div onClick={() => props.onClick()} className={`relative w-full h-[200px] rounded-[20px] border-[1.5px] border-white/10 hover:border-primary z-10 bg-transparent cursor-pointer max-w-[190px] ${props.selected ? "border-primary" : ""}`}>
      <div className="absolute top-1 left-1 right-1 rounded-[20px] avatar-panel h-[150px] max-w-[180px]">
        <Image
          src={props.imageUrl}
          alt={props.title}
          layout="fill"
        />
      </div>
      <div className="relative mt-[158px] text-center">
        <span className="text-[14px] text-[#929298]">{props.title}</span>
      </div>
    </div>
  );
};

export default AvatarPanel;
