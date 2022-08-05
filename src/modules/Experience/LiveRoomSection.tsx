import LiveRoomList from "components/Experience/LiveRoom/LiveRoomList"

type LiveRoomSectionType = {
    roomSelect : any,
    activeRoom : any,
}

const LiveRoomSection = (props : LiveRoomSectionType) => {
    return (
        <div className=" flex flex-col w-[379px]  ">
            <LiveRoomList activeRoom={props.activeRoom} roomSelect={props.roomSelect} />
        </div>
    )
}

export default LiveRoomSection