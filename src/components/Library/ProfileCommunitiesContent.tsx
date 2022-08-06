import CommunityAvatarPanel from "components/Common/Panels/CommunityAvatarPanel"
import { useRouter } from "next/router"
import GameMorePanel from "components/Common/Panels/GameMorePanel"
import { GameLibraryData } from "data/GameLibrary"
import GamePanel from "components/Common/Panels/GamePanel"

const GameLibraryContent = () => {

    return (
        <div className="gap-[32px] 
                        grid custom-2xl:grid-cols-8 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 justify-items-center
                        my-[32px]">
            {
                GameLibraryData.map((item, index) => (
                    <GamePanel image={item.image} title={item.title} likes={item.likes} members={item.members} />
                ))
            }
            {/* <GameMorePanel /> */}
        </div>
    )
}

export default GameLibraryContent