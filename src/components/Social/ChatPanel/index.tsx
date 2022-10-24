import ChattingThreadBox from "components/Experience/RoomInterior/ChattingBox/ChattingThreadBox";
import Input from "components/Experience/RoomInterior/ChattingBox/Input";
import UploadDropZoneImg from "components/Experience/RoomInterior/ChattingBox/UploadDropZoneImg";
import React, { useState } from "react";
import { RoundPlus } from "../../icons";
import TitleItem from "./TitleItem";
import UsersSidebar from "./UsersSidebar";

const ChatPanel = () => {
  const [focusState, setFocusState] = useState(false);
  const [toggleDropZone, setToggleDropZone] = useState("none");
  const [newMsgDataState, setNewMsgDataState] = useState({
    reply: {
      replying: false,
      replyToWhom: "",
      hisMsg: "",
    },
    myMsg: "",
    files: {
      fileExists: false,
      fileNames: [],
      fileUrls: [],
    },
  });
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
      <div className="grid grid-cols-7">
        <div className="col-span-2">
          <UsersSidebar />
        </div>
        <div className="col-span-5 border-[2px] border-[#19191a]">
          <ChattingThreadBox />
          <Input
            isSocial={true}
            focusState={focusState}
            setFocusState={setFocusState}
            newMsgDataState={newMsgDataState}
            setNewMsgDataState={setNewMsgDataState}
          />

          <UploadDropZoneImg toggleDropZone={toggleDropZone} />
          {/* Following is a tranparent layer for drag and drop operation - with this flickering issue can be avoid */}
          <div
            className={`absolute top-[-3px] bottom-[-3px] left-[-3px] right-[-3px] bg-transparent
                                  rounded-[24px] ${toggleDropZone === "none"
                ? "hidden"
                : "flex flex-col"
              }`}
            id="chatting_box"
            onDragLeave={() => setToggleDropZone("none")}
            onDrop={() => setToggleDropZone("none")}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ChatPanel;