import  { UsersProfileData }  from '../../data/Profile'

import Konstantin_avatar from "../../assets/images/temp/Avatar_Konstantin1982.png"
import Konstantin_banner from "../../assets/images/temp/Profile_banner_Konstantin1982.webp"
import Verified_badge from "../../assets/images/temp/Verified.png"

import Image from 'next/image'

let uName : string

const BannerImage = ({ uName }) => {
    
            
            return (
                <div className="w-full relative">
                    <Image src={"/images/profile/Profile_banner_Konstantin1982.webp"} width={1708} height={450} alt="Banner Image" />
                    <div className="absolute bottom-[-32px]">
                        <Image src={Konstantin_avatar} layout="fixed" alt="user avatar"/>
                        <div className="absolute right-[4px] bottom-[4px]">
                            <Image src={Verified_badge} layout="fixed" alt="verified badge" />
                        </div>
                    </div>
                </div>
            )
}

export default BannerImage