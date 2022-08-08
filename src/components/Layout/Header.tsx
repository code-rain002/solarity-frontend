import React, {useState} from 'react'
import { useRouter } from 'next/router'
import HeaderMenuItem from '../Common/Layout/HeaderMenuItem'
import { HeaderMenuTitles } from 'data/HeaderMenu'
import SearchBox from 'components/Common/Forms/SearchBox'
import BalanceBox from 'components/Common/Forms/HeaderBalanceBox'
import UserInfoMenu from 'components/Common/Forms/UserInfoMenu'
import LibraryLayout from 'components/LibraryLayout'
import { CloseIcon } from 'components/icons'
import Library from 'modules/Library'
import GameDetail from 'modules/Library/GameDetail'

const Header = () => {

    const [balanceBoxToggle, setBalanceBoxToggle] = useState(false)

    const [userInfoToggle, setUserInfoToggle] = useState(false)
    const [gameLibraryToggle, setGameLibraryToggle] = useState(false);
    const [gameLibraryPageFlag, setGameLibraryPageFlag] = useState(0);

    const { asPath } = useRouter()
    const pathSegments = asPath.split("/")
    const currentPath = pathSegments[pathSegments.length - 1]

    const [active, setActive] = useState(currentPath)

    const item_arr = HeaderMenuTitles.map(function (i){
        return <HeaderMenuItem key={i} title={i} active={active === i.toLowerCase()} onClick={i === "Library" ? () => setGameLibraryToggle(true) : () => setActive(i.toLowerCase())} setToggle={setGameLibraryToggle} />
    })
    return (
        <>
            <div className="sm:flex xs:hidden
                            custom-2xl:flex-row xl:flex-row lg:flex-col md:flex-col sm:flex-col
                            justify-between
                            custom-2xl:h-[92px] xl:h-[92px] lg:h-[184px] md:h-[220px] sm:h-[220px] xs:h-[220px]
                            w-full">
                <div className="flex flex-row h-full
                                lg:justify-between md:justify-around sm:justify-between xs:justify-between">
                    {item_arr}
                </div>
                <div className='flex
                                custom-2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col
                                h-full self-center justify-between 
                                custom-2xl:w-fit xl:w-fit lg:w-full md:w-full sm:w-full xs:'>
                    <SearchBox />
                    <div className="flex flex-row
                                    md:justify-end sm:justify-end
                                    md:my-[20px] sm:my-[20px]">
                        <BalanceBox openState={balanceBoxToggle} onEnter={() => setBalanceBoxToggle(true)} onLeave={() => setBalanceBoxToggle(false)} />
                        <UserInfoMenu openState={userInfoToggle} onEnter={() => setUserInfoToggle(true)} onLeave={() => setUserInfoToggle(false)} />
                    </div>
                </div>
            </div>
            {
                gameLibraryToggle ?
                <div className='fixed left-0 top-0 right-0 bottom-0 bg-[rgba(12,12,14,0.7)] flex items-center justify-center z-[1001]'>
                    <div className="modal-content w-[85vw] h-[80vh] flex flex-col relative p-[10px] bg-globalBgColor border-[1px] border-[#1d1f1f] rounded-[25px] select-none">
                        <LibraryLayout>
                            {
                                gameLibraryPageFlag === 0 ?
                                <Library setPage={setGameLibraryPageFlag} />
                                :
                                <GameDetail setPage={setGameLibraryPageFlag} />
                            }
                        </LibraryLayout>
                        <div className="absolute top-[-27px] right-[-20px] cursor-pointer" onClick={() => setGameLibraryToggle(false)}>
                            <CloseIcon />
                        </div>
                    </div>
                </div>
                : null
            }
        </>
    )
}

export default Header