import RoomAvatar from "components/Profile/RoomAvatar"
import { SettingsRoomsTabData } from "data/Profile"

const rooms = SettingsRoomsTabData.map((i) => {
    return <RoomAvatar title={i.title} imgSrc={i.srcUrl} no={i.no} />
})

const TabRoomsContent = () => {
    return (
        <div className="profile-settings-content h-full min-w-[330px] flex flex-col gap-[32px] mt-8  pt-[2px] pb-[2px] mb-[30px] overflow-y-auto overflow-x-visible items-center">
            {rooms}
        </div>
    )
}

export default TabRoomsContent