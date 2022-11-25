import React, { useState } from "react";
import { PrimaryButton } from "components/Common/Buttons";
import { UpArrow } from "components/icons";
import { LiveRoomListData, PsuedoAvatarItemData } from "data/Experience";
import { useRouter } from "next/router";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { createRoom, setCreateModalVisibility, setNewRoomTitle, setSelectedRoom } from "../../../redux/slices/chatSlice";
import { CloseIcon } from "../../icons";
import RoundedTabItem from "components/Profile/RoundedTabItem";
import RoomSelectionContent from "./ModalContent/RoomSelectionContent";
import AvatarSelectionContent from "./ModalContent/AvatarSelectionContent";

const CreateRoomModal = () => {
  const dispatch = useDispatch();
  const { selectedRoom, newRoomTitle, profileData } = useSelector((state: RootStateOrAny) => ({
    selectedRoom: state.chat.selectedRoom,
    newRoomTitle: state.chat.newRoomTitle,
    profileData: state.profile.data
  }));

  const [createDisable, setCreateDisable] = useState(false);
  const [modelIndex, setModelIndex] = useState(0);
  const [step, setStep] = useState(0);

  const createRoomFunc = () => {
    if (step === 0) {
      setStep(1);
      return;
    }

    if (newRoomTitle === "") {
      setStep(0);
      alert('The title of room is required.');
      return;
    }

    if (selectedRoom.no === undefined) {
      setStep(0);
      alert('Select room first.');
      return;
    }
    setCreateDisable(true);

    setTimeout(() => {
      setStep(0);
      dispatch(setCreateModalVisibility(false));
      dispatch(setNewRoomTitle(''));
      dispatch(setSelectedRoom({}));
    }, 5000);

    dispatch(createRoom({
      title: selectedRoom.roomName,
      type: selectedRoom.type,
      roomNo: selectedRoom.no,
      roomName: newRoomTitle,
      userName: profileData.username,
      slideUrls: [],
      modelIndex: modelIndex,
      avatarUrl: profileData.profileImageLink || "",
      imageUrl: selectedRoom.imageUrl,
    }))
  }

  const closeDlg = (e) => {
    if (e.target.id == "room_setting_dlg") {
      dispatch(setCreateModalVisibility(false));
    }
  };

  return (
    <div
      className={` flex justify-center md:items-center xs:items-end top-[0px] left-[0px] right-[0px] bottom-[0px] backdrop-blur-[20px] md:bg-[rgba(12,12,14,0.7)] xs:bg-globalBgColor z-[1002] fixed`}
      id="room_setting_dlg"
      onClick={(e) => closeDlg(e)}
    >
      <div
        className=" fixed top-[120px] md:w-[40%] xs:w-full h-[83.5%] bg-[#131314] border-[1px] border-[#1d1d1f] rounded-[20px] flex flex-col pt-[28px] px-[32px] pb-[32px] gap-[24px] overscroll-contain"
      >
        {/* Modal Header */}
        <div
          className=" absolute md:right-[-18px] md:top-[-18px] xs:right-[49%] xs:top-[-58px] cursor-pointer "
          onClick={() => dispatch(setCreateModalVisibility(false))}
        >
          <CloseIcon />
        </div>
        <div className=" flex flex-row justify-between items-center ">
          <div className=" font-['Outfit'] font-[500] text-[24px] text-[#f3f3f3] ">
            Create Room
          </div>
        </div>

        {/* Modal Content */}
        <div className="flex items-start p-2 border-[1.2px] border-[#272829] rounded-[40px] w-fit gap-[4px]">
          {["Select Room", "Select Avatar"].map((i, index) => {
            return <RoundedTabItem selectedStatus={step === index} title={i} onClick={() => setStep(index)} key={index} />
          })}
        </div>
        {/* Tab Content */}
        {step === 0 && (
          <RoomSelectionContent />
        )}
        {step === 1 && (
          <AvatarSelectionContent />
        )}

        {/* Modal Footer */}
        <div className="self-center justify-self-end w-full z-[1002]">
          <PrimaryButton caption={`${step === 0 ? 'Next' : 'Create'}`} bordered={false} onClick={createRoomFunc} disabled={createDisable} styles="pt-[12px] pb-[16px] h-fit rounded-[15px]" />
        </div>
      </div>
    </div>
  );
};

export default CreateRoomModal;
