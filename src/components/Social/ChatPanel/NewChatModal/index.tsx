import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { setIsNewChatModal, setMembers, setSelectedChatUserName } from "../../../../redux/slices/chatSlice";
import { CloseIcon } from "../../../icons";
import { PrimaryButton } from "../../../Common/Buttons";
import { SearchInput } from "components/Common/Forms";
import MessageList from './MessageList'
import { apiCaller } from "utils/fetcher";

const NewChatModal = () => {
  const dispatch = useDispatch();
  const { profileData } = useSelector((state: RootStateOrAny) => ({
    profileData: state.profile.data,
  }));

  const [selectedFriend, setSelectedFriend] = useState(null);
  const [suggestedFriends, setSuggestedFriends] = useState([]);
  const [userSearchInput, setUserSearchInput] = useState("");

  const closeDlg = (e) => {
    if (e.target.id == "room_setting_dlg") {
      dispatch(setIsNewChatModal(false));
    }
  };

  const startChat = () => {
    dispatch(setSelectedChatUserName(selectedFriend.username))
    dispatch(setIsNewChatModal(false));
    dispatch(setMembers([profileData._id, selectedFriend._id]));
  }

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
    <div
      className={` flex justify-center md:items-center xs:items-end top-[0px] left-[0px] right-[0px] bottom-[0px] backdrop-blur-[20px] md:bg-[rgba(12,12,14,0.7)] xs:bg-globalBgColor z-[1002] fixed`}
      id="room_setting_dlg"
      onClick={(e) => closeDlg(e)}
    >
      <div
        className="fixed md:w-[30%] xs:w-full h-[87.5%] bg-[#131314] border-[1px] border-[#1d1d1f] rounded-[20px] pt-[28px] px-[40px] pb-[32px] gap-[24px] overscroll-contain"
      >
        {/* Modal Header */}
        <div
          className=" absolute md:right-[-18px] md:top-[-18px] xs:right-[49%] xs:top-[-58px] cursor-pointer "
          onClick={() => dispatch(setIsNewChatModal(false))}
        >
          <CloseIcon />
        </div>
        <div className=" flex flex-row justify-between items-center ">
          <div className=" font-['Outfit'] font-[500] text-[24px] text-[#f3f3f3] ">
            Create New Chat
          </div>
        </div>
        {/* Modal Content */}
        <div className="py-6">
          {selectedFriend ? (
            <div className="h-[54px]">
              <span className="text-[14px] text-primary border-[1px] border-[#29B080] px-[15px] py-[10px] rounded-[40px] bg-[#162724]">
                {selectedFriend.username}
              </span>
            </div>
          ) : (
            <SearchInput value={userSearchInput} setValue={setUserSearchInput} />
          )}
          <div className="h-[400px] overflow-y-auto">
            <MessageList
              selectedFriend={selectedFriend}
              setSelectedFriend={setSelectedFriend}
              suggestedFriends={suggestedFriends}
            />
          </div>
        </div>
        <div className="w-full py-6 gap-5">
          <PrimaryButton disabled={selectedFriend ? false : true} caption="Create a chat" styles="py-3 w-full rounded-[15px]" onClick={startChat} />
        </div>
      </div>
    </div>
  );
}

export default NewChatModal;