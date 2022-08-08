import React, { useState } from "react"

import LibraryLayout from "components/LibraryLayout"
import GameDetail from "modules/Library/GameDetail"

const LibraryIndex = () => {
    return (
        <LibraryLayout>
            <GameDetail />
        </LibraryLayout>
    )
}

export default LibraryIndex