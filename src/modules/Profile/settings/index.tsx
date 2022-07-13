import React from "react"

import SettingsModal from "./SettingsModal"

const ShowSettingsModal = (props) => {
    if (props.toggleShow === false) return <div className="hidden"></div>
    return (
        <div className="fixed left-0 top-0 right-0 bottom-0 bg-[rgba(12,12,14,0.7)] flex items-center justify-center
                        z-[1001]">
            <SettingsModal onClose={props.onClose} />
        </div>
    )
}

export default ShowSettingsModal