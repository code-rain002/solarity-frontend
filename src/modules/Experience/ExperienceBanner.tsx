import React, { useEffect, useState } from "react";
import Image from "next/image";

import RoomInfoDlg from "components/Experience/RoomInfoDlg";
import { RootStateOrAny, useSelector } from "react-redux";
import ACTIONS from "config/actions";

const ExperienceBanner = () => {

  const { selectedIndex, rooms } = useSelector((state: RootStateOrAny) => ({
    selectedIndex: state.chat.selectedIndex,
    rooms: state.chat.rooms
  }));

  const [selectedLiveRoom, setSelectedLiveRoom] = useState<any>({});

  useEffect(() => {
    document.getElementsByTagName('html')[0].classList.remove('a-fullscreen');
    if (selectedIndex != -1 && rooms[selectedIndex]) {
      setSelectedLiveRoom(rooms[selectedIndex]);
    }
  }, [rooms, selectedIndex])

  useEffect(() => {
    setTimeout(() => {
      if (!!(window as any).socket)
        (window as any).socket.emit(ACTIONS.ROOM_LIST, {});
    }, 10);
  }, []);

  return (
    <div className="w-full h-full relative rounded-[25px] overflow-hidden md:block xs:hidden">
      <Image
        src={!!selectedLiveRoom.imageUrl ? selectedLiveRoom.imageUrl : `/images/experience/room_images/room_1.jpg`}
        layout="fill"
        alt="Experience Banner Image"
      />
      {!!selectedLiveRoom.title && (
        <RoomInfoDlg
          selectedLiveRoom={selectedLiveRoom}
        />
      )}
    </div>
  );
};

export default ExperienceBanner;
