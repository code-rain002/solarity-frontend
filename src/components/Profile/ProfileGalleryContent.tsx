import GalleryAvatarPanel from "components/Common/Panels/GalleryAvatarPanel"
import { GalleryAvatarData } from "data/Profile"
import { useRouter } from "next/router"
import NoGalleryCollection from "./NoGalleryCollection"

const ProfileGalleryContent = () => {
    
    const { asPath } = useRouter()
    let uName = asPath.replace(/\/profile$/, '')
    uName = uName.replace(/\//,'')

    const content = GalleryAvatarData.map((i) => {
        return (
            <GalleryAvatarPanel imageSrc={i.imageSrc} iconUrl={i.iconUrl} title={i.title} subtitle={i.subtitle} price={i.price} onClick={() => alert("your nft")} />
        )
    })
    
    return (
        <div className="my-8 flex flex-row flex-wrap gap-[32px]">
            {uName === "no_room" ? <NoGalleryCollection text="The user has no collections" /> : content }
        </div>
    )
}

export default ProfileGalleryContent