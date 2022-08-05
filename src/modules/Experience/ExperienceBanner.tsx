import React from "react"
import Image from "next/image"

import RoomInfoDlg from "components/Experience/RoomInfoDlg"

const ExperienceBanner = ({sidebarToggler}) => {
    return (
        <div className="w-full relative rounded-[25px] overflow-hidden">
            <Image src="/images/experience/experience_banner.jpg" layout="responsive" width={1708} height={600}/>
            <RoomInfoDlg />
        </div>
    )
}

export default ExperienceBanner