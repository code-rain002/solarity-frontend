import React, { useState } from "react"

import LibraryLayout from "components/LibraryLayout"
import Library from "modules/Library"
import Layout from "components/Layout"

const LibraryIndex = () => {    
    const [sidebarToggler, setSidebarToggler] = useState(false)
    const [gameLibraryPageFlag, setGameLibraryPageFlag] = useState(0);
    const [selectedGame, setSelectedGame] = useState(null);
    const [createEventToggle, setCreateEventToggle] = useState(false);

    return (
        <Layout
            sidebarToggler={sidebarToggler}
            onClick={() => setSidebarToggler(!sidebarToggler)}
        >
            <Library
                setPage={setGameLibraryPageFlag} 
                selectGame={setSelectedGame} 
                createEventToggle={createEventToggle}
                setCreateEventToggle={setCreateEventToggle}
            />
        </Layout>
    )
}

export default LibraryIndex