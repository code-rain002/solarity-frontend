import React, { useEffect, useState } from "react"
import { RoomTitleInput } from "components/Common/Forms"
import RoomListItem from "./RoomListItem"
import { PublicRoomList } from 'data/Experience'
import { RootStateOrAny, useSelector } from "react-redux"
import { SolanaIcon } from "components/icons"

const RoomSelectionContent = (props) => {

  const { profileData, activeRoomTypeIndex } = useSelector((state: RootStateOrAny) => ({
    profileData: state.profile.data,
    activeRoomTypeIndex: state.chat.activeRoomTypeIndex
  }));

  return (
    <div className="profile-settings-content tab-general-content h-full min-w-[330px] flex flex-col items-between gap-[32px] pt-[2px] pb-[2px] mb-[25px] overflow-y-auto overflow-x-visible items-center">
      <div className="flex w-full mt-[10px]">
        <RoomTitleInput />
      </div>
      <div className="relative h-[80%] w-full">
        <div className=" grid grid-cols-2 gap-[16px] h-[100%] overflow-y-scroll overflow-x-visible pb-[30px] overscroll-contain">
          {/* Public rooms */}
          {!activeRoomTypeIndex && PublicRoomList.map((publicRoom, index) => (
            <RoomListItem
              key={index}
              {...publicRoom}
            />
          ))}
          {/* Private rooms */}
          {activeRoomTypeIndex && profileData.rooms && profileData.rooms.map((room, index) => (
            <RoomListItem
              key={index}
              type={true}
              roomNo={room.roomNo}
              walletIcon={<SolanaIcon />}
              roomName={room.title}
              imgUrl={room.imageUrl}
            />
          ))}
        </div>
        <div className=" absolute bottom-[-5px] right-[0px] h-[20px] w-full bg-gradient-to-t from-[#131314] to-transparent"></div>
      </div>
    </div>
  )
}

export default RoomSelectionContent