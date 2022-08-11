import React from "react"
import Image from "next/image"


type RoomMemberAvatarSmallType = {
    imageUrl : string
} 

const RoomMemberAvatarSmall = (props : RoomMemberAvatarSmallType) => {
    return (
        <div className={`border-[3px] border-[#131314] rounded-[18px] h-[40px] w-[40px] box-content ml-[-17px] relative overflow-hidden`}>
            <Image src={props.imageUrl} layout="responsive" width={40} height={40} />
        </div>
    )
}

export default RoomMemberAvatarSmall