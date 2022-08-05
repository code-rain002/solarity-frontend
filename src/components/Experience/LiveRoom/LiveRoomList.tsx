import { LiveRoomListData } from "data/Experience"
import LiveRoomListTitle from "./LiveRoomLilstTitle"
import LiveRoomListItem from "./LiveRoomListItem"

type LiveRoomListType = {
    roomSelect : any,
    activeRoom : any,
}

const LiveRoomList = (props : LiveRoomListType) => {
    return (
        <div className=" flex flex-col items-left gap-[24px] mt-[35px] ">
            <LiveRoomListTitle number="25" />
            {
                LiveRoomListData.map((i) => {
                    return (
                        <LiveRoomListItem imgUrl={i.imgUrl} walletIcon={i.walletIcon} collectionName={i.collectionName}
                                        roomName={i.roomName} roomSelect={props.roomSelect} lgImgUrl={i.lgImgUrl}
                                        activeRoom={props.activeRoom} />
                    )
                })
            }
        </div>
    )
}

export default LiveRoomList