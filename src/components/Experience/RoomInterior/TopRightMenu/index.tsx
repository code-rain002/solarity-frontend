import {useState} from "react"

import UsersIcon from "./UsersIcon"
import BackIcon from "./BackIcon"
import ChattingIcon from "./ChattingIcon"
import MicroIcon from "./MicroIcon"
import SettingIcon from "./SettingIcon"
import SpeakerIcon from "./SpeakerIcon"

type TopRightMenuType = {
    setLeftSideActive : any,
    leftSideActive : string,
}

const TopRightMenu = (props : TopRightMenuType) => {

    const [microState, setMicroState] = useState(true)
    const [speakerState, setSpeakerState] = useState(true)

    
    return (
        <div className={` absolute right-[32px] top-[32px] h-[52px] bg-[#131314] border-[1px] border-[#1d1f1f]
                        backdrop-blur-[24px] rounded-[15px] flex flex-row items-center gap-[24px] px-[24px] `}>
            <ChattingIcon setLeftSideActive={props.setLeftSideActive} leftSideActive={props.leftSideActive} />

            <UsersIcon setLeftSideActive={props.setLeftSideActive} leftSideActive={props.leftSideActive} />

            <SettingIcon setLeftSideActive={props.setLeftSideActive} leftSideActive={props.leftSideActive} />

            <div className=" h-full border-[0.5px] border-[#1d1f1f] "></div>

            <SpeakerIcon speakerState={speakerState} setSpeakerState={() => setSpeakerState(!speakerState)} />

            <MicroIcon microState={microState} setMicroState={() => setMicroState(!microState)} />

            <BackIcon />
        </div>
    )
}

export default TopRightMenu