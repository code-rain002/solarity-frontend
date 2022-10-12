import { GreyButton } from "components/Common/Buttons"

type LiveRoomListTitleType = {
    number: any
}

const LiveRoomListTitle = (props: LiveRoomListTitleType) => {
    return (
        <div className=" font-['Outfit'] font-normal text-[24px] text-[#f3f3f3] flex flex-row justify-between ">
            <div className="flex">
                Live rooms
                <div className="text-[#474749] ml-[15px] ">
                    {props.number}
                </div>
            </div>
            <GreyButton caption="Create" onClick={() => { }} />
        </div>
    )
}

export default LiveRoomListTitle