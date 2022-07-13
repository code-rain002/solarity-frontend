import Image from "next/image"
type RoomAvatarProps = {
    imgSrc : string,
    title : string,
    no : number
}
const RoomAvatar = (props : RoomAvatarProps) => {
    return (
        <div className="transition duration-500 flex flex-col relative gap-[8px] w-full p-[8px] border-[1.5px] border-[#272829] hover:border-primary rounded-[20px] cursor-pointer">
            <div className="absolute top-[20px] right-[20px] flex justify-center items-center w-[24px] h-[24px] rounded-[24px] bg-[rgba(12,12,14,0.5)]
                            z-[1001] transition duration-500 border-[1px] border-transparent hover:border-primary">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.73903 2.14251L1.94856 7.02853C1.76768 7.21407 1.59263 7.57954 1.55762 7.83256L1.34173 9.65427C1.26587 10.3121 1.75601 10.7619 2.43286 10.6495L4.3117 10.3402C4.57427 10.2952 4.94187 10.1097 5.12276 9.91853L9.91323 5.03251C10.7418 4.18913 11.1152 3.22767 9.8257 2.05255C8.54202 0.888675 7.56759 1.29912 6.73903 2.14251Z" stroke="#F3F3F3" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6 3.33337C6.2104 4.7625 7.30642 5.85506 8.66667 6.00004" stroke="#F3F3F3" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <Image src={props.imgSrc} layout="responsive" width={300} height={140} />
            <div className="w-full mx-[12px] font-500 text-[14px] leading-[150%] text-[#f3f3f3]">
                {props.title}
            </div>
            <div className="w-full mx-[12px] mb-[6px] font-500 text-[14px] leading-[150%] text-[#f3f3f3]">
                #{props.no}
            </div>
        </div>
    )
}

export default RoomAvatar