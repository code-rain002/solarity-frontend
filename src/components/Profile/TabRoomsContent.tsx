import RoomAvatar from "components/Profile/RoomAvatar"
import { SettingsRoomsTabData } from "data/Profile"
import { useEffect, useState } from "react"
import { RootStateOrAny, useSelector } from "react-redux"

type TabRoomsContentType = {
    onClose: Function;
}

const TabRoomsContent = (props: TabRoomsContentType) => {
    const { profile } = useSelector((state: RootStateOrAny) => ({
        profile: state.profile.data,
    }))

    const [ownRooms, setOwnRooms] = useState([]);

    useEffect(() => {
        var rooms = [];
        if (!!profile.rooms) {
            for (var i = 0; i < profile.rooms.length; i++) {
                rooms.push({
                    srcUrl: profile.rooms[i].imageUrl,
                    title: profile.rooms[i].title,
                    no: profile.rooms[i].roomNo,
                })
            }
            setOwnRooms(rooms);
        }
    }, [!!profile && profile.rooms])
    return (
        <div className="profile-settings-content tab-rooms-content h-full min-w-[330px] flex flex-col gap-[32px] mt-8  pt-[2px] pb-[2px] mb-[30px] overflow-y-auto overflow-x-visible items-center">
            {
                ownRooms.map((i) => {
                    return <RoomAvatar title={i.title} imgSrc={i.srcUrl} no={i.no} onClose={props.onClose} />
                })
            }
        </div>
    )
}

export default TabRoomsContent