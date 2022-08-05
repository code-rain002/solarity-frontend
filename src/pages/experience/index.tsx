import React, { useState } from "react"

import Experience from "modules/Experience"
import Layout from "components/Layout"
import ExperienceBanner from "modules/Experience/ExperienceBanner"

const ProfileIndex = () => {
    const [sidebarToggler, setSidebarToggler] = useState(false)
    
    return (
        <Layout 
            sidebarToggler={sidebarToggler} 
            banner={<ExperienceBanner sidebarToggler={sidebarToggler}/>}
            onClick={() => setSidebarToggler(!sidebarToggler)} 
        >
            <Experience sidebarToggler={sidebarToggler} />
        </Layout>
    )
}

export default ProfileIndex