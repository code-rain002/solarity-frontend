import React from "react"

type RoomInfoDlgTitleType = {
    title: string
}

const RoomInfoDlgTitle = (props: RoomInfoDlgTitleType) => {
    return (
        <div className="font-['Outfit'] font-[200] text-[20px] text-[#f3f3f3] break-normal truncate ">
            {props.title}
        </div>
    )
}

export default RoomInfoDlgTitle