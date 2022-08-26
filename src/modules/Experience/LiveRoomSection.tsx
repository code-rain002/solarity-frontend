import LiveRoomList from "components/Experience/LiveRoom/LiveRoomList";

type LiveRoomSectionType = {
  roomSelect: any;
  activeRoom: any;
  setActiveRoomId: any;
  activeRoomId: any;
  roomSettingDlgToggle: boolean;
  setRoomSettingDlgToggle: any;
};

const LiveRoomSection = (props: LiveRoomSectionType) => {
  return (
    <div className=" flex flex-col md:min-w-[379px] xs:min-w-[300px] ">
      <LiveRoomList
        activeRoom={props.activeRoom}
        roomSelect={props.roomSelect}
        setActiveRoomId={props.setActiveRoomId}
        activeRoomId={props.activeRoomId}
        roomSettingDlgToggle={props.roomSettingDlgToggle}
        setRoomSettingDlgToggle={props.setRoomSettingDlgToggle}
      />
    </div>
  );
};

export default LiveRoomSection;
