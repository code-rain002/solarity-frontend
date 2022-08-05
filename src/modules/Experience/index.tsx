import CreateRoomButton from "components/Experience/LiveRoom/CreateRoomButton"
import React from "react"
import ExploreSection from "./ExploreSection"
import LiveRoomSection from "./LiveRoomSection"

const Experience = ({sidebarToggler}) => {
    return (
        <div className=" flex flex-col my-[39px] ">
            <CreateRoomButton />
            <div className=" flex flex-row justify-between ">
                <LiveRoomSection />
                <ExploreSection />
            </div>
        </div>
    )
}

export default Experience