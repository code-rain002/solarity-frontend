import React from "react";
import Image from "next/image";

import RoomInfoDlg from "components/Experience/RoomInfoDlg";

type ExperienceBannerType = {
  sidebarToggler: boolean;
  activeRoom: string;
  setRoomSettingDlgToggle: any;
  activeRoomId: number;
};

const ExperienceBanner = (props: ExperienceBannerType) => {
  return (
    <div className="w-full h-full relative rounded-[25px] overflow-hidden md:block xs:hidden">
      <Image
        src={`/images/experience/room_images/${props.activeRoom}.jpg`}
        layout="fill"
        alt="Experience Banner Image"
      />
      <RoomInfoDlg
        setRoomDlgToggle={props.setRoomSettingDlgToggle}
        activeRoomId={props.activeRoomId}
      />
    </div>
  );
};

export default ExperienceBanner;
