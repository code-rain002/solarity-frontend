import React, { useState } from "react"

import GameDetail from "modules/Library/GameDetail"
import Layout from "components/Layout"

const LibraryIndex = () => {
    const [sidebarToggler, setSidebarToggler] = useState(false);
    
    return (
        <Layout
            sidebarToggler={sidebarToggler}
            onClick={() => setSidebarToggler(!sidebarToggler)}
        >
            <GameDetail />
        </Layout>
    )
}

export default LibraryIndex