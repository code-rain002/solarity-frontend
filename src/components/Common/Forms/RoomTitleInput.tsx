import React from "react"
import RoomTypeDropdown from "components/Library/RoomTypeDropdown"
import { RootStateOrAny, useDispatch, useSelector } from "react-redux"
import { setNewRoomTitle } from "redux/slices/chatSlice"

const dropdown_items = ["public", "private"]

const RoomTitleInput = () => {
    const dispatch = useDispatch();
    const { newRoomTitle } = useSelector(
        (state: RootStateOrAny) => ({
            newRoomTitle: state.chat.newRoomTitle,
        })
    );
    const onChageRoomTitle = (e) => {
        dispatch(setNewRoomTitle(e.target.value))
    }

    return (
        <div className="relative w-full h-[52px] flex border-[1.2px] border-primary rounded-[15px]">
            <div className="absolute top-[-12px] left-[10px] bg-globalBgColor font-300 text-primary text-[12px] px-[5px]">
                Room Title
            </div>

            <div className="flex w-[70%] justify-center items-center">
                <input type="text" className="w-full bg-transparent font-extralight text-[#f3f3f3] text-[16px] px-[16px] border-r-[1.5px] border-r-[#272829] box-border" value={newRoomTitle} onChange={(e) => onChageRoomTitle(e)} autoFocus={true} />
            </div>
            <div className="flex w-[30%] justify-center items-center">
                <RoomTypeDropdown
                    items={dropdown_items}
                />
            </div>
        </div>
    )
}

export default RoomTitleInput