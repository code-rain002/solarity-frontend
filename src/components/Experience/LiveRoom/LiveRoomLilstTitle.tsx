
type LiveRoomListTitleType = {
    number : any
}

const LiveRoomListTitle = (props : LiveRoomListTitleType) => {
    return (
        <div className=" font-['Outfit'] font-[500] text-[24px] text-[#f3f3f3] flex flex-row ">
            Live rooms
            <div className="text-[#474749] ml-[15px] ">
                {props.number}
            </div>
        </div>
    )
}

export default LiveRoomListTitle