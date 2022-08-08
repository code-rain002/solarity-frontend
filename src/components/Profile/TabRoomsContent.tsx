import RoomAvatar from "components/Profile/RoomAvatar"
import { SettingsRoomsTabData } from "data/Profile"


const TabRoomsContent = () => {
    return (
        <div className="profile-settings-content tab-rooms-content h-full min-w-[330px] flex flex-col gap-[32px] mt-8  pt-[2px] pb-[2px] mb-[30px] overflow-y-auto overflow-x-visible items-center">
            {
                SettingsRoomsTabData.map((i) => {
                    return <RoomAvatar title={i.title} imgSrc={i.srcUrl} no={i.no} />
                })
            }
        </div>
    )
}

export default TabRoomsContent