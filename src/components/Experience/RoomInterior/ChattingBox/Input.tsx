import { useEffect, useState } from "react";
import EmojiList from "./EmojiList";

import TextareaAutosize from "react-textarea-autosize";
import SendButton from "./SendButton";
import EmojiButton from "./EmojiButton";
import UploadButton from "./UploadButton";
import ReplyPart from "./ReplyPart";
import FileListPart from "./FileListPart";
import TypingNotification from "./TypingNotification";

type InputType = {
  focusState: boolean;
  setFocusState: any;
  newMsgDataState: any;
  setNewMsgDataState: any;
  newMsgSendingState: any;
  setNewMsgSendingState: any;
};

const Input = (props: InputType) => {
  const [showEmoji, setShowEmoji] = useState(false);
  const [scrollBarDisp, setScrollBarDisp] = useState(false);

  // =============================================
  const [selectedFile, setSelectedFile] = useState([]);
  const [preview, setPreview] = useState([]);
  // =============================================

  const setScrollBarVisibility = (height) => {
    parseInt(height) == 240
      ? setTimeout(() => setScrollBarDisp(true), 200)
      : setScrollBarDisp(false);
  };

  const getReadyEmoji = () => {
    setShowEmoji(!showEmoji);
    document.getElementById("chatting_input").focus();
  };

  const getReadyUpload = () => {
    let file_dlg = document.getElementById("file_dlg");
    file_dlg.dispatchEvent(new MouseEvent("click"));
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
    let previewUrlArray = [];
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

      let fileNameArray = [];
      for (const file of selectedFile) {
        fileNameArray.push(file.name);
      }

      props.setNewMsgDataState({
        ...props.newMsgDataState,
        files: {
          fileExists: true,
          fileUrls: preview,
          fileNames: fileNameArray,
        },
        myMsg: e.target.value,
      });

      props.setNewMsgSendingState(true);
      setSelectedFile([]);
      e.target.value = "";
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
    let fileNameArray = [];
    for (const file of selectedFile) {
      fileNameArray.push(file.name);
    }

    props.setNewMsgDataState({
      ...props.newMsgDataState,
      files: {
        fileExists: true,
        fileUrls: preview,
        fileNames: fileNameArray,
      },
      myMsg: chatting_input.value,
    });

    props.setNewMsgSendingState(true);
    setSelectedFile([]);
    chatting_input.value = "";
  };

  return (
    <div
      className={` flex flex-col rounded-[15px] border-[1.2px] ${
        props.focusState ? "border-primary" : "border-[#272829]"
      } 
            mx-[26px]
            absolute bottom-[32px] w-[85%] bg-globalBgColor shadow-[0_-35px_10px_10px_rgba(19,19,20,1)]`}
      id="chatting_input_container"
      onDragStart={(e) => e.preventDefault()}
    >
      {/* <div className=" absolute top-[-51px] right-[0px] custom-2xl:h-[30px] xs:h-[50px] w-full bg-gradient-to-t from-[#131314] via-[#131314] to-transparent"></div> */}
      <TypingNotification who={["Eugene", "Alex1440", "Eugene", "Alex1440"]} />
      <ReplyPart
        newMsgDataState={props.newMsgDataState}
        setNewMsgDataState={props.setNewMsgDataState}
      />

      <div className="flex flex-row  justify-between items-start gap-[12px] bg-globalBgColor px-[16px] py-[18px] rounded-[15px]">
        <UploadButton onClick={() => getReadyUpload()} />
        <input
          type="file"
          className="hidden"
          id="file_dlg"
          name="fileList"
          multiple
          onChange={(e) => readFiles(e)}
        />

        <div className="flex w-[70%]">
          <TextareaAutosize
            minRows={1}
            maxRows={10}
            className={`${
              scrollBarDisp ? "" : "tas"
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
        <SendButton onClick={() => send()} focusState={props.focusState} />
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

export default Input;

// ========================================================================================
// import { useEffect, useState } from "react";
// import EmojiList from "./old/EmojiList";

// import TextareaAutosize from "react-textarea-autosize";
// import SendButton from "./old/SendButton";
// import EmojiButton from "./old/EmojiButton";
// import UploadButton from "./old/UploadButton";
// import ReplyPart from "./old/ReplyPart";

// type InputType = {
//   focusState: boolean;
//   setFocusState: any;
//   newMsgDataState : any;
//   setNewMsgDataState : any;
//   newMsgSendingState : any;
//   setNewMsgSendingState : any;
// };

// const Input = (props: InputType) => {
//   const [showEmoji, setShowEmoji] = useState(false);

//   const [replyMsgHeight, setReplyMsgHeight] = useState(0)
//   const getReadyEmoji = () => {
//     setShowEmoji(!showEmoji);
//     document.getElementById("chatting_input").focus();
//   };

//   const enterKeyCapture = (e) => {
//     if ((e.keyCode === 13 && e.shiftKey) || (e.keyCode === 13 && e.ctrlKey)) {
//       e.preventDefault();
//       let prevState = e.target.value;
//       let start = e.target.selectionStart,
//         end = e.target.selectionEnd;
//       e.target.value =
//         prevState.substring(0, start) + "\n" + prevState.substring(end);
//       document.getElementById("chatting_input_container").style.height =
//         e.target.scrollHeight + replyMsgHeight + "px";
//       e.target.style.height = e.target.scrollHeight + "px";
//     } else if (e.key === "Enter") {
//       e.preventDefault();
//       let current_val = e.target.value;
//       current_val = current_val.replace(/[\r\n]/gm, "");
//       current_val = current_val.replace(/[\n]/gm, "");
//       current_val = current_val.replace(/[ ]/gm, "");
//       current_val = current_val.replace(/[\t]/gm, "");
//       if (current_val === "") {
//         return;
//       }
//       if (props.newMsgDataState.reply.replying === true){
//         props.setNewMsgDataState({...props.newMsgDataState, reply : {replying : false, whose: "", his_msg : ""}})
//       }
//       props.setNewMsgDataState({...props.newMsgDataState, myMsg : e.target.value});
//       e.target.value = "";
//     } else if (e.key == "Tab") {
//       e.preventDefault();
//       var start = e.target.selectionStart;
//       var end = e.target.selectionEnd;

//       // set textarea value to: text before caret + tab + text after caret
//       e.target.value =
//         e.target.value.substring(0, start) +
//         "\t" +
//         e.target.value.substring(end);

//       // put caret at right position again
//       e.target.selectionStart = e.target.selectionEnd = start + 1;
//     }

//     if (e.target.value === ""){
//       document.getElementById("chatting_input_container").style.height = "56px"
//     }
//   };

//   const makeParentHeightGrowAsMe = (arg) => {
//     document.getElementById("chatting_input_container").style.height =
//       `${(arg + 28 +replyMsgHeight)}px`;
//   };

//   const send = () => {
//     let chatting_input = document.getElementById("chatting_input");
//     let current_val = chatting_input.value;
//     current_val = current_val.replace(/[\r\n]/gm, "");
//     current_val = current_val.replace(/[\n]/gm, "");
//     current_val = current_val.replace(/[ ]/gm, "");
//     current_val = current_val.replace(/[\t]/gm, "");
//     if (current_val === "") {
//       return;
//     }
//     props.setNewMsgDataState({...props.newMsgDataState, myMsg : chatting_input.value});
//     chatting_input.value = "";
//   };

//   const getReadyUpload = () => {
//     let file_dlg = document.getElementById("file_dlg");
//     file_dlg.dispatchEvent(new MouseEvent("click"));
//     console.log(file_dlg.value);
//   };

//   // useEffect(() => {
//   //   setReplyMsgHeight(document.getElementById("reply_part").clientHeight)
//   //    document.getElementById("chatting_input_container").style.height =
//   //    (document.getElementById("chatting_input").clientHeight + 28 + replyMsgHeight) + "px";
//   // })

//   return (
//     <div
//         className={` flex flex-col rounded-[15px] border-[1.2px] ${props.focusState ? "border-primary" : "border-[#272829]"}
//             mx-[26px]
//             absolute bottom-[32px] w-[85%] bg-globalBgColor overflow-hidden`}
//             id="chatting_input_container"
//             onDragStart={(e) => e.preventDefault()}
//     >
//         <ReplyPart newMsgDataState={props.newMsgDataState} setNewMsgDataState={props.setNewMsgDataState} />

//         <div
//           className="flex flex-row  justify-between items-start gap-[12px] bg-globalBgColor px-[16px] py-[18px] h-[52px]"
//         >
//           <UploadButton onClick={() => getReadyUpload()}/>
//           <input type="file" className="hidden" id="file_dlg" />

//           <div className="flex w-[70%]">
//             <TextareaAutosize
//               minRows={1}
//               maxRows={10}
//               className="tas bg-[#131314] text-[#f3f3f3] border-transparent resize-none box-border mt-[-5px] h-[26px]
//                                     w-[100%] overflow-visible font-['Outfit'] font-[400] text-[16px] "
//               id="chatting_input"
//               placeholder="Write something"
//               wrap="hard"
//               onFocus={props.setFocusState(true)}
//               onBlur={props.setFocusState(false)}
//               onKeyDown={(e) => enterKeyCapture(e)}
//               // onHeightChange={(arg) => makeParentHeightGrowAsMe(arg)}
//             />
//           </div>

//           <EmojiButton onClick={() => getReadyEmoji()} showEmoji={showEmoji} />
//           <SendButton onClick={() => send()} focusState={props.focusState} />
//         </div>
//     </div>
//   );
// };

// export default Input;
