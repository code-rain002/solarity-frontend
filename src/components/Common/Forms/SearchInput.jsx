import React, { useState } from "react";

const SearchInput = (props) => {
    const [typing, setTyping] = useState(false)

    return (
        <div className="relative flex h-full items-center pb-6">
            <input
                type="search"
                value={props.value}
                placeholder="Search for friends or players"
                className={`bg-globalBgColor  border-[1.2px] rounded-[15px] focus:border-[#29B080] px-[16px] py-[11px] text-[#929298] text-base w-full ${typing ? 'border-[#29B080]' : 'border-[#272829]'}`}
                onChange={
                    (e) => {
                        props.setValue(e.target.value);
                        e.target.value !== '' ? setTyping(true) : setTyping(false)
                    }
                } />
            <div className={`absolute right-[44px] ${typing ? 'hidden' : 'block'}`} >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 16C11.866 16 15 12.866 15 9C15 5.13401 11.866 2 8 2C4.13401 2 1 5.13401 1 9C1 12.866 4.13401 16 8 16Z" stroke="#474749" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 17L15 15" stroke="#474749" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    )
}

export default SearchInput