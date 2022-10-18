import React from 'react';
import { useDispatch } from 'react-redux';

import { SmallButton } from "components/Common/Buttons";
import { setCreateModalVisibility } from 'redux/slices/chatSlice';

type LiveRoomListTitleType = {
    number: any
}

const LiveRoomListTitle = (props: LiveRoomListTitleType) => {
    const dispatch = useDispatch();

    const createRoomModal = () => {
        dispatch(setCreateModalVisibility(true))
    }

    return (
        <div className=" font-['Outfit'] font-normal text-[24px] text-[#f3f3f3] flex flex-row justify-between ">
            <div className="flex">
                Live rooms
                <div className="text-[#474749] ml-[15px] ">
                    {props.number}
                </div>
            </div>
            <SmallButton caption="Create" onClick={createRoomModal} />
        </div>
    )
}

export default LiveRoomListTitle