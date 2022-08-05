
import { SolanaIcon } from "components/icons"
import Image from "next/image"

type LiveRoomListItemType = {
    imgUrl : string,
    walletIcon : any,
    collectionName : string,
    roomName : string,
    roomSelect : any,
    lgImgUrl : string,
    activeRoom : any,
}

const onItemClick = (arg) => {
    arg.roomSelect(arg.lgImgUrl)

    const distance = document.documentElement.scrollTop
    const accelerationDistance = distance * 0.3

    const myInterval = setInterval(() => {
        document.documentElement.scrollTop > 0 ? document.documentElement.scrollTop -= 80 : clearInterval(myInterval)
    }, 10)
}
const LiveRoomListItem = (props : LiveRoomListItemType) => {
    return (
        <div className={` flex flex-row p-[8px] w-full h-[91px] border-[1.2px] rounded-[15px]
                        cursor-pointer hover:border-[#29b080] ${props.activeRoom == props.lgImgUrl ? "border-primary" : "border-[#272829]" } `}
                        onClick={() => onItemClick(props)}>
            <div className=" min-w-[120px] rounded-[10px] overflow-hidden ">
                <Image src={props.imgUrl} alt="room_img" layout="fixed" width={120} height={75} />
            </div>
            <div className=" flex flex-col ml-[16px]  ">
                <div className=" flex flex-row gap-[15px] ">
                    {props.walletIcon}
                    <div className=" font-['Outfit'] font-[400] text-[12px] text-[#929298] ">
                        {props.collectionName}
                    </div>
                </div>
                <div className=" font-['Outfit'] font-[500] text-[14px] text-[#f3f3f3] ">
                    {props.roomName}
                </div>
            </div>
        </div>
    )
}

export default LiveRoomListItem