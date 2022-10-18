import React, { useEffect, useState } from "react";
import { PrimaryButton } from "components/Common/Buttons";
import { UpArrow } from "components/icons";
import { LiveRoomListData, PsuedoAvatarItemData } from "data/Experience";
import Image from "next/image";
import { useRouter } from "next/router";
import useWindowDimensions from "utils/layout";
import AvatarPanel from "./AvatarPanel";
import PsuedoAvatarItem from "./PsuedoAvatarItem";
import { models } from "data/Experience";
import Input from "components/Common/Forms/Input";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { createRoom, setJoinModalVisibility } from "../../../redux/slices/chatSlice";
import { setRoom } from "redux/slices/marketplaceSlice";

const JoinRoomModal = () => {
  const dispatch = useDispatch();
  const { selectedRoom, profileData, selectedIndex, rooms } = useSelector((state: RootStateOrAny) => ({
    selectedRoom: state.chat.selectedRoom,
    profileData: state.profile.data,
    selectedIndex: state.chat.selectedIndex,
    rooms: state.chat.rooms,
  }));

  const [selectedLiveRoom, setSelectedLiveRoom] = useState<any>({});
  const [joinDisable, setJoinDisable] = useState(false);

  const [activeAvatar, setActiveAvatar] = useState(0);
  const [activeAvatarImg, setActiveAvatarImg] = useState(
    PsuedoAvatarItemData[0].imgUrl
  );
  const router = useRouter();
  const [uName, setUName] = useState("");
  const [modelIndex, setModelIndex] = useState(0);

  let j = -1;

  const toLoadingScr = () => {
    uName === ""
      ? alert("Input your nickname please.")
      : router.push("/experience/");
  };

  const joinRoomFunc = () => {
    if (uName == "") {
      alert('The name of room is required.');
      return;
    }
    setJoinDisable(true);
    dispatch(
      setRoom({
        modelIndex,
        roomName: selectedLiveRoom.roomName ? selectedLiveRoom.roomName : "",
        userName: uName,
      })
    );

    // Clear Join Room modal before you go to chat.
    setTimeout(() => {
      dispatch(setJoinModalVisibility(false));
      setUName("");
    }, 3000);

    if (!!(window as any).socket) {
      if (selectedLiveRoom.roomNo == 0) {
        router.push(`/experience/Room?rid=${selectedLiveRoom.roomId}&roomType=0&no=0`);
      } else if (selectedLiveRoom.type == false && selectedLiveRoom.roomNo == 1) {
        router.push(`/experience/Room?rid=${selectedLiveRoom.roomId}&roomType=1&no=0`);
      } else if (selectedLiveRoom.type == false && selectedLiveRoom.roomNo == 2) {
        router.push(`/experience/Room?rid=${selectedLiveRoom.roomId}&roomType=2&no=0`);
      } else if (selectedLiveRoom.type == true) {
        router.push(`/experience/Room?rid=${selectedLiveRoom.roomId}&roomType=3&no=${selectedLiveRoom.roomNo + 1}`);
      }
    }
  }

  const closeDlg = (e) => {
    if (e.target.id == "room_setting_dlg") {
      dispatch(setJoinModalVisibility(false));
    }
  };

  useEffect(() => {
    if (rooms.length != 0 && selectedIndex != -1 && rooms.length > selectedIndex) {
      setSelectedLiveRoom(rooms[selectedIndex])
    }
  }, [rooms, selectedIndex])

  useEffect(() => {
    if (profileData.username) {
      setUName(profileData.username)
    }
  }, [profileData])

  return (
    <div
      className={` flex justify-center md:items-center xs:items-end top-[0px] left-[0px] right-[0px] bottom-[0px] backdrop-blur-[20px] md:bg-[rgba(12,12,14,0.7)] xs:bg-globalBgColor z-[1002] fixed`}
      id="room_setting_dlg"
      onClick={(e) => closeDlg(e)}
    >
      <div
        className=" fixed md:w-[22%] xs:w-full h-[87.5%] bg-[#131314] border-[1px] border-[#1d1d1f] rounded-[20px]
                            flex flex-col pt-[28px] px-[32px] pb-[32px] gap-[24px] overscroll-contain"
      >
        <div
          className=" absolute md:right-[-18px] md:top-[-18px] xs:right-[49%] xs:top-[-58px] cursor-pointer "
          onClick={() => dispatch(setJoinModalVisibility(false))}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.9564 11.866L8.09082 7.00022L12.9565 2.13448C13.2581 1.83285 13.2581 1.34522 12.9565 1.04359C12.6548 0.741963 12.1672 0.741963 11.8656 1.04359L6.99995 5.90933L2.13428 1.04359C1.83265 0.741963 1.34503 0.741963 1.04341 1.04359C0.741781 1.34522 0.741781 1.83285 1.04341 2.13448L5.90905 7.00022L1.04341 11.866C0.741781 12.1676 0.741781 12.6552 1.04341 12.9568C1.19383 13.1073 1.3914 13.1829 1.58884 13.1829C1.78629 13.1829 1.98386 13.1072 2.13428 12.9568L2.09892 12.9215L2.13428 12.9568L6.99993 8.09111L11.8656 12.9568C12.016 13.1073 12.2136 13.1829 12.411 13.1829C12.6085 13.1829 12.806 13.1072 12.9564 12.9568L12.9211 12.9215L12.9564 12.9568C13.2581 12.6552 13.2581 12.1676 12.9564 11.866Z"
              fill="#5F5F63"
              stroke="#5F5F63"
              strokeWidth="0.1"
            />
          </svg>
        </div>

        <div className=" flex flex-row justify-between items-center ">
          <div className=" font-['Outfit'] font-[500] text-[24px] text-[#f3f3f3] ">Enter the room</div>
          <div
            className="flex flex-row items-center h-[24px] border-[1px] border-[#1d1f1f] rounded-[40px]
                                              gap-[4px] px-[8px] py-[4px] "
          >
            <div>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 6C7.38071 6 8.5 4.88071 8.5 3.5C8.5 2.11929 7.38071 1 6 1C4.61929 1 3.5 2.11929 3.5 3.5C3.5 4.88071 4.61929 6 6 6Z"
                  stroke="#29B080"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.295 11C10.295 9.065 8.36995 7.5 5.99995 7.5C3.62995 7.5 1.70496 9.065 1.70496 11"
                  stroke="#29B080"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className=" font-['Outfit'] font-[200] text-[12px] text-[#f3f3f3] pt-[2px] ">
              {selectedLiveRoom.avatars && selectedLiveRoom.avatars.length}
            </div>
          </div>
        </div>
        <Input value={uName} setValue={setUName} caption={"Your nickname"} disabled={false} />
        {/* from here, avatar ---------------------------------------------------------------- */}
        <div
          className=" flex h-[200px] w-full rounded-[15px] bg-[#181818]"
        >
          <AvatarPanel
            modelPath={models[modelIndex].modelUrl}
            position={models[modelIndex].position}
            rotation={models[modelIndex].rotation}
            scale={models[modelIndex].scale}
          />
        </div>
        {/* begin of avatar list------------------------------------------------------------------------------------------------ */}
        <div className="relative h-[29%]">
          <div
            className=" grid grid-cols-2 gap-[16px] h-[100%] overflow-y-scroll overflow-x-visible 
                                    pb-[30px] overscroll-contain"
          >
            {PsuedoAvatarItemData.map((i) => {
              j++;
              return (
                <PsuedoAvatarItem
                  key={j}
                  itemId={j}
                  imgUrl={i.imgUrl}
                  title={i.title}
                />
              );
            })}
          </div>
          <div className=" absolute bottom-[-5px] right-[0px] h-[20px] w-full bg-gradient-to-t from-[#131314] to-transparent"></div>
        </div>
        {/* button------------------------------------------------------------------------------------------------ */}
        <div className=" mt-[24px]">
          <PrimaryButton
            caption={"Join the room"}
            bordered={false}
            onClick={joinRoomFunc}
            disabled={joinDisable}
            styles="pt-[12px] pb-[12px] h-fit rounded-[15px]"
          />
        </div>
      </div>
    </div >
  );
};

export default JoinRoomModal;
