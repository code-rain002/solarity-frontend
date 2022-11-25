import { useRouter } from "next/router"
import LoadingScr from "components/Experience/RoomInterior/LoadingScr"
import { useState } from "react"
import RoomSettingScr from "components/Marketplace/RoomSettings"


const ActiveRoomId = () => {
    const { asPath } = useRouter()
    const roomId = asPath.replace("/marketplace/", "")
    // const load_percentage = setTimeout(() => {
    //     percentage < 100 ? setPercetage(percentage + 1) : clearTimeout(load_percentage)
    // }, 10)
    return (
        <div className={`h-full w-full `}>
            {/* <LoadingScr />
            <RoomSettingScr roomId={roomId} percentage={percentage}/> */}
        </div>
    )
}

export default ActiveRoomId