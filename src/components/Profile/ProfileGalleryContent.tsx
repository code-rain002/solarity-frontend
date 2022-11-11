import GalleryAvatarPanel from "components/Common/Panels/GalleryAvatarPanel"
import { GalleryAvatarData } from "data/Profile"
import { getNfts } from "hooks"
import { useRouter } from "next/router"
import { useEffect } from "react"
import NoGalleryCollection from "./NoGalleryCollection"

const ProfileGalleryContent = (props) => {

    const { asPath } = useRouter()
    let uName = asPath.replace(/\/profile$/, '')
    uName = uName.replace(/\//, '')
    const [nfts, nftLoading, nftError] = getNfts(props.user.username, props.user.solanaAddress);

    return (
        <div className="my-8 gap-[32px]
                        grid custom-2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center
                        ">
            {nfts.length == 0 ? (
                <NoGalleryCollection text="The user has no collections" />)
                : (
                    nfts.map(({ mintAddress: mint, name, image, collectionName }, index) => (
                        <GalleryAvatarPanel
                            key={index}
                            imageSrc={image}
                            iconUrl={"/images/wallets/ethereum-classic-(etc).png"}
                            title={collectionName}
                            subtitle={name}
                            price={1}
                            onClick={() => { }}
                        />
                    )))}
        </div>
    )
}

export default ProfileGalleryContent