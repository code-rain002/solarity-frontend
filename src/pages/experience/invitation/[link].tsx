import { useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../redux/hooks";
import React, { FC, useEffect } from "react";
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
  }, []);

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
    <div>
    </div>
  );
};

export { getServerSideProps };

export default ProfileIndex;
