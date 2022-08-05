
import { SolanaIcon } from "components/icons"
import Image from "next/image"

type LiveRoomListItemType = {
    imgUrl : string,
    walletIcon : any,
    collectionName : string,
    roomName : string,
}

const LiveRoomListItem = (props : LiveRoomListItemType) => {
    return (
        <div className=" flex flex-row p-[8px] w-full h-[91px] border-[1.2px] border-[#272829] rounded-[15px] ">
            <div className=" w-[120px] rounded-[10px] overflow-hidden ">
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