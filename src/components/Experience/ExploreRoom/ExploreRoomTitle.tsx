
type ExploreRoomTitleType = {
    number: any
}

const ExploreRoomTitle = (props: ExploreRoomTitleType) => {
    return (
        <div className=" font-['Outfit'] font-[500] text-[24px] text-[#f3f3f3] flex flex-row mb-[22px]">
            Top Rooms
            <div className="text-[#474749] ml-[15px] ">
                {props.number}
            </div>
        </div>
    )
}

export default ExploreRoomTitle