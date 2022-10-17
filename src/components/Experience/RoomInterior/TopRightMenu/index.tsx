import { useState } from "react";

import UsersIcon from "./UsersIcon";
import BackIcon from "./BackIcon";
import ChattingIcon from "./ChattingIcon";
import MicroIcon from "./MicroIcon";
import SettingIcon from "./SettingIcon";
import SpeakerIcon from "./SpeakerIcon";

type TopRightMenuType = {
  setLeftSideActive: any;
  entireToggleVolume: Function;
  leftSideActive: string;
  usersBoxActive: boolean;
  isMute: boolean;
  handleMuteBtnClick: Function;
  setUsersBoxActive: any;
  isMobile: boolean;
};

const TopRightMenu = (props: TopRightMenuType) => {
  const [microState, setMicroState] = useState(true);
  const [speakerState, setSpeakerState] = useState(true);

  return (
    <div
      className={` absolute
                    md:right-[32px] md:top-[32px] xs:bottom-[0px] xs:right-[0px]
                    md:w-fit xs:w-full md:h-[52px] xs:h-[78px] bg-[#131314] border-[1px] border-[#1d1f1f]
                        backdrop-blur-[24px] md:rounded-[15px] xs:rounded-[0px] flex flex-row justify-between items-center gap-[24px] px-[24px] `}
    >
      <ChattingIcon
        setLeftSideActive={props.setLeftSideActive}
        leftSideActive={props.leftSideActive}
      />

      <UsersIcon
        setLeftSideActive={props.setLeftSideActive}
        leftSideActive={props.leftSideActive}
        isMobile={props.isMobile}
        usersBoxActive={props.usersBoxActive}
        setUsersBoxActive={props.setUsersBoxActive}
      />

      <SettingIcon
        setLeftSideActive={props.setLeftSideActive}
        leftSideActive={props.leftSideActive}
      />

      <div className=" h-full border-[0.5px] border-[#1d1f1f] "></div>

      <SpeakerIcon
        speakerState={speakerState}
        setSpeakerState={() => {
          setSpeakerState(!speakerState);
          props.entireToggleVolume(!speakerState);
        }}
      />

      <MicroIcon
        microState={props.isMute}
        setMicroState={() => props.handleMuteBtnClick()}
      />
      <BackIcon />
    </div>
  );
};

export default TopRightMenu;
