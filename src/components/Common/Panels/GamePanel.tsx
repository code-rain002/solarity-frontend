import { LikesIcon, UsersIcon } from "assets/svgs"
import Image from "next/image"

type GamePanelProps = {
    image : string,
    title : string,
    likes : number,
    members : number
}

const GamePanel = (props : GamePanelProps) => {
    return (
        <div className="flex flex-col relative overflow-hidden cursor-pointer
                        w-full rounded-[20px] border-[1.2px] border-[#272829] hover:border-primary transition duration-300 bg-[#242424]">
            <div className="w-full "><img src={props.image} style={{ width: "100%" }} /></div>
            <div className="py-[8px] px-[20px]">
                <div className="text-[20px] text-[#F3F3F3] leading-[32px]">{props.title}</div>
                <div className="flex items-center justify-between text-[#29B080] text-[14px]">
                    <div>{props.likes}%</div>
                    <div>{props.members}</div>
                </div>
            </div>
        </div>
    )
}

export default GamePanel