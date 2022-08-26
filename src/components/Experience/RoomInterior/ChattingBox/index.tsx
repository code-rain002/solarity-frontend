import { DownArrow, UpArrow } from "components/icons";
import { useState } from "react";
import ChattingThreadBox from "./ChattingThreadBox";
import Input from "./Input";
import UploadDropZoneImg from "./UploadDropZoneImg";

type ChattingBoxType = {
  setLeftSideActive: any;
  leftSideActive: string;
};

const ChattingBox = (props: ChattingBoxType) => {
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
    files: {
      fileExists: false,
      fileNames: [],
      fileUrls: [],
    },
  });

  return (
    <div
      className={` absolute md:bottom-[32px] xs:bottom-[78px] md:right-[32px] xs:right-[0px] w-[426px] md:top-[108px] xs:top-[0px] md:w-fit xs:w-full md:rounded-[24px] xs:rounded-[0px] border-[#1d1f1f] border-[1px] bg-[#131314]
                        ${
                          props.leftSideActive === "chatting"
                            ? "flex flex-col"
                            : "hidden"
                        } p-[6px] `}
      onDragOver={(e) => {
        e.preventDefault();
        setToggleDropZone("flex");
      }}
    >
      <div className=" flex flex-row items-center justify-between h-[30px] mt-[26px] mx-[26px] mb-[32px] ">
        <div className=" title font-['Outfit'] font-[500] text-[24px] text-[#f3f3f3] select-none ">
          Chat
        </div>
        <div
          className=" md:flex xs:hidden cursor-pointer "
          onClick={() =>
            props.leftSideActive === "chatting"
              ? props.setLeftSideActive("")
              : ""
          }
        >
          <UpArrow />
        </div>
        <div
          className=" md:hidden xs:flex cursor-pointer "
          onClick={() =>
            props.leftSideActive === "chatting"
              ? props.setLeftSideActive("")
              : ""
          }
        >
          <DownArrow />
        </div>
      </div>

      <ChattingThreadBox
        newMsgDataState={newMsgDataState}
        setNewMsgDataState={setNewMsgDataState}
        newMsgSendingState={newMsgSendingState}
        setNewMsgSendingState={setNewMsgSendingState}
      />
      <Input
        focusState={focusState}
        setFocusState={setFocusState}
        newMsgDataState={newMsgDataState}
        setNewMsgDataState={setNewMsgDataState}
        newMsgSendingState={newMsgSendingState}
        setNewMsgSendingState={setNewMsgSendingState}
      />

      <UploadDropZoneImg toggleDropZone={toggleDropZone} />
      {/* Following is a tranparent layer for drag and drop operation - with this flickering issue can be avoid */}
      <div
        className={`absolute top-[-3px] bottom-[-3px] left-[-3px] right-[-3px] bg-transparent
                            rounded-[24px] ${
                              toggleDropZone === "none"
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
