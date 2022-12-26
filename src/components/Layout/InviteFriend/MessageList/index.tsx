import { PrimaryButton } from "components/Common/Buttons";
import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import MessageListItem from './MessageListItem';
import { addDMs, setChatKind, setMembers, setSelectedChat } from "redux/slices/chatSlice";
import CONSTANT from 'config/constant';

const MessageList = (props) => {
  const { selectedFriend, setSelectedFriend, suggestedFriends } = props;
  const { profileData } = useSelector((state: RootStateOrAny) => ({
    profileData: state.profile.data,
  }));

  const dispatch = useDispatch();
  const startChat = () => {
    props.setIsChatPanel(true);
    dispatch(setMembers([profileData._id, selectedFriend._id]));
    dispatch(setChatKind(CONSTANT.DM_CHAT));
    dispatch(setSelectedChat({
      id: selectedFriend._id,
      name: selectedFriend.username,
    }))
    dispatch(addDMs({
      name: selectedFriend.username,
      url: selectedFriend.profileImage ? selectedFriend.profileImage : '/images/experience/psuedo_avatars/avatar.png',
      id: selectedFriend._id
    }))
  }

  return (
    <div className="pb-6">
      <div className="flex flex-col gap-y-3 h-[50vh] overflow-auto px-6">
        {!!suggestedFriends && suggestedFriends.map((friend, index) => (
          <MessageListItem
            title={friend.username}
            image={
              <img
                src={friend.profileImage ? friend.profileImage : '/images/experience/psuedo_avatars/avatar.png'}
                className="rounded-xl"
                style={{width: "52px", height: "52px"}}
              />
            }
            bio={friend.bio}
            status={friend.onlineFlag}
            selected={friend === selectedFriend}
            gap={3}
            key={index}
            onSelect={() => setSelectedFriend(friend)}
          />
        ))}
      </div>
      <div className="py-6 grid gap-5">
        <PrimaryButton disabled={selectedFriend ? false : true} caption="Create a chat" styles="py-3 w-full rounded-[15px]" onClick={startChat} />
      </div>
    </div>
  );
}

export default MessageList;