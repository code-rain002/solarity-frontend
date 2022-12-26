import React from "react";
import { DownArrow, UpArrow } from "components/icons";
import { useState } from "react";
import ChattingThreadBox from "../../../Experience/RoomInterior/ChattingBox/ChattingThreadBox";
import Input from "../../../Experience/RoomInterior/ChattingBox/Input";
import UploadDropZoneImg from "../../../Experience/RoomInterior/ChattingBox/UploadDropZoneImg";
import { RootStateOrAny, useSelector } from "react-redux";
import SidebarInput from "./SidebarInput";

type ChattingBoxType = {
  setLeftSideActive: any;
  leftSideActive: string;
};

const ChattingBox = (props: ChattingBoxType) => {
  const { selectedChat } = useSelector((state: RootStateOrAny) => ({
    selectedChat: state.chat.selectedChat,
  }))

  const [focusState, setFocusState] = useState(false);
  const [toggleDropZone, setToggleDropZone] = useState("none");
  const [newMsgSendingState, setNewMsgSendingState] = useState(false);
  const [newMsgDataState, setNewMsgDataState] = useState({
    reply: {
      replying: false,
      replyToWhom: "",
      hisMsg: "",
    },
    myMsg: "",
    avatarUrl: "",
    files: {
      fileExists: false,
      fileNames: [],
      fileUrls: [],
    },
  });

  return (
    <div
      className={`w-full h-full border-[#1d1f1f] border-[1px] bg-[#141414]
        ${props.leftSideActive === "chatting"
          ? "flex flex-col"
          : "hidden"
        } p-[6px] `}
      onDragOver={(e) => {
        e.preventDefault();
        setToggleDropZone("flex");
      }}
    >
      <div className=" flex flex-row items-center justify-between h-[30px] mt-[12px] mx-[26px] mb-[32px] ">
        <div className=" title font-['Outfit'] font-[500] text-[24px] text-[#f3f3f3] select-none ">
          {selectedChat.name}
        </div>
        <div
          className=" md:flex xs:hidden cursor-pointer "
          onClick={() =>
            props.leftSideActive === "chatting"
              ? props.setLeftSideActive("")
              : ""
          }
        >
          {/* <UpArrow /> */}
        </div>
      </div>

      <ChattingThreadBox isSocial={false} />
      <SidebarInput
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
  );
};

export default ChattingBox;
