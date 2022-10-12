import React, { useState } from "react";
import { PrimaryButton } from "components/Common/Buttons";
import { UpArrow } from "components/icons";
import { LiveRoomListData, PsuedoAvatarItemData } from "data/Experience";
import Image from "next/image";
import { useRouter } from "next/router";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { createRoom, setModalVisibility } from "../../../redux/slices/chatSlice";
import { CloseIcon } from "../../icons";
import RoundedTabItem from "components/Profile/RoundedTabItem";
import RoomSelectionTab from "components/Library/RoomSelectionTab";
import FriendSelectionTab from "components/Library/FriendSelectionTab";

const CreateRoomModal = () => {
  const dispatch = useDispatch();
  const { selectedRoom, profileData } = useSelector((state: RootStateOrAny) => ({
    selectedRoom: state.chat.selectedRoom,
    profileData: state.profile.data
  }));

  const router = useRouter();
  const [uName, setUName] = useState("");
  const [modelIndex, setModelIndex] = useState(0);
  const [step, setStep] = useState(0);

  let j = -1;

  const createRoomFunc = () => {
    if (uName == "") {
      alert('The name of room is required.');
      return;
    }

    dispatch(createRoom({
      title: selectedRoom.roomName,
      type: selectedRoom.type,
      roomNo: selectedRoom.roomNo,
      roomName: uName,
      userName: profileData.username,
      slideUrls: [],
      modelIndex: modelIndex,
      avatarUrl: profileData.profileImageLink || ""
    }))
  }

  const closeDlg = () => {
    dispatch(setModalVisibility(false));
  };

  return (
    <div
      className={` flex justify-center md:items-center xs:items-end top-[0px] left-[0px] right-[0px] bottom-[0px] backdrop-blur-[20px] md:bg-[rgba(12,12,14,0.7)] xs:bg-globalBgColor z-[1002] fixed`}
      id="room_setting_dlg"
      onClick={closeDlg}
    >
      <div
        className=" fixed md:w-[40%] xs:w-full h-[87.5%] bg-[#131314] border-[1px] border-[#1d1d1f] rounded-[20px] flex flex-col pt-[28px] px-[32px] pb-[32px] gap-[24px] overscroll-contain"
      >
        {/* Modal Header */}
        <div
          className=" absolute md:right-[-18px] md:top-[-18px] xs:right-[49%] xs:top-[-58px] cursor-pointer "
          onClick={closeDlg}
        >
          <CloseIcon />
        </div>
        <div className=" flex flex-row justify-between items-center ">
          <div className=" font-['Outfit'] font-[500] text-[24px] text-[#f3f3f3] ">
            Create Room
          </div>
        </div>

        {/* Modal Content */}
        <div className="flex items-start p-1 border-[1.2px] border-[#272829] rounded-[40px] w-fit gap-[4px]">
          {["Select Room", "Invite Friends"].map((i, index) => {
            return <RoundedTabItem selectedStatus={step === index} title={i} onClick={() => setStep(index)} key={index} />
          })}
        </div>
        {/* Tab Content */}
        {step === 0 && (
          <RoomSelectionTab />
        )}
        {step === 1 && (
          <FriendSelectionTab />
        )}

        {/* Modal Footer */}
        <div className="self-center justify-self-end w-full z-[1002]">
          <PrimaryButton caption={`${step === 0 ? 'Next' : 'Create'}`} bordered={false} onClick={createRoomFunc} disabled={false} styles="pt-[12px] pb-[16px] h-fit rounded-[15px]" />
        </div>
      </div>
    </div>
  );
};

export default CreateRoomModal;
