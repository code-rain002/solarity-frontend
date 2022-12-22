import React, { useState } from "react";
import SideChatBox from "./SideChatBox";

const ChatSidebar = () => {
  const [leftSideActive, setLeftSideActive] = useState('chatting');
  return (
    <div className="fixed top-[92px] right-[70px] bottom-0 w-[360px]">
      <SideChatBox
        setLeftSideActive={() => { }}
        leftSideActive={'chatting'}
      />
    </div>
  );
}

export default ChatSidebar;