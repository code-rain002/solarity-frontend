import React, {useState} from "react";

const SearchBox = () => {
    const [typing, setTyping] = useState(false)

    return (
        <div className="flex h-full items-center custom-2xl:mr-[20px] xl:mr-[10px] custom-2xl:w-[346px] xl:w-[200px] relative">
            <input type="search" placeholder="Search" className={`bg-globalBgColor  border-[1.2px] rounded-[15px] focus:border-primary
                                                                px-[16px] py-[11px] text-[#929298] w-full ${typing ? 'border-primary' : 'border-[#272829]'}`} onChange={(e) => { e.target.value !== '' ? setTyping(true) : setTyping(false)}}/>
            <div className={`absolute right-[20px] ${typing ? 'hidden' : 'block'}`} >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 16C11.866 16 15 12.866 15 9C15 5.13401 11.866 2 8 2C4.13401 2 1 5.13401 1 9C1 12.866 4.13401 16 8 16Z" stroke="#474749" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17 17L15 15" stroke="#474749" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    )
}

export default SearchBox