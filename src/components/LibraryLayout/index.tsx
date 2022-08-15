import React, { useState } from 'react'

import Header from './Header'

const LibraryLayout = ({ children }: {
    children: any,
}) => {

    const [mobileMenuToggler, setMobileMenuToggler] = useState(false)
    return (
        <div className="bg-globalBgColor flex sm:flex-row xs:flex-col w-full relative overflow-scroll">
            <div className="bg-globalBgColor flex flex-col custom-2xl:p-[30px] px-[15px] pb-[15px] pt-0 w-full">
                <Header />
                {children}
            </div>
        </div>
    )
}

export default LibraryLayout;