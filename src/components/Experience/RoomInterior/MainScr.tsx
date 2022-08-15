import { useState } from "react"
import Image from "next/image"

import BackButton from "./BackButton"
import ChattingBox from "./ChattingBox"
import TopRightMenu from "./TopRightMenu"
import UsersBox from "./UsersBox"
import SettingBox from "./RoomSettingBox"

type MainScrTyp = {
    roomId : string,
    percentage : number,
}

const MainScr = (props : MainScrTyp) => {
    const [leftSideActive, setLeftSideActive] = useState("")

    return (
        <div className={` ${props.percentage == 100 ? "flex" : "hidden"} h-full w-full `}>
            <Image src={`/images/experience/room_images/room_${parseInt(props.roomId) + 1}.jpg`} layout="fill" />
            <BackButton />
            <TopRightMenu setLeftSideActive={(any) => setLeftSideActive(any)} leftSideActive={leftSideActive}/>
            <ChattingBox setLeftSideActive={(any) => setLeftSideActive(any)} leftSideActive={leftSideActive}/>
            <UsersBox setLeftSideActive={(any) => setLeftSideActive(any)} leftSideActive={leftSideActive}/>
            <SettingBox setLeftSideActive={(any) => setLeftSideActive(any)} leftSideActive={leftSideActive}/>
        </div>
    )
}


export default MainScr