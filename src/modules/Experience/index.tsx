import CreateRoomButton from "components/Experience/LiveRoom/CreateRoomButton"
import React from "react"
import ExploreSection from "./ExploreSection"
import LiveRoomSection from "./LiveRoomSection"

type ExperienceType = {
    sidebarToggler : boolean,
    roomSelect : any,
    activeRoom : any,
}

const Experience = (props : ExperienceType) => {
    return (
        <div className=" flex flex-col my-[39px] ">
            <CreateRoomButton />
            <div className=" flex flex-row justify-between ">
                <LiveRoomSection activeRoom={props.activeRoom} roomSelect={props.roomSelect} />
                <ExploreSection />
            </div>
        </div>
    )
}

export default Experience