import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import LiveRoomListTitle from "./LiveRoomListTitle";
import LiveRoomListItem from "./LiveRoomListItem";
import MobileJoinRoomDlg from "./MobileJoinRoomDlg";
import MoreRoomsButton from "./MoreRoomsButton";
import { SolanaIcon } from "components/icons";
import { checkBrowser } from "utils";
import { setCreateModalVisibility } from "redux/slices/chatSlice";
import { PrimaryButton } from "components/Common/Buttons";

const LiveRoomList = (props: any) => {
  const dispatch = useDispatch();
  const { rooms } = useSelector((state: RootStateOrAny) => ({
    rooms: state.chat.rooms
  }))

  const [liveRoomSectionHeight, setLiveRoomSectionHeight] = useState(352);
  const [maxLiveRoomSectionHeight, setMaxLiveRoomSectionHeight] = useState(
    rooms.length * 88
  );
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileJoinRoomDlg, setShowMobileJoinRoomDlg] = useState(false);

  const createRoomModal = () => {
    dispatch(setCreateModalVisibility(true))
  }

  useEffect(() => {
    setIsMobile(checkBrowser());
  }, [])

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
    (ele as any).style.height = (checkBrowser() ? liveRoomSectionHeight : 430) + "px";
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
      {isMobile && (
        <div className='mb-10'>
          <PrimaryButton caption="Create a room" onClick={createRoomModal} />
        </div>
      )}

    </div>
  );
};

export default LiveRoomList;
