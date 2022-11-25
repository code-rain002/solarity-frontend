import React from "react";
import { useRouter } from "next/router";

import { SmallButton } from "components/Common/Buttons";
import Image from "next/image";

export type SliderType = {
  title: string;
  backgroundImage: string;
  content: any;
  index?: number;
  type: string;
  button?: string;
  path?: string;
}

const BannerSlide = (props: SliderType) => {
  const router = useRouter();
  const gotoPath = () => {
    router.push(`/community/feed/${props.index}?type=${props.type}`);
  }

  return (
    <div className="relative h-[362px]">
      <img src={props.backgroundImage} className="rounded-b-[40px]" width={1200} height={362} alt={props.title} />
      <div className={` absolute top-6 left-6 px-[52px] w-[513px] pt-[66px] pb-7 text-left`} style={{ backgroundColor: "rgba(13, 13, 13, 0.7)" }}>
        <h2 className="text-[25px] font-[700] text-white pb-4">{props.title}</h2>
        <p className={`text-[15px] font-[500] text-[#A29999] ${props.button ? 'pb-4' : 'pb-12'}`}>
          {props.content}
        </p>
        {props.button && (
          <SmallButton caption={props.button} onClick={gotoPath} />
        )}
      </div>
    </div>
  );
}

export default BannerSlide;