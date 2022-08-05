import React, { useState } from "react"

import Experience from "modules/Experience"
import Layout from "components/Layout"
import ExperienceBanner from "modules/Experience/ExperienceBanner"

const ProfileIndex = () => {
    const [sidebarToggler, setSidebarToggler] = useState(false)
    const [activeRoom, setActiveRoom] = useState("room_1")

    return (
        <Layout 
            sidebarToggler={sidebarToggler} 
            banner={<ExperienceBanner sidebarToggler={sidebarToggler} activeRoom={activeRoom}  />}
            onClick={() => setSidebarToggler(!sidebarToggler)} 
        >
            <Experience sidebarToggler={sidebarToggler} activeRoom={activeRoom} roomSelect={(arg) => setActiveRoom(arg)} />
        </Layout>
    )
}

export default ProfileIndex