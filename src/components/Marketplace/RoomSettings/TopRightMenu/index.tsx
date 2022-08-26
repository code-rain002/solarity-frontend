import { DownArrow, LeftArrow, RightArrow, UpArrow } from "components/icons";
import { useState } from "react";


type TopRightMenuType = {
  isHold: boolean;
  setIsHold: any;
  Complete: any;
};

const TopRightMenu = (props: TopRightMenuType) => {

  const Hold = () => {
    props.setIsHold(hold => !hold);
  }

  return (
    <div
      className={` absolute md:w-[426px] lg:w-[426px] sm:w-full h-[78px] md:right-[32px] md:top-[32px] xs:bottom-[0px] xs:right-[0px]
                    xs:w-full bg-[#131314] border-[1px] border-[#1d1f1f]
                        backdrop-blur-[24px] md:rounded-[15px] xs:rounded-[0px] flex flex-row justify-between items-center px-[20px] py-[20px]`}
    >
      <div className="font-['outfit'] text-[18px] text-[#B3B3B7]">Setup your room</div>
      <div className="w-1/3 flex justify-end items-center">
        <button onClick={() => props.Complete(true)} className="py-[8px] rounded-[15px] border-primary border-[1.2px] text-[#29B080] h-full text-[12px] text-center px-[6px] mr-3">
          <span>Complete</span>
        </button>
        <div onClick={() => Hold()} className="flex cursor-pointer hover:border-primary w-[40px] h-[40px] rounded-[12px] border-[#272829] border-[1px] items-center justify-center bg-globalBgColor">
          {
            !props.isHold ? (
              <>
                <div className="xs:hidden md:block"><DownArrow /></div>
                <div className="md:hidden xs:block"><UpArrow /></div>
              </>
            ) : (
              <>
                <div className="md:hidden xs:block"><DownArrow /></div>
                <div className="xs:hidden md:block"><UpArrow /></div>
              </>
            )
          }
        </div>
      </div>


    </div>
  );
};

export default TopRightMenu;
