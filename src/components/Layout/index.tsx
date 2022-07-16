import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import MobileTopBar from "./MobileTopBar"
import MobileMenu from "./MobileMenu"

const Layout = ({ children, banner, onClick, st }) => {

    const [mobileMenuToggler, setMobileMenuToggler] = useState(false)
    return (
        <div className="bg-globalBgColor flex sm:flex-row xs:flex-col w-full relative">
            <MobileTopBar mmt={mobileMenuToggler} onClick={() => setMobileMenuToggler(!mobileMenuToggler)} />
            <MobileMenu mmt={mobileMenuToggler} onClick={() => setMobileMenuToggler(!mobileMenuToggler)} />
            <Sidebar onClick={onClick} sidebarToggler={st} />
            <div className="bg-globalBgColor flex flex-col custom-2xl:px-[56px] xl:px-[25px] lg:px-[56px] md:px-[25px] sm:px-[20px] xs:px-[24px] w-full">
                <Header />
                {banner}
                {children}
            </div>
            
        </div>
    )
}

export default Layout