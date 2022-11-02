import React, { FC, useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import {
  setName,
  addPeer,
  addMsg,
  removePeer,
  setRooms,
  setMsg,
  setRoom
} from "redux/slices/chatSlice";
import ACTIONS from "config/actions";
import Input from "components/Common/Forms/Input";
import PsuedoAvatarItem from "components/Experience/Common/PsuedoAvatarItem";
import { PrimaryButton } from "components/Common/Buttons";
import { models, PsuedoAvatarItemData } from "data/Experience";
import AvatarPanel from "components/Experience/Common/AvatarPanel";

const JoinServerRoomModal: FC<any> = ({
  type,
  name
}: {
  type: string;
  name?: string;
}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { rooms } = useSelector((state: RootStateOrAny) => ({
    rooms: state.chat.rooms,
  }))

  const [modelIndex, setModelIndex] = useState(0);
  const [selectedLiveRoom, setSelectedLiveRoom] = useState<any>({});
  const [username, setUsername] = useState(!!name ? name : "");
  const [joinDisable, setJoinDisable] = useState(false);

  const publicUrls = ["/assets/images/rooms/hub.jpg", "/assets/images/rooms/gallery.png", "/assets/images/rooms/plaza.jpg"]

  const joinRoomFunc = () => {
    if (username == "") {
      alert('The name of room is required.');
      return;
    }
    setJoinDisable(true);
    dispatch(
      setRoom({
        modelIndex,
        roomName: type,
        userName: username,
      })
    );

    // Clear Join Room modal before you go to chat.
    setTimeout(() => {
      setUsername("");
    }, 5000);
    if (type === 'Solarity Hub') {
      localStorage.setItem("roomBgImg", publicUrls[0]);
      router.push(`/experience/room?rid=${2}&roomType=0&no=0`);
    } if (type === 'gallery') {
      localStorage.setItem("roomBgImg", publicUrls[1]);
      router.push(`/experience/room?rid=${1}&roomType=1&no=0`);
    } else {
      localStorage.setItem("roomBgImg", publicUrls[2]);
      router.push(`/experience/room?rid=${0}&roomType=2&no=0`);
    }
  }

  useEffect(() => {
    rooms.forEach((room, index) => {
      if (room.roomName == type) {
        setSelectedLiveRoom(room);
      }
    });
  }, [rooms])

  useEffect(() => {
    if (localStorage.getItem("name")) {
      dispatch(setName(localStorage.getItem("name")));
    }

    // This part is main for socket.
    if (!(window as any).socket) {
      return;
    }
    if (!(window as any).listen) {
      (window as any).socket.on(ACTIONS.ADD_PEER, (data: any) => {
        dispatch(addPeer(data));
      });
      (window as any).socket.on(ACTIONS.SEND_MSG, (data: any) => {
        dispatch(addMsg(data));
      });
      (window as any).socket.on(ACTIONS.REMOVE_PEER, (data: any) => {
        dispatch(removePeer(data));
      });

      (window as any).socket.on(ACTIONS.ROOM_LIST, (data: any) => {
        dispatch(setRooms(data.rooms));
      });

      (window as any).socket.on(ACTIONS.CREATE_ROOM, (data: any) => {
        dispatch(setMsg(data.msgs));
      });

      (window as any).socket.on(ACTIONS.ROOM_READY, (data: any) => {
        router.push(`experience/room?rid=${data.roomId}`);
      });
      (window as any).listen = true;
    }
    (window as any).socket.emit(ACTIONS.ROOM_LIST, {});
  }, [])

  return (
    <div
      className={` flex justify-center md:items-center xs:items-end top-[0px] left-[0px] right-[0px] bottom-[0px] backdrop-blur-[20px] md:bg-[rgba(12,12,14,0.7)] xs:bg-globalBgColor z-[1002] fixed`}
      id="room_setting_dlg"
    >
      <div
        className=" fixed md:w-[22%] xs:w-full h-[89.5%] bg-[#131314] border-[1px] border-[#1d1d1f] rounded-[20px]
                            flex flex-col pt-[12px] px-[32px] pb-[145px] gap-[24px] overscroll-contain"
      >
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
        <Input value={username} setValue={setUsername} caption={"Your nickname"} disabled={false} />
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
            {PsuedoAvatarItemData.map((i, j) => {
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

export default JoinServerRoomModal;
