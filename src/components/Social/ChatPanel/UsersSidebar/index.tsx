import React, { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { setMembers, setSelectedChatUserName } from "redux/slices/chatSlice";
import ItemTemplate from "../ItemTemplate";

const UsersSidebar = (props) => {
  const dispatch = useDispatch();
  const { profile, members } = useSelector((state: RootStateOrAny) => ({
    profile: state.profile.data,
    members: state.chat.members,
  }));

  const selectNewChat = (chat) => {
    var members = [];
    for (var i = 0; i < chat.users.length; i++) {
      if (chat.users[i].username != profile.username) {
        members.push(chat.users[i]._id);
        dispatch(setSelectedChatUserName(chat.users[i].username))
      }
    }
    dispatch(setMembers([profile._id].concat(members)));
  }

  return (
    <div>
      <div className="flex gap-4 pb-4">
        {['Messages', 'Requests'].map((menuItem, index) => (
          <div className={(menuItem == 'Messages' ? `text-primary` : 'text-[#929298]') + ` text-base cursor-pointer hover:text-primary`} key={index}>
            {menuItem}
          </div>
        ))}
      </div>
      {/* Menu Content */}
      <div className="menuContent grid gap-y-2">
        {props.serverChats.map((chat: any, index) => (
          <div className="cursor-pointer" onClick={() => selectNewChat(chat)} key={index}>
            <ItemTemplate {...chat} isActive={members[1] == chat.users[1]._id || members[1] == chat.users[0]._id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsersSidebar;