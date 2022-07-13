import CommunityAvatarPanel from "components/Common/Panels/CommunityAvatarPanel"
import { CommunityAvatarData } from "data/Profile"
import CommunityAvatarPanelMoreDAOs from "components/Common/Panels/CommunityAvatarPanelMoreDAOs"
const ProfileCommunitiesContent = () => {

    const content = CommunityAvatarData.map((i) => {
        return <CommunityAvatarPanel bgSrc={i.bgSrc} fgSrc={i.fgSrc} title={i.title} members={i.members} />
    })

    return (
        <div className="flex flex-row gap-[32px] flex-wrap my-[32px]">
            {content}
            <CommunityAvatarPanelMoreDAOs />
        </div>
    )
}

export default ProfileCommunitiesContent