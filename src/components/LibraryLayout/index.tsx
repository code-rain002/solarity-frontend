import React, { useState } from 'react'

import Sidebar from './Sidebar'
import Header from './Header'
import MobileTopBar from "./MobileTopBar"
import MobileMenu from "./MobileMenu"

const LibraryLayout = ({ children }: {
    children: any,
}) => {

    const [mobileMenuToggler, setMobileMenuToggler] = useState(false)
    return (
        <div className="bg-globalBgColor flex sm:flex-row xs:flex-col w-full relative">
            <div className="bg-globalBgColor flex flex-col custom-2xl:p-[56px] xl:p-[30px] lg:p-[25px] md:p-[25px] sm:p-[20px] xs:p-[24px] w-full">
                <Header />
                {children}
            </div>
        </div>
    )
}

export default LibraryLayout;