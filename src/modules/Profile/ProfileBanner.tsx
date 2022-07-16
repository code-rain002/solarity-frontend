import {useRouter} from "next/router"
import BannerImage from '../../components/Profile/BannerImage'
import BannerDescription from '../../components/Profile/BannerDescription'

const ProfileBanner = ({sidebarToggler}) => {
    const { asPath } = useRouter()
    let uName = asPath.replace(/\/profile$/, '')
    uName = uName.replace(/\//,'')
    
    return (
        <div className="w-full">
            <BannerImage uName={uName} />
            <BannerDescription sidebarToggler={sidebarToggler} uName={uName} />
        </div>
    )
}

export default ProfileBanner