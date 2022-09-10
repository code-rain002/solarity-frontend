import React, { useState } from "react"

import Community from "modules/Community"
import Layout from "components/Layout"
import CommunityBanner from "modules/Community/CommunityBanner"

const ProfileIndex = () => {
    const [sidebarToggler, setSidebarToggler] = useState(false)
    
    return (
        <Layout 
            sidebarToggler={sidebarToggler} 
            banner={<></>}
            onClick={() => setSidebarToggler(!sidebarToggler)} 
        >
            <Community sidebarToggler={sidebarToggler} />
        </Layout>
    )
}

export default ProfileIndex