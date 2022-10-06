import React, { useState } from "react"

import Experience from "modules/Experience"
import Layout from "components/Layout"
import ExperienceBanner from "modules/Experience/ExperienceBanner"
import RoomSettingDlg from "components/Experience/Common/RoomSettingDlg"

const ProfileIndex = () => {
    const [sidebarToggler, setSidebarToggler] = useState(false)
    const [activeRoom, setActiveRoom] = useState("room_1")
    const [roomSettingDlgToggle, setRoomSettingDlgToggle] = useState([false, "join"])
    const [activeRoomId, setActiveRoomId] = useState(0)

    return (
        <Layout
            sidebarToggler={sidebarToggler}
            banner={<ExperienceBanner
                activeRoomId={activeRoomId}
                sidebarToggler={sidebarToggler}
                activeRoom={activeRoom}
                setRoomSettingDlgToggle={() => setRoomSettingDlgToggle([true, "join"])}
            />}
            onClick={() => setSidebarToggler(!sidebarToggler)}
        >
            <Experience
                sidebarToggler={sidebarToggler}
                activeRoom={activeRoom}
                roomSelect={(arg) => setActiveRoom(arg)}
                setActiveRoomId={(i) => setActiveRoomId(i)}
                activeRoomId={activeRoomId}
                roomSettingDlgToggle={roomSettingDlgToggle}
                setRoomSettingDlgToggle={() => setRoomSettingDlgToggle([true, "create"])}
            />
            {
                roomSettingDlgToggle[0] && (
                    <RoomSettingDlg activeRoomId={activeRoomId} roomSettingDlgToggle={roomSettingDlgToggle} setRoomSettingDlgToggle={setRoomSettingDlgToggle} />
                )
            }
        </Layout>
    )
}

export default ProfileIndex