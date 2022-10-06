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

  const { selectedRoomIndex } = useSelector((state: RootStateOrAny) => ({
    selectedRoomIndex: state.chat.selectedRoomIndex,
  }));

  const createRoomModal = () => {
    if (selectedRoomIndex != -1) {
      props.setRoomSettingDlgToggle();
    } else {
      alert('Please select a room to create')
    }
  }

  return (
    <div className=" flex flex-col my-[39px] ">
      <CreateRoomButton onClick={createRoomModal} />
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
