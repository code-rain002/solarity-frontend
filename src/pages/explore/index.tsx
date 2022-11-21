import React, { useState } from "react"

import Explore from "modules/Explore"
import Layout from "components/Layout"
import ExploreBanner from "modules/Explore/ExploreBanner"

const ProfileIndex = () => {
    const [sidebarToggler, setSidebarToggler] = useState(false)

    return (
        <Layout
            sidebarToggler={sidebarToggler}
            banner={<ExploreBanner sidebarToggler={sidebarToggler} />}
            onClick={() => setSidebarToggler(!sidebarToggler)}
        >
            <Explore />
        </Layout>
    )
}

export default ProfileIndex