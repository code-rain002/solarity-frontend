import React, { useState } from "react"

import Profile from "modules/Profile"
import Layout from "components/Layout"
import ProfileBanner from "modules/Profile/ProfileBanner"

const ProfileIndex = () => {
    const [sidebarToggler, setSidebarToggler] = useState(false)
    
    return (
        <Layout 
            sidebarToggler={sidebarToggler} 
            banner={<ProfileBanner sidebarToggler={sidebarToggler}/>}
            onClick={() => setSidebarToggler(!sidebarToggler)} 
        >
            <Profile sidebarToggler={sidebarToggler} />
        </Layout>
    )
}

export default ProfileIndex