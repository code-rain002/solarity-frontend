import React, { useState } from "react"

import LibraryLayout from "components/LibraryLayout"
import Library from "modules/Library"

const LibraryIndex = () => {    
    return (
        <LibraryLayout>
            <Library />
        </LibraryLayout>
    )
}

export default LibraryIndex