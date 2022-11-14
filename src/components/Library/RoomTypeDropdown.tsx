import { DownArrow, UpArrow } from "components/icons"
import React, { useState } from "react"
import { RootStateOrAny, useDispatch, useSelector } from "react-redux"
import { setActiveRoomTypeIndex } from "redux/slices/chatSlice"

const RoomTypeDropdown = (props) => {
    const { items } = props;

    const dispatch = useDispatch();
    const { activeRoomTypeIndex } = useSelector(
        (state: RootStateOrAny) => ({
            activeRoomTypeIndex: state.chat.activeRoomTypeIndex
        })
    );

    const [toggleStatus, setToggleStatus] = useState(false);

    return (
        <div className="relative flex justify-around w-full items-center cursor-pointer" onClick={() => setToggleStatus(!toggleStatus)}>
            <div className="font-extralight text-[16px] text-[#f3f3f3]">
                {items[activeRoomTypeIndex]}
            </div>
            <div className={`pt-[5px]`}>
                {toggleStatus ? <UpArrow /> : <DownArrow />}
            </div>
            {
                toggleStatus ?
                    <div className={`flex flex-col absolute w-[80%] top-[45px] left-[0px] text-center font-400 text-[16px] text-[#f3f3f3] z-[1000] p-[8px] bg-globalBgColor border-[1.5px] border-[#272829] rounded-[12px] cursor-pointer`}>
                        {items.map((item, index) => (
                            <div
                                className={`hover:bg-[#272829] rounded-[6px] pt-[2px] pb-[6px] ${activeRoomTypeIndex === index ? "text-primary" : ""}`}
                                onClick={() => dispatch(setActiveRoomTypeIndex(index))}
                                key={index}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                    : ""
            }
        </div>
    )
}

export default RoomTypeDropdown