import { useEffect, useState } from "react";
import Image from "next/image";

import { FriendsData } from "data/GameLibrary";
import useWindowDimensions from "utils/layout";
import FriendAvatarItem from "./FriendAvatarItem";
import SearchFriendBox from "components/Common/Forms/SearchFriendBox";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { changeInfo } from "redux/slices/eventSlice";

const FriendSelectionTab = () => {
    const dispatch = useDispatch();
    const { eventInfo, step } = useSelector(
        (state: RootStateOrAny) => ({
            eventInfo: state.event.eventInfo,
            step: state.event.step
        })
    );
    const { height, width } = useWindowDimensions();
    const [selectedAvatars, setSelectedAvatars] = useState([]);

    useEffect(() => {
        setSelectedAvatars(eventInfo.friends)
    }, [])

    useEffect(() => {
        const payload = {
            value: selectedAvatars,
            type: "friends"
        }
        dispatch(changeInfo({ payload: payload }))
    }, [selectedAvatars])

    return (
        <div className="profile-settings-content tab-rooms-content h-full min-w-[330px] flex flex-col gap-[32px] pt-[2px] pb-[2px] mb-[30px] overflow-y-auto overflow-x-visible items-center">
            
            <SearchFriendBox
                selectedAvatars={selectedAvatars}
                setSelectedAvatars={setSelectedAvatars}
            />
            {/* begin of avatar list------------------------------------------------------------------------------------------------ */}
            <div className="relative h-[80%] w-full">
                <div
                    className=" grid grid-cols-3 gap-[16px] h-[100%] overflow-y-scroll overflow-x-visible pb-[30px] overscroll-contain"
                >
                    {FriendsData.map((item, index) => {
                        return (
                            <FriendAvatarItem
                                key={index}
                                friendData={item}
                                selected={selectedAvatars.findIndex((i, j) => i.name === item.name) >= 0 ? true : false}
                                setSelectedAvatars={setSelectedAvatars}
                                selectedAvatars={selectedAvatars}
                            />
                        );
                    })}
                </div>
                <div className=" absolute bottom-[-5px] right-[0px] h-[20px] w-full bg-gradient-to-t from-[#131314] to-transparent"></div>
            </div>
        </div>
    )
}

export default FriendSelectionTab