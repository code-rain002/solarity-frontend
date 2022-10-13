import React, { useEffect, useState } from "react"

import Experience from "modules/Experience"
import Layout from "components/Layout"
import ExperienceBanner from "modules/Experience/ExperienceBanner"
import { RootStateOrAny, useDispatch, useSelector } from "react-redux"
import { addMsg, addPeer, removePeer, setMsg, setName, setRooms } from "redux/slices/chatSlice"
import ACTIONS from "config/actions"
import { useRouter } from "next/router"
import LiveRoomList from "components/Experience/LiveRoom/LiveRoomList"
import CreateRoomModal from "components/Experience/Common/CreateRoomModal"

const ProfileIndex = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const [sidebarToggler, setSidebarToggler] = useState(false)
    const [activeRoom, setActiveRoom] = useState("room_1")
    const [roomSettingDlgToggle, setRoomSettingDlgToggle] = useState([false, "join"])
    const [activeRoomId, setActiveRoomId] = useState(0)

    const { selectedRoom, modalVisibility } = useSelector((state: RootStateOrAny) => ({
        selectedRoom: state.chat.selectedRoom,
        modalVisibility: state.chat.modalVisibility,
    }));

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
                (window as any).socket.emit(ACTIONS.ROOM_LIST, {});
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
            (window as any).socket.emit(ACTIONS.DUPLICATION_INVITATION, () => {
                alert("This user is already invited.");
            });
            (window as any).listen = true;
        }
    }

    const createRoomModal = () => {
        if (selectedRoom && selectedRoom.roomNo != -1) {
            setRoomSettingDlgToggle([true, "create"]);
        } else {
            alert('Please select a room to create')
        }
    }

    return (
        <Layout
            sidebarToggler={sidebarToggler}
            banner={
                <div className="grid md:flex-row-reverse lg:grid-cols-8 xl:grid-cols-9 2xl:grid-cols-5 gap-12">
                    <div className="min-w-[265px] col-span-1 lg:col-span-3 xl:col-span-2 2xl:col-span-1">
                        <div className=" flex flex-col h-full ">
                            <LiveRoomList />
                        </div>
                    </div>
                    <div className=" lg:col-span-5 xl:col-span-7 2xl:col-span-4">
                        <ExperienceBanner
                            activeRoomId={activeRoomId}
                            sidebarToggler={sidebarToggler}
                            activeRoom={activeRoom}
                            setRoomSettingDlgToggle={() => setRoomSettingDlgToggle([true, "join"])}
                        />
                    </div>
                </div>
            }
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
            {modalVisibility && (
                <CreateRoomModal />
            )}
        </Layout>
    )
}

export default ProfileIndex