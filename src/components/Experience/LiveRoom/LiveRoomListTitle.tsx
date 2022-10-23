import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { PrimaryButton, SmallButton } from "components/Common/Buttons";
import { setCreateModalVisibility } from 'redux/slices/chatSlice';
import { checkBrowser } from 'utils';

type LiveRoomListTitleType = {
    number: any
}

const LiveRoomListTitle = (props: LiveRoomListTitleType) => {
    const dispatch = useDispatch();

    const [isMobile, setIsMobile] = useState(false);

    const createRoomModal = () => {
        dispatch(setCreateModalVisibility(true))
    }

    useEffect(() => {
        setIsMobile(checkBrowser());
    }, [])

    return (
        <div>
            <div className=" font-['Outfit'] font-normal text-[24px] text-[#f3f3f3] flex flex-row justify-between mb-3 ">
                <div className="flex">
                    Live rooms
                    <div className="text-[#474749] ml-[15px] ">
                        {props.number}
                    </div>
                </div>
                {!isMobile && (
                    <SmallButton caption="Create" onClick={createRoomModal} />
                )}
            </div>
        </div>
    )
}

export default LiveRoomListTitle