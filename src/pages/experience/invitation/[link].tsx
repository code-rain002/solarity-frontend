import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Image from 'next/image'
import { useAppSelector } from "../../../redux/hooks";
import { useRouter } from "next/router";
import { getServerSideProps, InvitationPageProps } from "modules/Experience/Invitation";
import NoInvitationView from "modules/Experience/NoInvitationView";
import ACTIONS from "../../../config/actions";
import {
  setName,
  addPeer,
  addMsg,
  removePeer,
  setRooms,
  setMsg,
  setRoomIndex
} from "../../../redux/slices/chatSlice";
import InvitationDlg from "components/Marketplace/Invitation/InvitationDlg";

const ProfileIndex: FC<InvitationPageProps> = ({ roomInfo, success }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { rooms } = useAppSelector(state => state.chat);
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(-1);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");
  const publicUrls = ["/assets/images/rooms/hub.jpg", "/assets/images/rooms/gallery.png", "/assets/images/rooms/plaza.jpg"]
  const handleJoinModalToggle = () => {
    if (selectedRoomIndex != -1) {
    }
  }
  if (!success || !roomInfo) return <NoInvitationView />;
  useEffect(() => {
    // When a user click f5 key, it helps to forget a user's name.
    if (localStorage.getItem("name")) {
      dispatch(setName(localStorage.getItem("name")));
    }
    initSocket();
  }, []);

  const initSocket = () => {
    // This part is main for socket.
    if (!(window as any).socket) {
      setTimeout(() => {
        initSocket();
      }, 100);
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
  }

  useEffect(() => {
    if (roomInfo.type) {
      setSelectedImageUrl(roomInfo.imageUrl);
    } else {
      setSelectedImageUrl(publicUrls[roomInfo.roomNo]);
    }
  }, [])

  useEffect(() => {
    if (rooms && rooms.length != 0) {
      const roomIndex = rooms.findIndex((s: any) => s.roomId == roomInfo.roomId);
      if (roomIndex != -1) {
        setSelectedRoomIndex(roomIndex);
        dispatch(setRoomIndex(roomIndex));
      }
    }
  }, [rooms]);

  const deny = () => {
    // if (!!(window as any).socket) {
    //   (window as any).socket.emit(ACTIONS.ACEEPT_INVITATION, {
    //     roomId: roomInfo.roomId,
    //     username: roomInfo.name,
    //     guestname: '',
    //     type: false,
    //   });
    // }
    router.push("/");
  };

  const back = () => {
    router.push("/");
  };
  return (
    <div className='flex md:justify-center lg:justify-center xs:justify-end sm:justify-end'>
      <div className='lg:block md:block sm:hidden xs:hidden'>
        <Image
          src={roomInfo.imageUrl}
          layout="fill"
        />
      </div>
      <div className='lg:hidden md:hidden sm:block xs:block w-full absolute right-0 top-0'>
        <Image
          src={roomInfo.imageUrl}
          width={1346} height={496}
          layout="responsive"
        />
      </div>
      <div className='flex h-screen
                        lg:w-[736px] md:w-[736px] sm:w-full xs:w-full pt-[10vh]
        '>
        <InvitationDlg
          invitor={roomInfo ? roomInfo.name : ""}
          imgUrl={roomInfo.avatars.length != 0 ? roomInfo.avatars[0] : "/images/profile/temp/Avatar_Konstantin1982.webp"}
        />
      </div>

    </div>
  );
};

export { getServerSideProps };

export default ProfileIndex;
