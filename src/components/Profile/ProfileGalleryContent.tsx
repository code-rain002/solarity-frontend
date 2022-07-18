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
        <div className="my-8 gap-[32px]
                        grid custom-2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center
                        ">
            {uName === "no_room" ? <NoGalleryCollection text="The user has no collections" /> : content }
        </div>
    )
}

export default ProfileGalleryContent