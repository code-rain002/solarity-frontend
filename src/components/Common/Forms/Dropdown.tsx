import { DownArrow, UpArrow } from "components/icons"
import { useState } from "react"

type DropdownProps = {
    items : string[]
}

const ItemListBox = ({children}) => {
    return (
        <div className={`flex flex-col absolute w-[80%] top-[45px] left-[0px] text-[#f3f3f3] text-center font-400 text-[16px] text-[#f3f3f3]
                        z-[1000] p-[8px] bg-globalBgColor border-[1.5px] border-[#272829] rounded-[12px] cursor-pointer`}>
            {children}
        </div>
    )
}


const Dropdown = (props : DropdownProps) => {
    const [toggleStatus, setToggleStatus] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)

    const item_list = props.items.map((i,j) => {
        return (
            <div className={`hover:bg-[#272829] rounded-[6px] pt-[2px] pb-[6px] ${activeIndex === j ? "text-primary" : ""}`} onClick={() => setActiveIndex(j)}>{i}</div>
        )
    })
    
    return (
        <div className="relative flex justify-around w-full justify-center items-center cursor-pointer" onClick={() => setToggleStatus(!toggleStatus)}>
            <div className="font-400 text-[16px] text-[#f3f3f3]">
                {props.items[activeIndex]}
            </div>
            <div className={`pt-[5px]`}>
                {toggleStatus ? <UpArrow /> : <DownArrow />}
            </div>
            {toggleStatus ? <ItemListBox>{item_list}</ItemListBox> : ""}            
        </div>
    )
}

export default Dropdown