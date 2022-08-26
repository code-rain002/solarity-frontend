import { useState, useEffect } from "react";
import Image from "next/image";

import PsuedoAvatarItem from "components/Experience/Common/PsuedoAvatarItem";
import { CloseIcon, UpArrow } from "components/icons";
import { LiveRoomListData, PsuedoAvatarItemData } from "data/Experience";
import RoundedTabItem from "components/Profile/RoundedTabItem";
import { PrimaryButton } from "components/Common/Buttons";
import RoomSelectionTab from "./RoomSelectionTab";
import FriendSelectionTab from "./FriendSelectionTab";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { goStep, initEvent } from "redux/slices/eventSlice";
import { apiCaller } from "utils/fetcher";

const CreateEventModal = (props) => {
    const { createEventToggle, setCreateEventToggle } = props;
    const dispatch = useDispatch();
    const { eventInfo, step, userInfo } = useSelector(
        (state: RootStateOrAny) => ({
            eventInfo: state.event.eventInfo,
            userInfo: state.profile.data,
            step: state.event.step
        })
    );

    const closeDlg = (e) => {
        if (e.target.id == "room_setting_dlg") {
            setCreateEventToggle(false);
        }
    };

    const onSetStep = (num) => {
        const payload = { stepNum: num }
        dispatch(goStep({ payload: payload }))
    }

    const onSubmit = () => {
        if (step === 0) {
            if (!eventInfo.title) {
                alert('Please input room title');
                return;
            }
            if (!eventInfo.room) {
                alert('Please select room');
                return;
            }
            const payload = { stepNum: 1 }
            dispatch(goStep({ payload: payload }))
        } else {
            const payload = {
                title: eventInfo.title,
                image: eventInfo.room.imgUrl,
                type: eventInfo.type,
                friends: eventInfo.friends,
                isPrivate: eventInfo.isPrivate,
                creator: {
                    avatar: userInfo.profileImageLink,
                    name: userInfo.username
                }
            }

            apiCaller.post("/events", payload)
                .then(response => {
                    console.log(response)
                    setCreateEventToggle(false)
                    dispatch(initEvent())
                })
        }
    }

    return (
        <div
            className={` flex justify-center md:items-center xs:items-end top-[0px] left-[0px] right-[0px] bottom-[0px] backdrop-blur-[20px] md:bg-[rgba(12,12,14,0.7)] xs:bg-globalBgColor z-[1002] fixed`}
            id="room_setting_dlg"
            onClick={(e) => closeDlg(e)}
            >
            <div
                className=" fixed md:w-[40%] xs:w-full h-[87.5%] bg-[#131314] border-[1px] border-[#1d1d1f] rounded-[20px] flex flex-col pt-[28px] px-[32px] pb-[32px] gap-[24px] overscroll-contain"
            >
                <div
                className=" absolute md:right-[-18px] md:top-[-18px] xs:right-[49%] xs:top-[-58px] cursor-pointer "
                onClick={() => setCreateEventToggle(false)}
                >
                    <CloseIcon />
                </div>

                <div className=" flex flex-row justify-between items-center ">
                    <div className=" font-['Outfit'] font-[500] text-[24px] text-[#f3f3f3] ">
                        Create Event
                    </div>
                </div>

                <div className="flex items-start p-1 border-[1.2px] border-[#272829] rounded-[40px] w-fit gap-[4px]">
                    {["Select Room", "Invite Friends"].map((i,j) => {
                        return <RoundedTabItem selectedStatus={step === j} title={i} onClick={() => onSetStep(j)} key={j} />
                    })}
                </div>

                {
                    step === 0 ? 
                        <RoomSelectionTab /> 
                        : step === 1 ? 
                            <FriendSelectionTab /> 
                            : null
                }

                <div className="self-center justify-self-end w-full z-[1002]">
                    <PrimaryButton caption={`${step === 0 ? 'Next' : 'Create'}`} bordered={false} onClick={onSubmit} disabled={false} styles="pt-[12px] pb-[16px] h-fit rounded-[15px]" /> 
                </div>
            </div>
        </div>
    )
};

export default CreateEventModal;