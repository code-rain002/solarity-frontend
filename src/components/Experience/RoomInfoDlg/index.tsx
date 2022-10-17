import React, { useEffect } from "react";

import UserAvatarSmall from "./RoomMemberAvatarSmall";
import { LiveRoomListData, RoomMemberAvatarSmallData } from "data/Experience";
import MoreUsersAvatar from "./MoreUsersAvatar";
import DummyAvatarSmall4Experience from "./DummyAvatarSmall4Experience";
import JoinRoomButton from "./JoinRoomButton";
import RoomInfoDlgTitle from "./RoomInfoDlgTitle";
import RoomInfoDlgText from "./RoomInfoDlgText";

type RoomInfoDlgType = {
  selectedLiveRoom: any;
};

const RoomInfoDlg = (props: RoomInfoDlgType) => {
  var rest = 0;
  const title = "Teufzer";
  const text =
    "The Gods are the legacy 6666 collection within “The Frecture”. A Brand Born in Blockchain";
  useEffect(() => {
    console.log(props.selectedLiveRoom);
  })
  return (
    <div className="md:absolute xs:relative flex flex-col lg:right-8  md:right-4 xs:right-[0px] lg:bottom-8 xs:bottom-[0px] md:h-[226px] md:w-[394px] xs:h-[227px] xs:w-[311px] xs:bg-globalBgColor rounded-[20px] pt-[28px] px-[32px] pb-[32px] md:mb-[0px] xs:mb-[32px]">
      <RoomInfoDlgTitle title={props.selectedLiveRoom ? props.selectedLiveRoom.roomName : ""} />
      <RoomInfoDlgText text={text} />
      <div className="md:mt-[32px] xs:mt-[24px] flex md:flex-row xs:flex-col md:h-fit xs:h-full items-center justify-between">
        <div className="flex ml-4">
          {props.selectedLiveRoom && !!props.selectedLiveRoom.avatars && props.selectedLiveRoom.avatars.map(function (avatar, index) {
            rest = index - 4;
            return index >= 5 ? (
              false
            ) : avatar === "" ? (
              <DummyAvatarSmall4Experience key={index} />
            ) : (
              <UserAvatarSmall imageUrl={avatar} key={index} />
            );
          })}
          {rest < 1 ? "" : <MoreUsersAvatar rest={rest} />}
        </div>
        <JoinRoomButton />
      </div>
    </div>
  );
};

export default RoomInfoDlg;
