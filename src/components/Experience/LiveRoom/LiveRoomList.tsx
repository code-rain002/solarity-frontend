import { LiveRoomListData } from "data/Experience";
import { useEffect, useState } from "react";
import LiveRoomListTitle from "./LiveRoomLilstTitle";
import LiveRoomListItem from "./LiveRoomListItem";
import MobileJoinRoomDlg from "./MobileJoinRoomDlg";
import MoreRoomsButton from "./MoreRoomsButton";

type LiveRoomListType = {
  roomSelect: any;
  activeRoom: any;
  setActiveRoomId: any;
  activeRoomId: any;
  roomSettingDlgToggle: boolean;
  setRoomSettingDlgToggle: any;
};

const LiveRoomList = (props: LiveRoomListType) => {
  const [liveRoomSectionHeight, setLiveRoomSectionHeight] = useState(440);
  const [maxLiveRoomSectionHeight, setMaxLiveRoomSectionHeight] = useState(
    LiveRoomListData.length * 88
  );
  const [showMobileJoinRoomDlg, setShowMobileJoinRoomDlg] = useState(false);

  useEffect(() => {
    const ele = document.getElementById("lrl");
    ele.style.height = liveRoomSectionHeight + "px";
  }, [liveRoomSectionHeight]);
  let k = -1;
  return (
    <div className=" flex flex-col items-left gap-[24px] mt-[25px] ">
      <LiveRoomListTitle number="25" />
      <div
        className={`md:h-[690px] xs:h-[440px] pr-[10px] md:overflow-y-scroll xs:overflow-y-hidden overflow-x-visible flex flex-col items-left md:gap-[16px] xs:gap-[12px] `}
        id="lrl"
      >
        {LiveRoomListData.map((i, index) => {
          k++;
          return (
            <LiveRoomListItem
              key={index}
              imgUrl={i.imgUrl}
              walletIcon={i.walletIcon}
              collectionName={i.collectionName}
              roomName={i.roomName}
              roomSelect={props.roomSelect}
              lgImgUrl={i.lgImgUrl}
              activeRoom={props.activeRoom}
              currentNumberOfMembers={i.currentNumberOfMembers}
              setActiveRoomId={props.setActiveRoomId}
              roomId={k}
              setShowMobileJoinRoomDlg={setShowMobileJoinRoomDlg}
            />
          );
        })}
      </div>

      <MoreRoomsButton
        liveRoomSectionHeight={liveRoomSectionHeight}
        setLiveRoomSectionHeight={setLiveRoomSectionHeight}
        maxLiveRoomSectionHeight={maxLiveRoomSectionHeight}
      />
      <MobileJoinRoomDlg
        showMobileJoinRoomDlg={showMobileJoinRoomDlg}
        setShowMobileJoinRoomDlg={setShowMobileJoinRoomDlg}
        activeRoom={props.activeRoom}
        setRoomSettingDlgToggle={props.setRoomSettingDlgToggle}
        activeRoomId={props.activeRoomId}
        roomSettingDlgToggle={props.roomSettingDlgToggle}
      />
    </div>
  );
};

export default LiveRoomList;
