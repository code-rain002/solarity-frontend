import CreateRoomButton from "components/Experience/LiveRoom/CreateRoomButton";
import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
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
      <ExploreSection />
    </div>
  );
};

export default Experience;
