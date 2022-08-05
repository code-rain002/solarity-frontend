import { SolanaIcon } from "components/icons"
import { LiveRoomListData } from "data/Experience"
import LiveRoomListTitle from "./LiveRoomLilstTitle"
import LiveRoomListItem from "./LiveRoomListItem"


const LiveRoomList = () => {
    return (
        <div className=" flex flex-col items-left gap-[24px] mt-[35px] ">
            <LiveRoomListTitle number="25" />
            {
                LiveRoomListData.map((i) => {
                    return (
                        <LiveRoomListItem imgUrl={i.imgUrl} walletIcon={i.walletIcon} collectionName={i.collectionName} roomName={i.roomName} />
                    )
                })
            }
            {/* <LiveRoomListItem imgUrl="/images" walletIcon={<SolanaIcon />} collectionName="Collection Name" roomName="The V" /> */}
        </div>
    )
}

export default LiveRoomList