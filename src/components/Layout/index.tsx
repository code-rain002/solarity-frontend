import React, { useState } from 'react'

import Sidebar from './Sidebar'
import Header from './Header'
import MobileTopBar from "./MobileTopBar"
import MobileMenu from "./MobileMenu"

const Layout = ({ children, banner, onClick, sidebarToggler, searchString, setSearchString }: {
    children: any,
    banner?: any,
    onClick: Function,
    sidebarToggler: boolean,
    searchString?: string;
    setSearchString?: Function;
}) => {

    const [mobileMenuToggler, setMobileMenuToggler] = useState(false)
    return (
        <div className="bg-globalBgColor flex sm:flex-row xs:flex-col w-full relative">
            <MobileTopBar mobileMenuToggler={mobileMenuToggler} onClick={() => setMobileMenuToggler(!mobileMenuToggler)} />
            <MobileMenu searchString={searchString} setSearchString={setSearchString} mobileMenuToggler={mobileMenuToggler} onClick={() => setMobileMenuToggler(!mobileMenuToggler)} />
            <Sidebar onClick={onClick} sidebarToggler={sidebarToggler} />
            <div className="bg-globalBgColor flex flex-col custom-2xl:px-[56px] xl:px-[25px] lg:px-[56px] md:px-[25px] sm:px-[20px] xs:px-[24px] w-full">
                <Header searchString={searchString} setSearchString={setSearchString} />
                {banner}
                {children}
            </div>
        </div>
    )
}

export default Layout