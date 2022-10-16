
import { VolumeIcon } from "components/icons/VolumeIcon"
import { VolumeMuteIcon } from "components/icons/VolumeMuteIcon"
import Image from "next/image"
import { useState } from "react"

type UsersBoxItemType = {
    imgUrl: string,
    uName: string,
    uState: string,
    mute: boolean,
    user: any;
    toggleVolume: Function;
}

const UsersBoxItem = (props: UsersBoxItemType) => {
    return (
        <div className="flex flex-row items-center w-full h-[64px] bg-[#1d1d1e] rounded-[15px] p-[12px] justify-between
                        border-[1px] border-[rgba(0,0,0,0)] hover:border-primary">
            <div className="w-[40px] h-[40px]  rounded-[15px] overflow-hidden ">
                <Image src={props.imgUrl ? props.imgUrl : "/images/placeholder/avatars/avatar.png"} alt="avatar" layout="fixed" width={40} height={40} />
            </div>
            <div className="font-['Outfit'] font-[500] text-[16px] text-[#b3b3b7] w-[40%] truncate">
                {props.uName}
            </div>
            <div className="font-['Outfit'] font-[400] text-[14px] text-[#474749] w-[20%] ">
                {props.uState}
            </div>
            {!!props.user && (
                <div className="cursor-pointer mr-[8px] " onClick={() => props.toggleVolume(props.uName)}>
                    {props.mute ? <VolumeMuteIcon /> : <VolumeIcon />}
                </div>
            )}
        </div>
    )
}

export default UsersBoxItem