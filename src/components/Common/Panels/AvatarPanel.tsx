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
    <div onClick={() => props.onClick()} className={`relative w-full rounded-[20px] border-[1.5px] border-white/10 hover:border-primary z-10 bg-transparent cursor-pointer ${props.selected ? "border-primary" : ""}`}>
      <div className="m-1">
        <div className="rounded-[16px] avatar-panel overflow-hidden">
          <Image
            src={props.imageUrl}
            alt={props.title}
            layout="responsive"
            height={'100%'}
            width={'100%'}
          />
        </div>
        <div className="relative text-center leading-[16px] py-1">
          <span className="text-[14px] sm:text-[14px] text-[#929298]">{props.title}</span>
        </div>
      </div>
    </div>
  );
};

export default AvatarPanel;
