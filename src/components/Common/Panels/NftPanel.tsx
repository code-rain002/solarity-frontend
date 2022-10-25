import React, { useState } from "react";

import Image from "next/image";

export interface NftPanelProps {
  name: string;
  collectionName: string;
  type: string;
  image: string;
  onClick?: () => void;
  selected?: boolean;
}

const NftPanel = (props: NftPanelProps) => {
  return (
    <div onClick={() => props.onClick()} className={`relative w-full rounded-[20px] border-[1.5px] border-white/10 hover:border-primary z-10 bg-transparent cursor-pointer ${props.selected ? "border-primary" : ""}`}>
      <div className="m-1">
        <div className="rounded-[16px] avatar-panel overflow-hidden">
          <Image
            src={props.image}
            alt={props.name}
            layout="responsive"
            width={'100%'}
            height={'100%'}
          />
        </div>
        <div className="hidden sm:flex absolute items-center h-[25px] top-[15px] left-[15px] m-auto w-auto px-2 bg-[rgba(12,12,14,0.5)] rounded-[15px]">
          <span className="text-[12px] text-[#f3f3f3]">{props.collectionName}</span>
        </div>
        <div className="relative text-center leading-[16px] py-1">
          <span className="text-[12px] sm:text-[14px] text-[#929298]">{props.name}</span>
        </div>
      </div>
    </div>
  );
};

export default NftPanel;
