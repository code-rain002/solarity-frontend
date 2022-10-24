import ChattingThreadBox from "components/Experience/RoomInterior/ChattingBox/ChattingThreadBox";
import MsgInput from "components/Experience/RoomInterior/ChattingBox/MsgInput";
import UploadDropZoneImg from "components/Experience/RoomInterior/ChattingBox/UploadDropZoneImg";
import React, { useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { setIsNewChatModal } from "redux/slices/chatSlice";
import { RoundPlus } from "../../icons";
import TitleItem from "./TitleItem";
import UsersSidebar from "./UsersSidebar";
import NewChatModal from './NewChatModal';

const ChatPanel = () => {
  const dispatch = useDispatch();
  const { isNewChatModal } = useSelector((state: RootStateOrAny) => ({
    isNewChatModal: state.chat.isNewChatModal
  }));
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
          <div className=" cursor-pointer bg-darkGreen text-primary p-[8px] rounded-md" onClick={() => dispatch(setIsNewChatModal(true))}>
            <RoundPlus />
          </div>
        }
      />
      < div className="grid grid-cols-7" >
        <div className="col-span-2">
          <UsersSidebar />
        </div>
        <div className="col-span-5 border-[2px] border-[#19191a]">
          <ChattingThreadBox />
          <MsgInput
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
      </div >
      {isNewChatModal && (
        <NewChatModal />
      )}
    </div >
  );
}

export default ChatPanel;