import React from "react";
import { RoundPlus } from "../../icons";
import TitleItem from "./TitleItem";
import UsersSidebar from "./UsersSidebar";

const ChatPanel = () => {
  return (
    <div>
      <TitleItem
        title="Chats"
        comment="1 unread"
        button={
          <div className=" cursor-pointer bg-darkGreen text-primary p-[8px] rounded-md">
            <RoundPlus />
          </div>
        }
      />
      <UsersSidebar />
    </div>
  );
}

export default ChatPanel;