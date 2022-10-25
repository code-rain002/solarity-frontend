import React, { useEffect, useState } from "react";
import EmojiList from "./EmojiList";

import TextareaAutosize from "react-textarea-autosize";
import SendButton from "./SendButton";
import EmojiButton from "./EmojiButton";
import UploadButton from "./UploadButton";
import ReplyPart from "./ReplyPart";
import FileListPart from "./FileListPart";
import TypingNotification from "./TypingNotification";
import { useRouter } from "next/router";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import ACTIONS from "config/actions";
import { setNewMsg } from "redux/slices/chatSlice";

type MsgInputType = {
  isSocial?: boolean;
  focusState: boolean;
  setFocusState: any;
  newMsgDataState: any;
  setNewMsgDataState: any;
};

const MsgInput = (props: MsgInputType) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { profileData, newMsg, chatType, members } = useSelector((state: RootStateOrAny) => ({
    profileData: state.profile.data,
    newMsg: state.chat.newMsg,
    chatType: state.chat.chatType,
    members: state.chat.members,
  }))
  const { rid } = router.query;

  const [showEmoji, setShowEmoji] = useState(false);
  const [scrollBarDisp, setScrollBarDisp] = useState(false);

  // =============================================
  const [selectedFile, setSelectedFile] = useState<any[]>([]);
  const [preview, setPreview] = useState<string[]>([]);
  // =============================================

  const setScrollBarVisibility = (height) => {
    parseInt(height) == 240
      ? setTimeout(() => setScrollBarDisp(true), 200)
      : setScrollBarDisp(false);
  };

  const getReadyEmoji = () => {
    setShowEmoji(!showEmoji);
    (document as any).getElementById("chatting_input").focus();
  };

  const getReadyUpload = () => {
    let file_dlg = document.getElementById("file_dlg");
    (file_dlg as any).dispatchEvent(new MouseEvent("click"));
  };

  const readFiles = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile([]);

      return;
    }
    let fileNameArray = [];
    for (const file of e.target.files) {
      fileNameArray.push(file.name);
    }
    setSelectedFile(e.target.files);
  };

  useEffect(() => {
    if (!selectedFile) {
      setPreview([]);
      return;
    }
    let previewUrlArray: string[] = [];
    for (let k of selectedFile) {
      const objectUrl = URL.createObjectURL(k);
      previewUrlArray.push(objectUrl);
    }

    setPreview(previewUrlArray);
    previewUrlArray = [];
    // free memory when ever this component is unmounted
    return () => {
      for (let j of preview) URL.revokeObjectURL(j);
    };
  }, [selectedFile]);

  const enterKeyCapture = (e) => {
    if (e.key === "Enter") {
      if ((e.keyCode === 13 && e.shiftKey) || (e.keyCode === 13 && e.ctrlKey)) {
        return;
      }
      e.preventDefault();
      let current_val = e.target.value;
      current_val = current_val.replace(/[\r\n]/gm, "");
      current_val = current_val.replace(/[\n]/gm, "");
      current_val = current_val.replace(/[ ]/gm, "");
      current_val = current_val.replace(/[\t]/gm, "");
      if (current_val === "") {
        return;
      }

      let files = [];
      for (var i = 0; i < selectedFile.length; i++) {
        files.push({
          name: selectedFile[i].name,
          url: preview[i]
        });
      }

      dispatch(setNewMsg({
        ...newMsg,
        attachments: {
          fileExists: files.length != 0,
          files
        },
        myMsg: e.target.value
      }));
      // Send message to server
      (window as any).socket.emit(ACTIONS.SEND_MSG_EXTENSION, {
        groupType: chatType,
        daoId: null,
        members: members,
        content: e.target.value,
        reply: newMsg.reply,
        attachments: {
          fileExists: files.length != 0,
          files
        },
        date: Date(),
        editState: false,
        deleteState: false
      })

      // Init new msg content
      setSelectedFile([]);
      e.target.value = "";
      dispatch(setNewMsg({
        reply: {
          replying: false,
          replyId: "",
          replyToWhom: "",
          hisMsg: "",
        },
        myMsg: "",
        attachments: {
          fileExists: false,
          files: []
        },
      }))
    } else if (e.key == "Tab") {
      e.preventDefault();
      var start = e.target.selectionStart;
      var end = e.target.selectionEnd;

      // set textarea value to: text before caret + tab + text after caret
      e.target.value =
        e.target.value.substring(0, start) +
        "\t" +
        e.target.value.substring(end);

      // put caret at right position again
      e.target.selectionStart = e.target.selectionEnd = start + 1;
    }
  };

  const send = () => {
    let chatting_input = document.getElementById(
      "chatting_input"
    ) as HTMLTextAreaElement;
    let current_val = chatting_input.value;
    current_val = current_val.replace(/[\r\n]/gm, "");
    current_val = current_val.replace(/[\n]/gm, "");
    current_val = current_val.replace(/[ ]/gm, "");
    current_val = current_val.replace(/[\t]/gm, "");
    if (current_val === "") {
      return;
    }
    let files = [];
    for (var i = 0; i < selectedFile.length; i++) {
      files.push({
        name: selectedFile[i].name,
        url: preview[i]
      });
    }

    dispatch(setNewMsg({
      ...newMsg,
      attachments: {
        fileExists: files.length != 0,
        files
      },
      myMsg: chatting_input.value,
    }));
    (window as any).socket.emit(ACTIONS.SEND_MSG_EXTENSION, {
      groupType: chatType,
      daoId: null,
      members: members,
      content: chatting_input.value,
      reply: newMsg.reply,
      attachments: {
        fileExists: files.length != 0,
        files
      },
      date: Date(),
      editState: false,
      deleteState: false
    })

    dispatch(setNewMsg({
      reply: {
        replying: false,
        replyId: "",
        replyToWhom: "",
        hisMsg: "",
      },
      myMsg: "",
      attachments: {
        fileExists: false,
        files: []
      },
    }))
    setSelectedFile([]);
    chatting_input.value = "";
  };

  const sendMsg = (msg) => {
    (window as any).socket.emit("send-msg", {
      roomId: rid,
      data: msg,
    });
  }

  return (
    <div
      className={` flex flex-col rounded-[15px] border-[1.2px] ${props.focusState ? "border-primary" : "border-[#272829]"
        } 
            mx-[26px]
            absolute bottom-[32px] ${props.isSocial ? "w-[43%] bg-[#19191a]" : "w-[85%]"} bg-globalBgColor shadow-[0_-35px_10px_10px_rgba(19,19,20,1)]`}
      id="chatting_input_container"
      onDragStart={(e) => e.preventDefault()}
    >
      {/* <div className=" absolute top-[-51px] right-[0px] custom-2xl:h-[30px] xs:h-[50px] w-full bg-gradient-to-t from-[#131314] via-[#131314] to-transparent"></div> */}
      {/* <TypingNotification who={["Eugene", "Alex1440", "Eugene", "Alex1440"]} /> */}
      <ReplyPart
        newMsgDataState={props.newMsgDataState}
        setNewMsgDataState={props.setNewMsgDataState}
      />

      <div className="flex flex-row  justify-between items-start gap-[12px] bg-globalBgColor px-[16px] py-[18px] pb-[12px] rounded-[15px]">
        <UploadButton onClick={() => getReadyUpload()} />
        <input
          type="file"
          className="hidden"
          id="file_dlg"
          name="fileList"
          multiple
          onChange={(e) => readFiles(e)}
        />

        <div className={`flex ${props.isSocial ? "w-[85%]" : "w-[70%]"} `}>
          <TextareaAutosize
            minRows={1}
            maxRows={10}
            className={`${scrollBarDisp ? "" : "tas"
              } bg-[#131314] text-[#f3f3f3] border-transparent resize-none box-border
                          mt-[-5px] h-[26px] w-[100%] overflow-visible font-['Outfit'] font-[400] text-[16px] `}
            id="chatting_input"
            placeholder="Write something"
            wrap="hard"
            onFocus={() => props.setFocusState(true)}
            onBlur={() => props.setFocusState(false)}
            onKeyDown={(e) => enterKeyCapture(e)}
            onHeightChange={(height) => setScrollBarVisibility(height)}
          />
        </div>

        <EmojiButton onClick={() => getReadyEmoji()} showEmoji={showEmoji} />
        <SendButton onClick={send} focusState={props.focusState} />
      </div>
      <FileListPart
        newMsgDataState={props.newMsgDataState}
        setNewMsgDataState={props.setNewMsgDataState}
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
        preview={preview}
      />
    </div>
  );
};

export default MsgInput;
