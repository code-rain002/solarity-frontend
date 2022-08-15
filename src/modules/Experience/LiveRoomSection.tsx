import LiveRoomList from "components/Experience/LiveRoom/LiveRoomList"

type LiveRoomSectionType = {
    roomSelect : any,
    activeRoom : any,
    setActiveRoomId : any,
}

const LiveRoomSection = (props : LiveRoomSectionType) => {
    return (
        <div className=" flex flex-col w-[379px] ">
            <LiveRoomList activeRoom={props.activeRoom} roomSelect={props.roomSelect} setActiveRoomId={props.setActiveRoomId}
                             />
        </div>
    )
}

export default LiveRoomSection