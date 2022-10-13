import { RoomTitleInput } from "components/Common/Forms"
import { RoomListData } from "data/GameLibrary"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { RootStateOrAny, useDispatch, useSelector } from "react-redux"
import { changeInfo } from "redux/slices/eventSlice"
import RoomList from "./RoomList"

const RoomSelectionTab = (props) => {
    const dispatch = useDispatch()
    const router = useRouter();
    const { eventInfo, step, selectedRoom } = useSelector(
        (state: RootStateOrAny) => ({
            eventInfo: state.event.eventInfo,
            step: state.event.step,
            selectedRoom: state.chat.selectedRoom
        })
    );
    const [activeRoom, setActiveRoom] = useState(null);

    useEffect(() => {
        setActiveRoom(eventInfo.room)
    }, [])

    useEffect(() => {
        if (activeRoom) {
            const payload = {
                value: activeRoom,
                type: "room"
            }
            dispatch(changeInfo({ payload: payload }));
        }
    }, [activeRoom])

    return (
        <div className="profile-settings-content tab-general-content h-full min-w-[330px] flex flex-col items-between gap-[32px] pt-[2px] pb-[2px] mb-[25px] overflow-y-auto overflow-x-visible items-center">
            <div className="flex w-full mt-[10px]">
                <RoomTitleInput />
            </div>
            <div className="relative h-[80%] w-full">
                <div className=" grid grid-cols-2 gap-[16px] h-[100%] overflow-y-scroll overflow-x-visible pb-[30px] overscroll-contain">
                    {RoomListData.map((item, index) => {
                        return (
                            <RoomList
                                key={index}
                                data={item}
                                setActiveRoom={setActiveRoom}
                                index={index}
                                selected={activeRoom === item}
                            />
                        );
                    })}
                </div>
                <div className=" absolute bottom-[-5px] right-[0px] h-[20px] w-full bg-gradient-to-t from-[#131314] to-transparent"></div>
            </div>
        </div>
    )
}

export default RoomSelectionTab