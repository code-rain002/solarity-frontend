import React from "react"

type RoomInfoDlgTitleType = {
    title : string
}

const RoomInfoDlgTitle = (props : RoomInfoDlgTitleType) => {
    return (
        <div className="font-['Outfit'] font-[500] text-[18px] text-[#f3f3f3]">
            {props.title}
        </div>
    )
}

export default RoomInfoDlgTitle