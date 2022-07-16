import { NormalButton } from "components/Common/Buttons"
import { NoRoomIcon } from "components/icons"

const NoRoomBannerImage = () => {
    return (
        <div className="w-full h-[350px] flex flex-col justify-center items-center bg-[#181818] rounded-[25px] sm:pb-[0px] xs:pb-[50px]">
            <NoRoomIcon />
            <div className="mt-[16px] mb-[14px] font-500 text-[#b3b3b7] sm:text-[20px] xs:text-[16px] ">
                You don’t have your own rooms 
            </div>
            <div className="mb-[32px] font-400 text-[#929298] sm:text-[16px] xs:text-[14px] text-center">
            Rooms can be bought on the marketplace.<br />
            One free one is available to you.
            </div>
            <NormalButton caption="Choose a room" onClick={() => alert("Room Dialog")} styles="bg-[#29b080] px-[16px]" />
        </div>
    )
}

export default NoRoomBannerImage