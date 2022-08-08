import React from "react"

import UserAvatarSmall from "./RoomMemberAvatarSmall"
import { LiveRoomListData, RoomMemberAvatarSmallData } from "data/Experience"
import MoreUsersAvatar from "./MoreUsersAvatar"
import DummyAvatarSmall4Experience from "./DummyAvatarSmall4Experience"
import JoinRoomButton from "./JoinRoomButton"
import RoomInfoDlgTitle from "./RoomInfoDlgTitle"
import RoomInfoDlgText from "./RoomInfoDlgText"

type RoomInfoDlgType = {
    setRoomDlgToggle : any,
    activeRoomId : number,
}

const RoomInfoDlg = (props : RoomInfoDlgType) => {
    var counter = 0
    var rest = 0
    const title = "Teufzer"
    const text = "The Gods are the legacy 6666 collection within “The Frecture”. A Brand Born in Blockchain"
    return (
        <div className="absolute flex flex-col right-8 bottom-8 h-[226px] w-[394px] bg-globalBgColor rounded-[20px] pt-[28px] px-[32px] pb-[32px]">
            <RoomInfoDlgTitle title={LiveRoomListData[props.activeRoomId].roomName} />
            <RoomInfoDlgText text={text} />
            <div className="mt-[32px] flex flex-row items-center justify-between">
                <div className="flex">
                    {
                        RoomMemberAvatarSmallData[props.activeRoomId].map( function(i) {
                            counter++
                            rest = counter - 5
                            return (counter >= 6 ? false : i.imgUrl === "" ? <DummyAvatarSmall4Experience /> : <UserAvatarSmall imageUrl={i.imgUrl} />)
                        })
                    }
                    { rest < 1 ? "" : <MoreUsersAvatar rest={rest} />}
                </div>
                <JoinRoomButton setRoomDlgToggle={props.setRoomDlgToggle} />
            </div>
        </div>
    )
}

export default RoomInfoDlg