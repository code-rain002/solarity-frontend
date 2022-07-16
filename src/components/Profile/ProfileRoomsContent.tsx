import RoomsAvatarPanel from "components/Common/Panels/RoomsAvatarPanel"
import { SettingsRoomsTabData } from "data/Profile"
import { useRouter } from "next/router"
import NoGalleryCollection from "./NoGalleryCollection"

const ProfileRoomsContent = () => {

    const { asPath } = useRouter()
    let uName = asPath.replace(/\/profile$/, '')
    uName = uName.replace(/\//,'')

    const content = SettingsRoomsTabData.map((i) => {
        return <RoomsAvatarPanel imageSrc={i.srcUrl} title={i.title} no={i.no} onClick={() => alert("your room")} />
    })

    return (
        <div className="flex flex-row gap-[32px] flex-wrap my-[32px]  sm:justify-around xs:justify-center">
            { uName === "no_room" ? <NoGalleryCollection text="The user has no rooms" /> : content}
        </div>
    )
}

export default ProfileRoomsContent