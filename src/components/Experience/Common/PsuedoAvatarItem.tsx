

import Image from "next/image"

type PsuedoAvatarItemType = {
    setActiveAvatar : any,
    itemId : number,
    activeAvatar : number,
    imgUrl : string,
    title : string,
    setActiveAvatarImg : any,
}

const PsuedoAvatarItem = (props : PsuedoAvatarItemType) => {
    return (
        <div className={` relative border-[1.2px] rounded-[15px] w-[169px] h-[169px] p-[8px] cursor-pointer
                        flex flex-row justify-center hover:border-primary select-none
                        ${props.activeAvatar === props.itemId ? "border-primary" : "border-[#272829]"} `}
                        onClick={() => {props.setActiveAvatar(props.itemId); props.setActiveAvatarImg(props.imgUrl)}}>
            <div className=" flex flex-row w-full h-full rounded-[10px] bg-[#181818] justify-center items-center p-[24px] ">
                <div className=" block w-full h-full ">
                    <Image src={props.imgUrl} layout="responsive" width={1500} height={1500} />
                </div>
            </div>
            <div className=" absolute bottom-[18px] font-['Outfit'] font-[500] text-[14px] text-[#f3f3f3]
                            w-[90%] flex flex-row justify-center
                            h-content bg-gradient-to-t from-[#181818] via-[#181818] to-transparent leading-[2rem] ">
                {props.title}
            </div>

            <div className={` top-[18px] left-[18px] ${props.activeAvatar === props.itemId ? "absolute" : "hidden" } `}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#29B080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.75 12.0019L10.58 14.8319L16.25 9.17188" stroke="#29B080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    )
}

export default PsuedoAvatarItem
