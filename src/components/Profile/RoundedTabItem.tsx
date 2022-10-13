import React from "react"

const RoundedTabItem = (props) => {
    return (
        <div className={`flex items-center pt-1 px-[10px] pb-1 ${props.selectedStatus ? 'bg-[#1f1f20]' : ''} rounded-[40px]
                        font-[200] text-[14px] text-[#f3f3f3] cursor-pointer`} onClick={props.onClick}>
            {props.title}
        </div>
    )
}

export default RoundedTabItem