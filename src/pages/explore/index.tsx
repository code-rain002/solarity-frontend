import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { RootStateOrAny, useDispatch, useSelector } from "react-redux"

import Explore from "modules/Explore"
import Layout from "components/Layout"
import ExploreBanner from "modules/Explore/ExploreBanner"
import JoinRoomModal from "components/Experience/Common/JoinRoomModal"
import { addMsg, addPeer, removePeer, setMsg, setName, setRooms } from "redux/slices/chatSlice"
import ACTIONS from "config/actions"

const ProfileIndex = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { joinModalVisibility } = useSelector((state: RootStateOrAny) => ({
        joinModalVisibility: state.chat.joinModalVisibility
    }));

    const [sidebarToggler, setSidebarToggler] = useState(false)

    useEffect(() => {
        // When a user click f5 key, it helps to forget a user's name.
        if (localStorage.getItem("name")) {
            dispatch(setName(localStorage.getItem("name")));
        }
        initSocket();
    }, [])

    const initSocket = () => {
        // This part is main for socket.
        if (!(window as any).socket) {
            setTimeout(() => {
                initSocket();
            }, 5);
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
                (window as any).socket.emit(ACTIONS.ROOM_LIST, {});
                if (data.type == false && data.roomNo == 0) {
                    router.push(`/experience/room?rid=${data.roomId}&roomType=0&no=0`);
                } else if (data.type == false && data.roomNo == 1) {
                    router.push(`/experience/room?rid=${data.roomId}&roomType=1&no=0`);
                } else if (data.type == false && data.roomNo == 2) {
                    router.push(`/experience/room?rid=${data.roomId}&roomType=2&no=0`);
                } else if (data.type == true) {
                    router.push(`/experience/room?rid=${data.roomId}&roomType=3&no=${data.roomNo + 1}`);
                }
            });
            (window as any).socket.emit(ACTIONS.DUPLICATION_INVITATION, () => {
                alert("This user is already invited.");
            });
            (window as any).listen = true;
        }
    }

    return (
        <Layout
            sidebarToggler={sidebarToggler}
            banner={<ExploreBanner sidebarToggler={sidebarToggler} />}
            onClick={() => setSidebarToggler(!sidebarToggler)}
        >
            <Explore />
            {joinModalVisibility && (
                <JoinRoomModal />
            )}
        </Layout>
    )
}

export default ProfileIndex