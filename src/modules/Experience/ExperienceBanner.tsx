import React from "react"
import Image from "next/image"

import RoomInfoDlg from "components/Experience/RoomInfoDlg"

type ExperienceBannerType = {
    sidebarToggler : boolean,
    activeRoom : string
}

const ExperienceBanner = (props : ExperienceBannerType) => {
    return (
        <div className="w-full relative rounded-[25px] overflow-hidden">
            <Image src={`/images/experience/room_images/${props.activeRoom}.jpg`} layout="responsive" width={1708} height={600}/>
            <RoomInfoDlg />
        </div>
    )
}

export default ExperienceBanner