import { LiveRoomListData } from "data/Experience"
import LiveRoomListTitle from "./LiveRoomLilstTitle"
import LiveRoomListItem from "./LiveRoomListItem"

type LiveRoomListType = {
    roomSelect : any,
    activeRoom : any,
    setActiveRoomId : any,
}

const LiveRoomList = (props : LiveRoomListType) => {
    let k = -1
    return (
        <div className=" flex flex-col items-left gap-[24px] mt-[35px] ">
            <LiveRoomListTitle number="25" />
            <div className="h-[690px] pr-[10px] overflow-y-scroll overflow-x-visible flex flex-col items-left gap-[24px]">
                {
                    LiveRoomListData.map((i) => {
                        k++
                        return (
                            <LiveRoomListItem imgUrl={i.imgUrl} walletIcon={i.walletIcon} collectionName={i.collectionName}
                                            roomName={i.roomName} roomSelect={props.roomSelect} lgImgUrl={i.lgImgUrl}
                                            activeRoom={props.activeRoom} currentNumberOfMembers={i.currentNumberOfMembers}
                                            setActiveRoomId={props.setActiveRoomId} roomId={k} />
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default LiveRoomList