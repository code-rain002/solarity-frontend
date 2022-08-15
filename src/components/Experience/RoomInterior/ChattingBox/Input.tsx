import { useEffect, useState } from "react";
import EmojiList from "./EmojiList";

import TextareaAutosize from "react-textarea-autosize";

type InputType = {
  focusState: boolean;
  setFocusState: any;
  unsetFocusState: any;
  setYourMsg: any;
  replyMsg: any;
};

const Input = (props: InputType) => {
  const [showEmoji, setShowEmoji] = useState(false);

  const [replyMsgHeight, setReplyMsgHeight] = useState(0)
  const getReadyEmoji = () => {
    setShowEmoji(!showEmoji);
    document.getElementById("chatting_input").focus();
  };

  const enterKeyCapture = (e) => {
    if ((e.keyCode === 13 && e.shiftKey) || (e.keyCode === 13 && e.ctrlKey)) {
      e.preventDefault();
      let prevState = e.target.value;
      let start = e.target.selectionStart,
        end = e.target.selectionEnd;
      e.target.value =
        prevState.substring(0, start) + "\n" + prevState.substring(end);
      document.getElementById("chatting_input_container").style.height =
        e.target.scrollHeight + replyMsgHeight + "px";
      e.target.style.height = e.target.scrollHeight + "px";
    } else if (e.key === "Enter") {
      e.preventDefault();
      let current_val = e.target.value;
      current_val = current_val.replace(/[\r\n]/gm, "");
      current_val = current_val.replace(/[\n]/gm, "");
      current_val = current_val.replace(/[ ]/gm, "");
      current_val = current_val.replace(/[\t]/gm, "");
      if (current_val === "") {
        return;
      }
      props.setYourMsg(e.target.value);
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

  const makeParentHeightGrowAsMe = (arg) => {
    document.getElementById("chatting_input_container").style.height =
      `${(arg + 28 +replyMsgHeight)}px`;
  };

  const send = () => {
    let chatting_input = document.getElementById("chatting_input");
    let current_val = chatting_input.value;
    current_val = current_val.replace(/[\r\n]/gm, "");
    current_val = current_val.replace(/[\n]/gm, "");
    current_val = current_val.replace(/[ ]/gm, "");
    current_val = current_val.replace(/[\t]/gm, "");
    if (current_val === "") {
      return;
    }
    props.setYourMsg(chatting_input.value);
    chatting_input.value = "";
  };

  const getReadyUpload = () => {
    let file_dlg = document.getElementById("file_dlg");
    file_dlg.dispatchEvent(new MouseEvent("click"));
    console.log(file_dlg.value);
  };

  useEffect(() => {
    setReplyMsgHeight(document.getElementById("reply_part").clientHeight)
     document.getElementById("chatting_input_container").style.height =
     (document.getElementById("chatting_input").clientHeight + 28 + replyMsgHeight) + "px";
  },[props.replyMsg])

  return (
    <div
        className={` flex flex-col rounded-[15px] border-[1.2px] ${props.focusState ? "border-primary" : "border-[#272829]"} 
            mx-[26px]
            absolute bottom-[32px] w-[85%] bg-globalBgColor overflow-hidden`}
            id="chatting_input_container"
            onDragStart={(e) => e.preventDefault()}
    >
        <div id="reply_part" className={` justify-between items-start gap-[12px] bg-[#2C2C2E] ${props.replyMsg.replying ? "flex" : "hidden"} px-[15px] py-[5px]`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 8.33984H14.9C15.79 8.33984 16.5 9.05982 16.5 9.93982V11.7098" stroke="#29b080" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.19 6.66016L7.5 8.34021L9.19 10.0302" stroke="#29b080" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.5 15.661H9.10001C8.21001 15.661 7.5 14.941 7.5 14.061V12.291" stroke="#29b080" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.8105 17.3408L16.5005 15.6607L14.8105 13.9707" stroke="#29b080" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div className="flex flex-col font-[400] text-[12px] w-[70%]">
                <div className="flex flex-row text-primary">
                    {props.replyMsg.whose}
                </div>
                <div className="flex flex-row text-[#b3b3b7]">
                    {props.replyMsg.his_msg}
                </div>
            </div>

            <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" fill="#3f3f43" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.16992 14.8299L14.8299 9.16992" stroke="#b3b3b7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.8299 14.8299L9.16992 9.16992" stroke="#b3b3b7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            </div>
            
        </div>
        <div
          className="flex flex-row  justify-between items-start gap-[12px] bg-globalBgColor px-[16px] py-[18px] h-[52px]"
        >
          <div className="flex cursor-pointer" onClick={() => getReadyUpload()}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6668 6.66671V10C14.6668 13.3334 13.3335 14.6667 10.0002 14.6667H6.00016C2.66683 14.6667 1.3335 13.3334 1.3335 10V6.00004C1.3335 2.66671 2.66683 1.33337 6.00016 1.33337H9.3335"
                stroke="#929298"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.6668 6.66671H12.0002C10.0002 6.66671 9.3335 6.00004 9.3335 4.00004V1.33337L14.6668 6.66671Z"
                stroke="#929298"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <input type="file" className="hidden" id="file_dlg" />

          <div className="flex w-[70%]">
            <TextareaAutosize
              minRows={1}
              maxRows={10}
              className=" bg-[#131314] text-[#f3f3f3] border-transparent resize-none box-border mt-[-5px] h-[26px]
                                    w-[100%] overflow-visible font-['Outfit'] font-[400] text-[16px] "
              id="chatting_input"
              placeholder="Write something"
              wrap="hard"
              onFocus={props.setFocusState}
              onBlur={props.unsetFocusState}
              onKeyDown={(e) => enterKeyCapture(e)}
              onHeightChange={(arg) => makeParentHeightGrowAsMe(arg)}
            />
          </div>

          <div
            className="flex cursor-pointer relative"
            onClick={() => getReadyEmoji()}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 16C5.86312 16 3.85416 15.1678 2.34313 13.6569C0.832156 12.1458 0 10.1369 0 8C0 5.86312 0.832156 3.85416 2.34313 2.34313C3.85416 0.832156 5.86312 0 8 0C10.1369 0 12.1458 0.832156 13.6569 2.34313C15.1678 3.85416 16 5.86312 16 8C16 10.1369 15.1678 12.1458 13.6569 13.6569C12.1458 15.1678 10.1369 16 8 16ZM8 1.25C4.27803 1.25 1.25 4.27803 1.25 8C1.25 11.722 4.27803 14.75 8 14.75C11.722 14.75 14.75 11.722 14.75 8C14.75 4.27803 11.722 1.25 8 1.25ZM10.9293 9.38087C10.6381 9.19553 10.2517 9.28137 10.0665 9.57263C10.0588 9.58472 9.28094 10.7832 7.96875 10.7832C6.65656 10.7832 5.87875 9.58472 5.87103 9.57263C5.68572 9.28141 5.29944 9.19556 5.00822 9.38087C4.717 9.56619 4.63116 9.9525 4.81647 10.2437C4.86297 10.3168 5.97809 12.0332 7.96875 12.0332C9.95941 12.0332 11.0745 10.3168 11.121 10.2437C11.3063 9.95247 11.2205 9.56619 10.9293 9.38087ZM5.25 5.15625C5.68147 5.15625 6.03125 5.50603 6.03125 5.9375C6.03125 6.36897 5.68147 6.71875 5.25 6.71875C4.81853 6.71875 4.46875 6.36897 4.46875 5.9375C4.46875 5.50603 4.81853 5.15625 5.25 5.15625ZM9.9375 5.9375C9.9375 6.36897 10.2873 6.71875 10.7188 6.71875C11.1502 6.71875 11.5 6.36897 11.5 5.9375C11.5 5.50603 11.1502 5.15625 10.7188 5.15625C10.2873 5.15625 9.9375 5.50603 9.9375 5.9375Z"
                fill={showEmoji ? "#29b080" : "#474749"}
              />
            </svg>
            <EmojiList showEmoji={showEmoji} />
          </div>

          <div className="flex cursor-pointer " onClick={() => send()}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.0342 0.839798L1.33424 4.7748C1.09898 4.83724 0.890178 4.97398 0.738899 5.16466C0.58762 5.35534 0.501954 5.58977 0.49465 5.83307C0.487345 6.07636 0.558793 6.31551 0.69836 6.51492C0.837927 6.71433 1.03815 6.86335 1.26924 6.9398L7.02924 8.8698C7.05023 8.87778 7.06944 8.88984 7.08575 8.90529C7.10205 8.92074 7.11513 8.93926 7.12424 8.9598L9.24424 14.4598C9.33003 14.6808 9.48144 14.8701 9.67811 15.0024C9.87477 15.1347 10.1072 15.2036 10.3442 15.1998H10.3742C10.6152 15.199 10.8498 15.1223 11.0446 14.9804C11.2394 14.8386 11.3845 14.6389 11.4592 14.4098L15.4992 2.2798C15.5626 2.08559 15.5718 1.8778 15.526 1.67872C15.4802 1.47964 15.3811 1.2968 15.2392 1.1498C15.0875 0.990515 14.8942 0.877014 14.6811 0.82221C14.4681 0.767406 14.244 0.773499 14.0342 0.839798Z"
                fill={props.focusState ? "#29b080" : "#474749"}
              />
            </svg>
          </div>
        </div>
    </div>
  );
};

export default Input;
