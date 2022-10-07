import React, { useEffect, useState } from "react"

import Experience from "modules/Experience"
import Layout from "components/Layout"
import ExperienceBanner from "modules/Experience/ExperienceBanner"
import RoomSettingDlg from "components/Experience/Common/RoomSettingDlg"
import { useDispatch } from "react-redux"
import { addMsg, addPeer, removePeer, setMsg, setName, setRooms } from "redux/slices/chatSlice"
import ACTIONS from "config/actions"
import { useRouter } from "next/router"

const ProfileIndex = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const [sidebarToggler, setSidebarToggler] = useState(false)
    const [activeRoom, setActiveRoom] = useState("room_1")
    const [roomSettingDlgToggle, setRoomSettingDlgToggle] = useState([false, "join"])
    const [activeRoomId, setActiveRoomId] = useState(0)

    useEffect(() => {
        // When a user click f5 key, it helps to forget a user's name.
        if (localStorage.getItem("name")) {
            dispatch(setName(localStorage.getItem("name")));
        }
        initSocket();
    }, [])

    const initSocket = () => {
        // This part is main for socket.
        if (!window.socket) {
            setTimeout(() => {
                initSocket();
            }, 100);
            return;
        }

        if (!window.listen) {
            window.socket.on(ACTIONS.ADD_PEER, (data: any) => {
                dispatch(addPeer(data));
            });
            window.socket.on(ACTIONS.SEND_MSG, (data: any) => {
                dispatch(addMsg(data));
            });
            window.socket.on(ACTIONS.REMOVE_PEER, (data: any) => {
                dispatch(removePeer(data));
            });

            window.socket.on(ACTIONS.ROOM_LIST, (data: any) => {
                dispatch(setRooms(data.rooms));
            });

            window.socket.on(ACTIONS.CREATE_ROOM, (data: any) => {
                dispatch(setMsg(data.msgs));
            });

            window.socket.on(ACTIONS.ROOM_READY, (data: any) => {
                window.socket.emit(ACTIONS.ROOM_LIST, {});
                if (data.type == false && data.roomNo == 0) {
                    router.push(`/experience/Room?rid=${data.roomId}&roomType=0&no=0`);
                } else if (data.type == false && data.roomNo == 1) {
                    router.push(`/experience/Room?rid=${data.roomId}&roomType=1&no=0`);
                } else if (data.type == false && data.roomNo == 2) {
                    router.push(`/experience/Room?rid=${data.roomId}&roomType=2&no=0`);
                } else if (data.type == true) {
                    router.push(`/experience/Room?rid=${data.roomId}&roomType=3&no=${data.roomNo + 1}`);
                }
            });
            window.socket.emit(ACTIONS.DUPLICATION_INVITATION, () => {
                alert("This user is already invited.");
            });
            window.listen = true;
        }
    }

    return (
        <Layout
            sidebarToggler={sidebarToggler}
            banner={<ExperienceBanner
                activeRoomId={activeRoomId}
                sidebarToggler={sidebarToggler}
                activeRoom={activeRoom}
                setRoomSettingDlgToggle={() => setRoomSettingDlgToggle([true, "join"])}
            />}
            onClick={() => setSidebarToggler(!sidebarToggler)}
        >
            <Experience
                sidebarToggler={sidebarToggler}
                activeRoom={activeRoom}
                roomSelect={(arg) => setActiveRoom(arg)}
                setActiveRoomId={(i) => setActiveRoomId(i)}
                activeRoomId={activeRoomId}
                roomSettingDlgToggle={roomSettingDlgToggle}
                setRoomSettingDlgToggle={() => setRoomSettingDlgToggle([true, "create"])}
            />
            {
                roomSettingDlgToggle[0] && (
                    <RoomSettingDlg activeRoomId={activeRoomId} roomSettingDlgToggle={roomSettingDlgToggle} setRoomSettingDlgToggle={setRoomSettingDlgToggle} />
                )
            }
        </Layout>
    )
}

export default ProfileIndex