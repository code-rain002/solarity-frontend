import React from "react";
import { Tick } from 'components/icons';

const MessageListItem = (props) => {
  return (
    <div className={`p-[14px] text-lightGrey bg-lightDark rounded-[15px] cursor-pointer border hover:border-[#29B080] ` + (props.isActive ? "border-[#29B080]" : "border-[#323232]")} onClick={props.onSelect}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-13 h-13">
            {props.image}
          </div>
          <div>
            {props.title && (
              <div className="text-[#F3F3F3] text-base font-bold leading-tight mb-2">
                {props.title}
              </div>
            )}
            <div className="text-[#B3B3B7] text-sm font-normal leading-tight items-center">
              {props.bio}
            </div>
          </div>
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