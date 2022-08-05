import ExploreRoomItem from "components/Experience/ExploreRoom/ExploreRoomItems"
import ExploreRoomTitle from "components/Experience/ExploreRoom/ExploreRoomTitle"
import { ExploreRoomData } from "data/Experience"


const ExploreSection = () => {
    return (
        <div className=" mt-[35px] ">
            <ExploreRoomTitle number="19" />
            <div className=" grid grid-cols-12 gap-[32px] ">
                {
                    ExploreRoomData.map((i) => {
                        return <ExploreRoomItem walletIcon={i.walletIcon} collectionName={i.collectionName} imgUrl={i.imgUrl} roomName={i.roomName} />
                    })
                }
            </div>
        </div>
    )
}

export default ExploreSection