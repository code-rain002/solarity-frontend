import { useRouter } from "next/router"
import Image from "next/image"
import LoadingScr from "components/Experience/RoomInterior/LoadingScr"
import { useState } from "react"
import MainScr from "components/Experience/RoomInterior/MainScr"


const ActiveRoomId = () => {
    const [percentage, setPercetage] = useState(0)
    const { asPath } = useRouter()
    const roomId = asPath.replace("/experience/","")
    const load_percentage = setTimeout(() => {
        percentage < 100 ? setPercetage(percentage + 1) : clearTimeout(load_percentage)
    }, 10)
    return (
        <div className={` h-full w-full `}>
            <LoadingScr roomId={roomId} percentage={percentage} />
            <MainScr roomId={roomId} percentage={percentage}/>
        </div>
    )
}

export default ActiveRoomId