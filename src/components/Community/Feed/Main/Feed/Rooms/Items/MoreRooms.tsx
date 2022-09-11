import React from 'react'
import Image from 'next/image'

function MoreRooms() {
    return (
        <div className="flex flex-col relative justify-center items-center overflow-hidden cursor-pointer
                        rounded-[20px] border-[1.2px] border-[#272829] hover:border-primary transition duration-500">
            <div className="h-1/3 w-1/3 z-[1000]">
                <Image src="/images/profile/temp/more_daos_icon.png" layout="responsive" width={100} height={100} />
            </div>
            <div className="z-[1000] font-500 lg:text-[24px] md:text-[24px] text-[#29b080] pt-[40px] sm:text-[16px] xs:text-[16px]" >
                View more rooms
            </div>

        </div>
    )
}

export default MoreRooms