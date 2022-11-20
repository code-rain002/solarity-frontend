import React, { useState } from "react";
import ChattingBox from "components/Experience/RoomInterior/ChattingBox";

const ChatSidebar = () => {
  const [leftSideActive, setLeftSideActive] = useState('chatting');
  return (
    <div className="fixed top-[92px] right-0 bottom-0 w-[400px]">
      <ChattingBox
        setLeftSideActive={() => { }}
        leftSideActive={'chatting'}
      />
    </div>
  );
}

export default ChatSidebar;