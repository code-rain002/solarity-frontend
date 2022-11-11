import { useRouter } from "next/router"
import BannerImage from '../../components/Profile/BannerImage'
import BannerDescription from '../../components/Profile/BannerDescription'
import { useEffect } from "react"

const ProfileBanner = ({ user, sidebarToggler }) => {

    useEffect(() => {
        document.getElementsByTagName('html')[0].classList.remove('a-fullscreen');
    }, [])

    return (
        <div className="w-full">
            <BannerImage user={user} />
            <BannerDescription user={user} sidebarToggler={sidebarToggler} />
        </div>
    )
}

export default ProfileBanner