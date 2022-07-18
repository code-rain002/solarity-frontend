import CommunityAvatarPanel from "components/Common/Panels/CommunityAvatarPanel"
import { CommunityAvatarData } from "data/Profile"
import CommunityAvatarPanelMoreDAOs from "components/Common/Panels/CommunityAvatarPanelMoreDAOs"
import NoGalleryCollection from "./NoGalleryCollection"
import { useRouter } from "next/router"
const ProfileCommunitiesContent = () => {

    const { asPath } = useRouter()
    let uName = asPath.replace(/\/profile$/, '')
    uName = uName.replace(/\//,'')

    const content = CommunityAvatarData.map((i) => {
        return <CommunityAvatarPanel bgSrc={i.bgSrc} fgSrc={i.fgSrc} title={i.title} members={i.members} />
    })

    return (
        <div className="gap-[32px] 
                        grid custom-2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center
                        my-[32px]">
            {uName === "no_room" ? <NoGalleryCollection text="The user is not involved in any community" /> : content}
            {uName === "no_room" ? "" : <CommunityAvatarPanelMoreDAOs /> }
        </div>
    )
}

export default ProfileCommunitiesContent