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
      {selectedLiveRoom.imageUrl ? (
        <Image
          src={!!selectedLiveRoom.imageUrl ? selectedLiveRoom.imageUrl : `/images/experience/room_images/room_1.jpg`}
          layout="fill"
          alt="Experience Banner Image"
        />
      ) : (
        <div className='flex border border-[#1A1A1C]'>
          <div className='relative w-[50%] h-[496px] bg-[#131314]'>
            <Image src="/images/intro/slides/hubs.png" layout="fill" />
          </div>
          <div className='w-[50%] bg-[#131314] flex items-center justify-center text-center'>
            <div>
              <h2 className='text-[30px] font-[700] title-color'>HUBS</h2>
              <p className='center text-[19px] font-[500] content-color'> Socialize, play, bet and trade in the <br />most immersive way possible.<br />Poker, WL hunting, presentations and more.<br /></p>
            </div>
          </div>
        </div>
      )}

      {!!selectedLiveRoom.title && (
        <RoomInfoDlg
          selectedLiveRoom={selectedLiveRoom}
        />
      )}
    </div>
  );
};

export default ExperienceBanner;
