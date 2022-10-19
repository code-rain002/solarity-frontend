import Image from "next/image"

type CommunityAvatarPanelProps = {
    bgSrc: string,
    fgSrc: string,
    title: string,
    members: number
}

const CommunityAvatarPanel = (props: CommunityAvatarPanelProps) => {
    return (
        <div className="flex flex-col relative justify-center items-center overflow-hidden cursor-pointer
                        w-[258px] h-[255px] rounded-[20px] border-[1.2px] border-[#272829] hover:border-primary transition duration-300">
            <div className="absolute top-0 left-0 w-full z-[999]">
                <Image src={props.bgSrc} layout="responsive" width={258} height={114} />
            </div>

            <div className="h-[88px] w-[88px] border-[3px] border-[#131314] rounded-[25px] z-[1000]">
                <Image src={props.fgSrc} layout="responsive" width={88} height={88} />
            </div>
            <div className="z-[1000] font-500 text-[18px] text-[#f3f3f3] pt-[15px]" >
                {props.title}
            </div>
            <div className="z-[1000] font-500 text-[14px] text-[#929298] flex pt-[5px]">
                <span className="pr-2">
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.10573 7.74634C6.03906 7.73967 5.95906 7.73967 5.88573 7.74634C4.29906 7.69301 3.03906 6.39301 3.03906 4.79301C3.03906 3.15967 4.35906 1.83301 5.99906 1.83301C7.6324 1.83301 8.95906 3.15967 8.95906 4.79301C8.95239 6.39301 7.6924 7.69301 6.10573 7.74634Z" stroke="#29B080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.9402 3.16699C12.2335 3.16699 13.2735 4.21366 13.2735 5.50033C13.2735 6.76033 12.2735 7.78699 11.0268 7.83366C10.9735 7.82699 10.9135 7.82699 10.8535 7.83366" stroke="#29B080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2.7725 10.207C1.15917 11.287 1.15917 13.047 2.7725 14.1203C4.60583 15.347 7.6125 15.347 9.44583 14.1203C11.0592 13.0403 11.0592 11.2803 9.44583 10.207C7.61917 8.98699 4.6125 8.98699 2.7725 10.207Z" stroke="#29B080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12.2266 13.833C12.7066 13.733 13.1599 13.5397 13.5332 13.253C14.5732 12.473 14.5732 11.1863 13.5332 10.4063C13.1666 10.1263 12.7199 9.93967 12.2466 9.83301" stroke="#29B080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
                {props.members}
                <span className="pl-2">members</span>
            </div>
        </div>
    )
}

export default CommunityAvatarPanel