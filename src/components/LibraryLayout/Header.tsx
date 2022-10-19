import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import UserInfoMenu from 'components/Common/Forms/UserInfoMenu'
import { LogoSVGImg } from 'components/Common/Images'
import SearchGameBox from 'components/Common/Forms/SearchGameBox'

const Header = () => {
    const router = useRouter()
    const [userInfoToggle, setUserInfoToggle] = useState(false)

    return (
        <div className="flex
                        custom-2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row
                        justify-between
                        custom-2xl:h-[92px] xl:h-[92px] lg:h-[92px] md:h-[92px] sm:h-[92px] xs:h-[92px]
                        w-full">
            <div className='flex
                            custom-2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row xs:flex-col
                            h-full self-center 
                            custom-2xl:w-fit xl:w-fit lg:w-full md:w-full sm:w-full items-center'>
                <div className='h-[92px] w-[92px] flex items-center justify-center border-b-[1px] border-[#1D1F1F] md:mr-[25px] cursor-pointer'>
                    <Image src={"/images/library/logo.png"} width={40} height={40}></Image>
                </div>
                <div className='hidden md:block'>
                    <SearchGameBox />
                </div>
            </div>
            <UserInfoMenu openState={userInfoToggle} onEnter={() => setUserInfoToggle(true)} onLeave={() => setUserInfoToggle(false)} />
        </div>
    );
}

export default Header;