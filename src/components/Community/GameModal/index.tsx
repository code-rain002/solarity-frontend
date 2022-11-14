import React from "react";
import { CloseIcon } from "../../icons";

type GameModalType = {
  closeFunc: Function;
  title: string
  websiteUrl: string;
}

const GameModal = (props: GameModalType) => {

  const closeDlg = (e) => {
    if (e.target.id == "room_setting_dlg") {
      props.closeFunc();
    }
  };

  return (
    <div
      className={` flex justify-center md:items-center xs:items-end top-[0px] left-[0px] right-[0px] bottom-[0px] backdrop-blur-[20px] md:bg-[rgba(12,12,14,0.7)] xs:bg-globalBgColor z-[1002] fixed`}
      id="room_setting_dlg"
      onClick={(e) => closeDlg(e)}
    >
      <div
        className=" fixed md:w-[90%] xs:w-full h-[87.5%] bg-[#131314] border-[1px] border-[#1d1d1f] rounded-[20px] flex flex-col pt-[28px] px-[32px] pb-[32px] gap-[24px] overscroll-contain"
      >
        {/* Modal Header */}
        <div
          className=" absolute md:right-[-18px] md:top-[-18px] xs:right-[49%] xs:top-[-58px] cursor-pointer "
          onClick={(e) => props.closeFunc()}
        >
          <CloseIcon />
        </div>
        <div className=" flex flex-row justify-between items-center ">
          <div className=" font-['Outfit'] font-[500] text-[24px] text-[#f3f3f3] ">
            {props.title}
          </div>
        </div>
        {/* Modal Content */}
        <iframe src={props.websiteUrl} frameBorder="0" className="w-full h-full"></iframe>
      </div>
    </div>
  );
}

export default GameModal;