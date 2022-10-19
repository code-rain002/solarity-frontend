import { SearchIcon } from "assets/svgs";
import Image from "next/image";
import React, { useState } from "react";

const SearchGameBox = () => {
    const [typing, setTyping] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const searchGames = (e) => {
        const value = e.target.value;
        if (value === '') {
            setSearchValue('')
            setTyping(false)
        } else {
            setTyping(true)
            setSearchValue(value)
        }
    }

    return (
        <div className="flex h-full items-center
                        custom-2xl:mr-[20px] xl:mr-[10px] 
                        custom-2xl:w-[516px] xl:w-[516px]
                        relative">
            <input type="search" placeholder="Search" className={`bg-globalBgColor  border-[1.2px] rounded-[15px] focus:border-primary px-[16px] py-[11px] text-[#929298] w-full ${typing ? 'border-primary' : 'border-[#272829]'}`} onChange={(e) => searchGames(e)} />
            <div className={`absolute right-[20px] ${typing ? 'hidden' : 'block'}`} >
                <SearchIcon />
            </div>
            <div className={`absolute top-[70px] z-50 bg-[#131314] w-full rounded-[15px] shadow-[0_1px_16px_1px_#29B080] overflow-hidden ${searchValue === '' ? 'hidden' : 'block'}`}>
                <ul className="flex flex-col">
                    {
                        [0, 1, 2].map(index => (
                            <li className={`flex flex-row items-center px-[18px] py-[20px] ${index !== 0 ? 'border-t-[1px] border-t-[#272829]' : ''}`} key={index}>
                                <div className="w-[74px] h-[60px]">
                                    <Image src="/images/library/temp/searched.png" height={60} width={74} layout="responsive" />
                                </div>
                                <div className="text-[18px] text-[#F3F3F3] font-medium ml-[25px]">Collects all pets!</div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default SearchGameBox