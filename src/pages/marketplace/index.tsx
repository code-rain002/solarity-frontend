import React, { useState } from "react"

import Marketplace from "modules/Marketplace"
import Layout from "components/Layout"
import MarketplaceBanner from "modules/Marketplace/MarketplaceBanner"

const ProfileIndex = () => {
    const [sidebarToggler, setSidebarToggler] = useState(false)
    
    return (
        <Layout 
            sidebarToggler={sidebarToggler} 
            banner={<MarketplaceBanner sidebarToggler={sidebarToggler}/>}
            onClick={() => setSidebarToggler(!sidebarToggler)} 
        >
            <Marketplace sidebarToggler={sidebarToggler} />
        </Layout>
    )
}

export default ProfileIndex