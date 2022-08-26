import React from 'react'
import Image from "next/image"

export interface RoomSettingNFTItemProps {
    collectionName: string;
    nftName: string;
    imgUrl: string;
}

const NFTItem = (props: RoomSettingNFTItemProps) => {
    return (
        <div className=" flex flex-col border-[1.2px] border-[#272829] rounded-[20px] p-[8px]
                        relative cursor-pointer hover:border-primary">
            <div className=" rounded-[15px] overflow-hidden">
                <Image src={props.imgUrl} layout="responsive" width={153} height={143} alt="room_image" />
            </div>
            <div className='flex md:flex-row xs:flex-col-reverse justify-between gap-[6px] mt-[20px]'>
                <div className='font-[500] text-[14px] ml-[12px]'>
                    <div className="font-['Outfit'] text-[#929298]">
                        {props.nftName.length >= 18 ? props.nftName.slice(0, 15) + ' ...' : props.nftName}
                    </div>
                </div>
            </div>

            <div className="absolute flex items-center justify-center top-[20px] left-[20px] m-auto w-auto gap-[12px]">
                <span className="flex items-center justify-center h-[25px] text-[12px] text-[#f3f3f3] px-2 bg-[rgba(12,12,14,0.5)] rounded-[15px]
                                border-[1.5px] border-[rgba(0,0,0,0)] hover:border-primary cursor-pointer">{props.collectionName}</span>
            </div>
        </div>
    )
}

export default NFTItem