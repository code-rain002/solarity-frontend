import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

const Layout = ({ children, banner }) => {
    return (
        <div className="bg-globalBgColor flex flex-row w-full">
            <Sidebar />
            <div className="bg-globalBgColor flex flex-col px-[56px] w-full">
                <Header />
                {banner}
                {children}
            </div>
            
        </div>
    )
}

export default Layout