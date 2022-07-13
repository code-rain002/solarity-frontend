import React, {useState} from 'react'
import HeaderMenuItem from '../Common/Layout/HeaderMenuItem'
import { HeaderMenuTitles } from 'data/HeaderMenu'
import SearchBox from 'components/Common/Forms/SearchBox'
import BalanceBox from 'components/Common/Forms/HeaderBalanceBox'
import UserInfoMenu from 'components/Common/Forms/UserInfoMenu'

const Header = () => {
    const [active, setActive] = useState('Explore')

    const [balanceBoxToggle, setBalanceBoxToggle] = useState(false)

    const [userInfoToggle, setUserInfoToggle] = useState(false)

    const item_arr = HeaderMenuTitles.map(function (i){
        return <HeaderMenuItem key={i} title={i} active={active === i} onClick={() => setActive(i)} />
    })
    return (
        <div className="flex custom-2xl:flex-row xl:flex-row lg:flex-col justify-between custom-2xl:h-[92px] xl:h-[92px] lg:h-[184px]  w-full">
            <div className="flex flex-row h-full lg:justify-between">
                {item_arr}
            </div>
            <div className='flex flex-row h-full self-center justify-between 
                            custom-2xl:w-fit xl:w-fit lg:w-full'>
                <SearchBox />
                <div className="flex flex-row">
                    <BalanceBox openState={balanceBoxToggle} onEnter={() => setBalanceBoxToggle(true)} onLeave={() => setBalanceBoxToggle(false)} />
                    <UserInfoMenu openState={userInfoToggle} onEnter={() => setUserInfoToggle(true)} onLeave={() => setUserInfoToggle(false)} />
                </div>
            </div>
        </div>
    )
}

export default Header