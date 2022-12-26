import { PlayIcon } from "assets/svgs";
import { PrimaryButton } from "components/Common/Buttons";
import React from "react";

const ItemTemplate = (props) => {
  return (
    <div className={`p-[14px] text-lightGrey bg-lightDark rounded-[15px] border border-[#323232] hover:border-[#29B080] ` + (props.isActive ? "border-[#29B080]" : "border-transparent")}>
      <div className="flex">
        <div className="w-13 h-13">
          {props.image}
        </div>
        <div className={`pl-${props.gap} relative w-full`}>
          {props.title && (
            <div className="text-[#F3F3F3] text-base font-bold leading-tight mb-2">
              {props.title}
            </div>
          )}
          {props.detail && (
            <div className="text-[#B3B3B7] text-sm font-normal leading-tight items-center">
              {props.detail}
            </div>
          )}
          {props.time && (
            <div className="absolute top-0 right-0 text-grey text-sm">
              {props.time}
            </div>
          )}
          {!!props.badge && (
            <div className="absolute right-0 h-[18px] top-[50%] text-[10px] leading-4 rounded-full text-center pt-[1px] px-[6px] justify-items-center text-primary bg-[#162724] border-[#29B080] border">{props.badge}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemTemplate;