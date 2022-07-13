import React from 'react'
import Image from 'next/image'
const CommonDAOavatar = (props) => {
    return (
        <div className="border-[1px] border-[#272829] hover:border-[#29B080] hover:shadow-[0_0_5px_4px_rgba(41,176,128,0.1)] duration-300 
                        rounded-[20px] w-[48px] h-[48px] mb-[16px] flex items-center justify-center cursor-pointer" onClick={() => (alert("DAO!"))}>
            <Image src={props.img_url} width={32} height={32} alt={props.img_url} />
        </div>
    )
}

export default CommonDAOavatar