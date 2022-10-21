import React, { useEffect, useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";

import LiveRoomListTitle from "./LiveRoomListTitle";
import LiveRoomListItem from "./LiveRoomListItem";
import MobileJoinRoomDlg from "./MobileJoinRoomDlg";
import MoreRoomsButton from "./MoreRoomsButton";
import { SolanaIcon } from "components/icons";

const LiveRoomList = (props: any) => {

  const { rooms } = useSelector((state: RootStateOrAny) => ({
    rooms: state.chat.rooms
  }))

  const [liveRoomSectionHeight, setLiveRoomSectionHeight] = useState(352);
  const [maxLiveRoomSectionHeight, setMaxLiveRoomSectionHeight] = useState(
    rooms.length * 88
  );
  const [showMobileJoinRoomDlg, setShowMobileJoinRoomDlg] = useState(false);

  useEffect(() => {
    if (rooms.length < 5) {
      setLiveRoomSectionHeight(rooms.length * 88);
    } else if (liveRoomSectionHeight < 352) {
      setLiveRoomSectionHeight(352);
    }
    setMaxLiveRoomSectionHeight(rooms.length * 88)
  }, [rooms.length])

  useEffect(() => {
    const ele = document.getElementById("lrl");
    (ele as any).style.height = liveRoomSectionHeight + "px";
  }, [liveRoomSectionHeight]);
  let k = -1;
  return (
    <div className=" items-left gap-[24px] mt-[25px] h-full ">
      <LiveRoomListTitle number="25" />
      <div
        className={`h-full pr-[10px] md:overflow-y-scroll xs:overflow-y-hidden overflow-x-visible flex flex-col items-left md:gap-[16px] xs:gap-[12px] `}
        id="lrl"
      >
        {rooms && rooms.map((room, index) => {
          k++;
          return (
            <LiveRoomListItem
              key={index}
              imgUrl={room.imageUrl}
              walletIcon={<SolanaIcon />}
              collectionName={room.title}
              roomName={room.roomName}
              lgImgUrl={room.imageUrl}
              currentNumberOfMembers={room.speakers.length}
              roomId={index}
              setShowMobileJoinRoomDlg={setShowMobileJoinRoomDlg}
            />
          );
        })}
      </div>

      <MoreRoomsButton
        liveRoomSectionHeight={liveRoomSectionHeight}
        lengthOfRoom={rooms.length}
        setLiveRoomSectionHeight={setLiveRoomSectionHeight}
        maxLiveRoomSectionHeight={maxLiveRoomSectionHeight}
      />

    </div>
  );
};

export default LiveRoomList;
