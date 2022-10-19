import React, { useState } from "react";
import Image from "next/image";

import { SearchIcon } from "assets/svgs";
import { FriendsData } from "data/GameLibrary";

const SearchFriendBox = (props) => {
    const { selectedAvatars, setSelectedAvatars } = props;
    const [typing, setTyping] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const searchFriend = (e) => {
        const value = e.target.value;
        if (value === '') {
            setSearchValue('')
            setTyping(false)
        } else {
            setTyping(true)
            setSearchValue(value)

            let searchResult = FriendsData.filter((friend, index) => (friend.link.toLowerCase().indexOf(value.toLowerCase()) >= 0))
            setSearchResult(searchResult)
        }
    }

    const addFriend = (item) => {
        let newArr = [...selectedAvatars, item];
        setSelectedAvatars(newArr);
    }

    const removeFriend = (item) => {
        let newArr = selectedAvatars.filter((i, index) => i.name !== item.name);
        setSelectedAvatars(newArr);
    }

    const onClickAvatar = (selectedItem) => {
        let newArr;
        console.log(selectedAvatars)
        let index = selectedAvatars.findIndex((item, index) => item.name === selectedItem.name)
        if (index >= 0) {
            newArr = selectedAvatars.filter((item, index) => item.name !== selectedItem.name);
        } else {
            newArr = [...selectedAvatars, selectedItem];
        }
        setSelectedAvatars(newArr);
    }

    return (
        <div className="flex w-full items-center relative">
            <input type="search" placeholder="Search Friend" className={`bg-globalBgColor  border-[1.2px] rounded-[15px] focus:border-primary px-[16px] py-[11px] text-[#929298] w-full ${typing ? 'border-primary' : 'border-[#272829]'}`} onChange={(e) => searchFriend(e)} />
            <div className={`absolute right-[20px] ${typing ? 'hidden' : 'block'}`} >
                <SearchIcon />
            </div>
            {
                searchResult.length ?
                    <div className={`absolute top-[65px] left-[calc(1%)] z-50 bg-[#131314] w-[98%] rounded-[15px] shadow-[0_0_8px_1px_#29b08052] overflow-hidden ${searchValue === '' ? 'hidden' : 'block'}`}>
                        <ul className="flex flex-col">
                            {
                                searchResult.filter((item, index) => index < 5).map((item, index) => (
                                    <li className={`flex flex-row justify-between items-center p-[10px] ${index !== 0 ? 'border-t-[1px] border-t-[#272829]' : ''}`} key={index}>
                                        <div className="flex flex-row justify-start items-center">
                                            <div className="w-[50px] h-[50px]">
                                                <Image src={item.avatar} height={20} width={20} layout="responsive" />
                                            </div>
                                            <div className="text-[18px] text-[#F3F3F3] font-medium ml-[25px]">{item.name}</div>
                                        </div>
                                        {
                                            selectedAvatars.findIndex((i, j) => i.name === item.name) < 0 ?
                                                <button className="text-[14px] font-medium text-white px-[15px] py-[5px] bg-primary rounded-[12px]" onClick={() => addFriend(item)}>Add</button>
                                                :
                                                <button className="text-[14px] font-medium text-primary px-[15px] py-[5px] bg-[#162724] rounded-[12px] border-[1px] border-primary" onClick={() => removeFriend(item)}>Remove</button>
                                        }
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    : null
            }
        </div>
    )
}

export default SearchFriendBox