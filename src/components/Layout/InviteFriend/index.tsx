import React, { useEffect, useState } from "react";
import SearchUsersInput from './SearchUsersInput';
import MessageList from './MessageList';
import { useDispatch } from "react-redux";
import { apiCaller } from "utils/fetcher";
import TitleItem from "./TitleItem";

const InviteFriend = (props) => {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [userSearchInput, setUserSearchInput] = useState("");
  const [suggestedFriends, setSuggestedFriends] = useState([]);

  useEffect(() => {
    const fetchSuggestedFriends = async () => {
      try {
        const { data } = await apiCaller.post("/users/fetchSuggestedFriends", {
          searchName: userSearchInput,
        });
        setSuggestedFriends(data.users)
      } catch (error) {
        console.error('Something went wrong.')
      }
    }
    fetchSuggestedFriends();
  }, [userSearchInput]);

  return (
    <div className="fixed top-[92px] right-[70px] bottom-0 w-[360px]">
      <div className={`w-full h-full border-[#1d1f1f] border-[1px] bg-[#141414]`}>
        <div className="pt-[15px] grid">
          <div className="pl-8">
            <TitleItem title="Suggested" comment="" />
          </div>
          <div className="pb-8">
            <SearchUsersInput value={userSearchInput} setValue={setUserSearchInput} />
          </div>
          <MessageList
            selectedFriend={selectedFriend}
            setSelectedFriend={setSelectedFriend}
            suggestedFriends={suggestedFriends}
            setIsChatPanel={props.setIsChatPanel}
          />
        </div>
      </div>
    </div>
  );
}

export default InviteFriend;