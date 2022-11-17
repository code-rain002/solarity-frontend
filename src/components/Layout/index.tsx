import React, { useEffect, useState } from 'react'

import Sidebar from './Sidebar'
import Header from './Header'
import MobileTopBar from "./MobileTopBar"
import MobileMenu from "./MobileMenu"
import MobileNavbar from "./MobileNavbar"
import { checkBrowser } from 'utils'
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import GameModal from 'components/Community/GameModal'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { setGameModalVisibility } from 'redux/slices/commonSlice'

const Layout = ({ children, banner, onClick, sidebarToggler, searchString, setSearchString }: {
    children: any,
    banner?: any,
    onClick: Function,
    sidebarToggler: boolean,
    searchString?: string;
    setSearchString?: Function;
}) => {

    const [mobileMenuToggler, setMobileMenuToggler] = useState(false)
    const [isMobile, setIsMobile] = useState(false);
    const wallet = useWallet();
    useEffect(() => {
        setIsMobile(checkBrowser())
    }, [])

    return (
        <div className="bg-globalBgColor flex sm:flex-row xs:flex-col w-full relative">
            <MobileTopBar mobileMenuToggler={mobileMenuToggler} onClick={() => setMobileMenuToggler(!mobileMenuToggler)} />
            <MobileMenu searchString={searchString} setSearchString={setSearchString} mobileMenuToggler={mobileMenuToggler} onClick={() => setMobileMenuToggler(!mobileMenuToggler)} />
            <Sidebar onClick={onClick} sidebarToggler={sidebarToggler} />
            <div className="bg-globalBgColor flex flex-col custom-2xl:px-[56px] xl:px-[25px] lg:px-[56px] md:px-[25px] sm:px-[20px] xs:px-[24px] w-full pb-7">
                <Header searchString={searchString} setSearchString={setSearchString} />
                {banner}
                {children}
            </div>
            {isMobile && (
                <MobileNavbar />
            )}
            {/* {!wallet.connected && <div className=''><WalletMultiButton /></div>} */}
        </div>
    )
}

export default Layout