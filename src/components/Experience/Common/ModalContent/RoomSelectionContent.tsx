import React from "react"
import { RoomTitleInput } from "components/Common/Forms"
import RoomListItem from "./RoomListItem"
import { PublicRoomList } from 'data/Experience'

const RoomSelectionContent = (props) => {
  return (
    <div className="profile-settings-content tab-general-content h-full min-w-[330px] flex flex-col items-between gap-[32px] pt-[2px] pb-[2px] mb-[25px] overflow-y-auto overflow-x-visible items-center">
      <div className="flex w-full mt-[10px]">
        <RoomTitleInput />
      </div>
      <div className="relative h-[80%] w-full">
        <div className=" grid grid-cols-2 gap-[16px] h-[100%] overflow-y-scroll overflow-x-visible pb-[30px] overscroll-contain">
          {PublicRoomList.map((publicRoom, index) => {
            return (
              <RoomListItem
                key={index}
                {...publicRoom}
              />
            );
          })}
        </div>
        <div className=" absolute bottom-[-5px] right-[0px] h-[20px] w-full bg-gradient-to-t from-[#131314] to-transparent"></div>
      </div>
    </div>
  )
}

export default RoomSelectionContent