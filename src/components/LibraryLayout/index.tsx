import React, { useState } from 'react'

import Header from './Header'

const LibraryLayout = ({ children }: {
    children: any,
}) => {

    const [mobileMenuToggler, setMobileMenuToggler] = useState(false)
    return (
        <div className="bg-globalBgColor flex sm:flex-row xs:flex-col w-full relative overflow-scroll">
            <div className="bg-globalBgColor flex flex-col custom-2xl:p-[30px] p-[15px] w-full">
                <Header />
                {children}
            </div>
        </div>
    )
}

export default LibraryLayout;