import { LikesIcon, TimerIcon, UsersIcon } from "assets/svgs"
import moment from "moment";
import Image from "next/image"

const LiveEventPanel = (props) => {
    const { data, onClick } = props;

    return (
        <div className="flex flex-col relative overflow-hidden cursor-pointer
                        w-full rounded-[10px] border-[1.2px] border-[#272829] hover:border-primary transition duration-300 bg-[#242424]" onClick={() => {}}>
            <div className="w-full relative">
                <Image src={data.image} width="100%" height="70%" layout="responsive" />
                <div className="absolute bottom-[10px] left-[10px] flex flex-row gap-[7px] z-10">
                    <div className="h-[20px] w-[20px] rounded-full overflow-hidden"><Image src={data.creator.avatar} width={20} height={20} layout="responsive" /></div>
                    <span className="font-medium text-[12px] text-white">{data.creator.name}</span>
                </div>
                <div className="absolute bottom-0 left-0 h-[45px] w-full bg-gradient-to-b from-transparent via-[#04110cc5] via-3/5 to-[#04110C]"></div>
            </div>
            <div className="pb-[10px] pt-[5px] px-[10px] h-full flex flex-col justify-between">
                <div className="text-[20px] text-[#F3F3F3] leading-[24px]">{data.title}</div>
                <div className="flex items-center justify-between text-[#29B080] text-[14px] mt-[10px]">
                    <div className="flex flex-row items-center">
                        {
                            data.friends.filter((user, index) => index < 3).map((user, index) => (
                                <div className={`flex flex-row ${index !== 0 ? 'ml-[-10px]' : '' }`} key={index}><Image src={user.avatar} height={20} width={20} /></div>
                            ))
                        }
                        <div className="text-white bg-[#1F1F20] h-full px-[7px] ml-[-10px] z-10 rounded-[5px] flex flex-row justify-center items-center">{ data.friends.length - 3 }+</div>
                    </div>
                    <div className="flex flex-row items-center"><TimerIcon />&nbsp;{ "50 min" }</div>
                </div>
            </div>
        </div>
    )
}

export default LiveEventPanel