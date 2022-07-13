import { useState } from "react"
import Dropdown from "./Dropdown"

const dropdown_items = [".sol", ".eth", ".plg",".bcn", ".bnb", ".wth"]

const YourDomainInput = () => {
    const [currentName, setCurrentName] = useState("Konstantin1982") 
    return (
        <div className="relative w-full h-[52px] flex border-[1.2px] border-primary rounded-[15px]">
            <div className="absolute top-[-12px] left-[10px] bg-globalBgColor font-400 text-primary text-[12px] px-[5px]">
                Your Domain
            </div>

            <div className="flex w-[70%] justify-center items-center">
                <input type="text" className="w-full bg-transparent font-400 text-[#f3f3f3] text-[16px] px-[16px]
                                            border-r-[1.5px] border-r-[#272829] box-border" value={currentName} onChange={(e) => setCurrentName(e.target.value) } />
            </div>
            <div className="flex w-[30%] justify-center items-center">
                <Dropdown items={dropdown_items} />
            </div>
        </div>
    )
}

export default YourDomainInput