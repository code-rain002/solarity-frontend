import React, { useState } from "react"
import Layout from "components/Layout"
import Profile from "modules/Profile"
import ProfileBanner from "modules/Profile/ProfileBanner"

const ProfileIndex = () => {
    const [sidebarToggler, setSidebarToggler] = useState(false)
    
    // if(props.user)
    return (
        <Layout st={sidebarToggler} onClick={() => (setSidebarToggler(!sidebarToggler))} banner={<ProfileBanner sidebarToggler={sidebarToggler}/>}>
            <Profile st={sidebarToggler} />
        </Layout>
    )
}

export default ProfileIndex