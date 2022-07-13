import { NormalButton } from "components/Common/Buttons"
import { NoRoomIcon } from "components/icons"

const NoRoomBannerImage = () => {
    return (
        <div className="w-full h-[350px] flex flex-col justify-center items-center bg-[#181818] rounded-[25px]">
            <NoRoomIcon />
            <div className="mt-[16px] mb-[14px] font-500 text-[#b3b3b7] text-[20px] ">
                You don’t have your own rooms 
            </div>
            <div className="mb-[32px] font-400 text-[#929298] text-16px text-center">
            Rooms can be bought on the marketplace.<br />
            One free one is available to you.
            </div>

            <NormalButton caption="Choose a room" onClick={() => alert("Room Dialog")} styles="bg-[#29b080] px-[16px]" />
        </div>
    )
}

export default NoRoomBannerImage