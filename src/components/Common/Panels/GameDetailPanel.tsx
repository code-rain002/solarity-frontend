import { UsersLargeIcon, FavoriteLargeIcon, LikesLargeIcon, PlayIcon } from "assets/svgs"
import Image from "next/image"
import { Button } from "../Buttons"

const GameDetailPanel = (props) => {
    const { data, onPlay } = props

    return (
        <div className="flex flex-col relative overflow-hidden
                        w-full rounded-[20px] border-[1.2px] border-[#272829] hover:border-primary transition duration-300 bg-[#242424]">
            <div className="w-full "><img src={data.image} style={{ width: "100%" }} /></div>
            <div className="py-[10px] px-[20px]">
                <div className="text-[24px] text-[#F3F3F3] leading-[36px]">{data.title}</div>
                <div className="flex flex-row justify-between items-center text-[#929298] text-[16px] mb-[20px]">
                    <div>By: {data.owner}</div>
                    <div>Category: {data.category}</div>
                </div>
                <div className="flex items-center justify-between text-[#29B080] text-[16px] ">
                    <div className="flex flex-row items-center"><FavoriteLargeIcon />&nbsp;Save</div>
                    <div className="flex flex-row items-center"><LikesLargeIcon />&nbsp;{data.likes}%</div>
                    <div className="flex flex-row items-center"><UsersLargeIcon />&nbsp;{data.members}</div>
                </div>
                <div className="mt-[20px]">
                    <button className={`solarity-button font-medium py-[10px] rounded-[12px] mb-[15px] text-white w-[100%] text-[21px] sm:text-[18px] text-center tracking-wider  inline-flex items-center justify-center bg-primary hover:bg-lightprimary`} onClick={() => onPlay(true)}>
                        <PlayIcon />
                        <span className="ml-[20px]">Play</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GameDetailPanel