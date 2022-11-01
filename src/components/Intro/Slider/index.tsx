import React from "react";
import Image from 'next/image';
import { useRouter } from "next/router";

import { SmallButton } from "components/Common/Buttons";

export type SliderType = {
  title: string;
  backgroundImage: string;
  content: any;
  button?: string;
  path?: string;
}

const Slider = (props: SliderType) => {
  const router = useRouter();
  const gotoPath = () => {
    router.push(props.path);
  }

  return (
    <div className="h-[100vh]">
      <img src={props.backgroundImage} className="rounded-b-[40px]" width={664} height={664} alt={props.title} />
      <div className="px-12 py-20">
        <h2 className="text-[25px] font-[700] title-color pb-8">{props.title}</h2>
        <p className="center text-[15px] font-[500] title-color pb-12">
          {props.content}
        </p>
        {props.button && (
          <SmallButton caption={props.button} onClick={gotoPath} />
        )}
      </div>
    </div>
  );
}

export default Slider;