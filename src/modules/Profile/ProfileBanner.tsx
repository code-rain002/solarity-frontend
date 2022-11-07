import { useRouter } from "next/router"
import BannerImage from '../../components/Profile/BannerImage'
import BannerDescription from '../../components/Profile/BannerDescription'

const ProfileBanner = ({ user, sidebarToggler }) => {

    return (
        <div className="w-full">
            <BannerImage user={user} />
            <BannerDescription user={user} sidebarToggler={sidebarToggler} />
        </div>
    )
}

export default ProfileBanner