import React from "react";

type MobileHeaderMenuItemProps = {
    title : string,
    active : boolean,
    onClick : any
}

const MobileHeaderMenuItem = (props : MobileHeaderMenuItemProps) => {
    return (
        <div className={`flex flex-row text-[18px]
                         ml-10 font-500 justify-start items-center ${props.active ? 'text-[#29B080]' :'text-[#929298]'} h-[56px] cursor-pointer select-none`} onClick={props.onClick}>
            <div className={`absolute left-[0] ${props.active ? 'block' : 'hidden'}`}>
                <svg width="6" height="57" viewBox="0 0 6 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0.5L4.1967 15.3997C5.39322 19.6477 6 24.0401 6 28.4534C6 32.8407 5.40037 37.2073 4.21776 41.4321L0 56.5L0 0.5Z" fill="#29B080"/>
                </svg>
            </div>
            {props.title}
        </div>
    )
}

export default MobileHeaderMenuItem