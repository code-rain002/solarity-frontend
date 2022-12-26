import React, { useEffect, useState } from 'react'

import Sidebar from './Sidebar'
import ChatSidebar from './ChatSidebar'
import InviteFriend from './InviteFriend'
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
    const { chatSidebarVisibility } = useSelector((state: RootStateOrAny) => ({
        chatSidebarVisibility: state.chat.chatSidebarVisibility,
    }))

    const [mobileMenuToggler, setMobileMenuToggler] = useState(false)
    const [isMobile, setIsMobile] = useState(false);
    const [isChatPanel, setIsChatPanel] = useState(true);
    const wallet = useWallet();
    useEffect(() => {
        setIsMobile(checkBrowser())
    }, [])

    return (
        <div className="bg-globalBgColor flex sm:flex-row xs:flex-col w-full relative">
            <MobileTopBar mobileMenuToggler={mobileMenuToggler} onClick={() => setMobileMenuToggler(!mobileMenuToggler)} />
            <MobileMenu searchString={searchString} setSearchString={setSearchString} mobileMenuToggler={mobileMenuToggler} onClick={() => setMobileMenuToggler(!mobileMenuToggler)} />
            <div className="bg-globalBgColor w-full pb-7">
                <Header searchString={searchString} setSearchString={setSearchString} />
                <div className='flex w-full'>
                    <div className={`fixed left-[0px] top-[112px] bottom-0 overflow-y-auto ${chatSidebarVisibility ? 'right-[435px]' : 'right-0'}`}>
                        <div className={`w-full custom-2xl:px-[${chatSidebarVisibility ? 30 : 100}px] xl:px-[25px] lg:px-[32px] md:px-[25px] sm:px-[20px] xs:px-[24px]`}>
                            {banner}
                            {children}
                        </div>
                    </div>
                    {chatSidebarVisibility && (
                        <div>
                            {isChatPanel && (
                                <ChatSidebar />
                            )}
                            {!isChatPanel && (
                                <InviteFriend setIsChatPanel={setIsChatPanel}/>
                            )}
                            <Sidebar onClick={onClick} sidebarToggler={sidebarToggler} setIsChatPanel={setIsChatPanel}/>
                        </div>
                    )}
                </div>
            </div>
            {isMobile && (
                <MobileNavbar />
            )}
        </div>
    )
}

export default Layout