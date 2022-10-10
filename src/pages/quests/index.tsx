import React, { useState } from "react"

import Quests from "modules/Quests"
import Layout from "components/Layout"
import QuestsBanner from "modules/Quests/QuestsBanner"

const QuestPage = () => {
    const [sidebarToggler, setSidebarToggler] = useState(false)

    return (
        <Layout
            sidebarToggler={sidebarToggler}
            banner={<QuestsBanner sidebarToggler={sidebarToggler} />}
            onClick={() => setSidebarToggler(!sidebarToggler)}
        >
            <Quests sidebarToggler={sidebarToggler} />
        </Layout>
    )
}

export default QuestPage