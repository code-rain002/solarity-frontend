import React from 'react'
import Image from 'next/image'



const MobileSidebarAvatar = (props) => {
    return (
        <div className="group relative border-[1px] border-[#272829]  duration-800 
                        rounded-[16px] w-[40px] h-[40px] mb-[16px] flex items-center justify-center cursor-pointer" onClick={() => (alert("DAO!"))}>
            <Image src={props.img_url} width={24} height={24} alt={props.img_url} />
        </div>
    )
}

export default MobileSidebarAvatar