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
        <div className="flex flex-row gap-[32px] flex-wrap my-[32px]  sm:justify-around xs:justify-center">
            {uName === "no_room" ? <NoGalleryCollection text="The user is not involved in any community" /> : content}
            {uName === "no_room" ? "" : <CommunityAvatarPanelMoreDAOs /> }
        </div>
    )
}

export default ProfileCommunitiesContent