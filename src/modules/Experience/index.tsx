import CreateRoomButton from "components/Experience/LiveRoom/CreateRoomButton";
import React from "react";
import ExploreSection from "./ExploreSection";
import LiveRoomSection from "./LiveRoomSection";

type ExperienceType = {
  sidebarToggler: boolean;
  roomSelect: any;
  activeRoom: any;
  setActiveRoomId: any;
  activeRoomId: number;
  roomSettingDlgToggle: any;
  setRoomSettingDlgToggle: any;
};

const Experience = (props: ExperienceType) => {
  return (
    <div className=" flex flex-col my-[39px] ">
      <CreateRoomButton onClick={props.setRoomSettingDlgToggle} />
      <div className=" flex lg:flex-row xs:flex-col md:gap-[56px] xs:gap-[0px] ">
        <LiveRoomSection
          activeRoom={props.activeRoom}
          roomSelect={props.roomSelect}
          setActiveRoomId={props.setActiveRoomId}
          activeRoomId={props.activeRoomId}
          roomSettingDlgToggle={props.roomSettingDlgToggle}
          setRoomSettingDlgToggle={props.setRoomSettingDlgToggle}
        />
        <ExploreSection />
      </div>
    </div>
  );
};

export default Experience;
