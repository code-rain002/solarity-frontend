import React from "react"

type JoinRoomButtonType = {
    setRoomDlgToggle : any,
}

const JoinRoomButton = (props : JoinRoomButtonType) => {
    return (
        <div className=" flex flex-row justify-center items-center bg-[#29b080] rounded-[15px] h-[52px] w-[104px]
                        text-white font-['Outfit'] font-[500] text-[16px] text-[#f3f3f3] cursor-pointer
                        hover:shadow-[0_0_20px_-5px_#29b080] " onClick={props.setRoomDlgToggle}>
            Join room
        </div>
    )
}

export default JoinRoomButton