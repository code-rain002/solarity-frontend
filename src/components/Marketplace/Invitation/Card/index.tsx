import { GroupIcon } from 'components/icons/GroupIcon'
import React from 'react'

interface CardProps {
    icon: any;
    title: string;
    subtitle: string;
    buttonTitle: string;
    active: boolean;
    logged?: boolean;
    connecting?: boolean;
    onClick?: Function;
    setShow?: Function;
    joinToggle?: Function;
}

function Card(props: CardProps) {
    return (
        <div className='flex flex-col justify-end p-[24px] lg:w-[316px] md:w-[316px] sm:w-full xs:w-full border-[1px] border-[#272829] hover:border-primary rounded-[20px] items-center'>
            <div className='items-center'>
                {props.icon}
            </div>
            <div className='mt-[22px] mb-[7px] text-[18px] text-[#F3F3F3] font-[500] font-["outfit"]'>
                {props.title}
            </div>
            <div className='text-center mb-[16px] text-[14px] text-[#929298] font-["outfit"] font-[400]'>
                {props.subtitle}
            </div>
            <div className='w-full'>
                {props.logged ? (
                    <button
                        className={`${!props.active ? "bg-[#1F1F20] text-[#B3B3B7] hover:shadow-[0_0_20px_-5px_#29b080]" : "bg-primary text-white"} w-full rounded-[15px] py-[12px] text-[16px] font-["outfit"] font-[500]`}
                        onClick={() => props.joinToggle()}
                    >
                        {props.buttonTitle}
                    </button>
                ) : (
                    <button
                        className={`${!props.active ? "bg-[#1F1F20] text-[#B3B3B7] hover:shadow-[0_0_20px_-5px_#29b080]" : "bg-primary text-white"} w-full rounded-[15px] py-[12px] text-[16px] font-["outfit"] font-[500]`}
                        disabled={props.connecting}
                        onClick={() => props.setShow(true)}
                    >
                        {props.buttonTitle}
                    </button>
                )}
            </div>
        </div>
    )
}

export default Card