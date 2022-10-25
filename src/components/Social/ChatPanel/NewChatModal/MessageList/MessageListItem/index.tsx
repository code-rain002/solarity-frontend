import React from "react";
import PrimaryBorderButton from "../../../../../Common/Buttons/PrimaryBorderButton";
import { Tick } from "../../../../../icons";

const MessageListItem = (props) => {
  return (
    <div className={`p-[14px] text-lightGrey bg-lightDark rounded-[15px] cursor-pointer border hover:border-[#29B080] ` + (props.isActive ? "border-[#29B080]" : "border-transparent")} onClick={props.onSelect}>
      <div className="flex items-center justify-between">
        <div className="flex flex-row items-center gap-3">
          {props.image}
          {props.title && (
            <div className="text-[#B3B3B7] text-base font-medium leading-tight text-[16px]">
              {props.title}
            </div>
          )}
        </div>
        <div>
          {props.status && (
            <div className="text-[16px] text-[#474749]">{props.status}</div>
          )}
        </div>
        <div>
          {props.selected ? <Tick /> : <div className="h-[14px] w-[14px] rounded-full border-white border-[2px]"></div>}
        </div>
      </div>
    </div>
  );
}

export default MessageListItem;