import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PrimaryButton } from "../../../../Common/Buttons";
import TitleItem from "../../TitleItem";
import MessageListItem from "./MessageListItem";

const MessageList = (props) => {
  const { selectedFriend, setSelectedFriend, suggestedFriends } = props;

  const dispatch = useDispatch();

  return (
    <div className="pb-6">
      <TitleItem title="Suggested" comment="" />
      <div className="grid gap-y-3">
        {!!suggestedFriends && suggestedFriends.map((friend, index) => (
          <MessageListItem
            title={friend.username}
            image={
              <img
                src={friend.profileImage ? friend.profileImage : "/images/experience/psuedo_avatars/avatar.png"}
                width={52}
                height={52}
              />
            }
            status={friend.onlineFlag}
            selected={friend === selectedFriend}
            gap={3}
            key={index}
            onSelect={() => setSelectedFriend(friend)}
          />
        ))}
      </div>
    </div>
  );
}

export default MessageList;