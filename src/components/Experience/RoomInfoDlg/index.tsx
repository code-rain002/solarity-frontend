import React from "react"

import UserAvatarSmall from "./RoomMemberAvatarSmall"
import { RoomMemberAvatarSmallData } from "data/Experience"
import MoreUsersAvatar from "./MoreUsersAvatar"
import DummyAvatarSmall4Experience from "./DummyAvatarSmall4Experience"
import JoinRoomButton from "./JoinRoomButton"
import RoomInfoDlgTitle from "./RoomInfoDlgTitle"
import RoomInfoDlgText from "./RoomInfoDlgText"

const RoomInfoDlg = () => {
    var counter = 0
    var rest = 0
    const title = "Teufzer"
    const text = "The Gods are the legacy 6666 collection within “The Frecture”. A Brand Born in Blockchain"
    return (
        <div className="absolute flex flex-col right-8 bottom-8 h-[226px] w-[394px] bg-globalBgColor rounded-[20px] pt-[28px] px-[32px] pb-[32px]">
            <RoomInfoDlgTitle title={title} />
            <RoomInfoDlgText text={text} />
            <div className="mt-[32px] flex flex-row items-center justify-between">
                <div className="flex">
                    {
                        RoomMemberAvatarSmallData.map( function(i) {
                            counter++
                            rest = counter - 5
                            return (counter >= 6 ? false : i.imgUrl === "" ? <DummyAvatarSmall4Experience /> : <UserAvatarSmall imageUrl={i.imgUrl} />)
                        })
                    }
                    <MoreUsersAvatar rest={rest} />
                </div>
                <JoinRoomButton />
            </div>
        </div>
    )
}

export default RoomInfoDlg