import { ChattingBoxData } from "data/Experience";
import { useEffect, useState } from "react";
import { setMsg } from "redux/slices/chatSlice";
import ChattingThread from "./ChattingThread";
import TypingNotification from "./TypingNotification";

type ChattingThreadBoxType = {
  newMsgDataState: any;
  setNewMsgDataState: any;
  newMsgSendingState: any;
  setNewMsgSendingState: any;
};

const appendMyNewChattingThread = (msgs, setMsgs, props) => {
  setMsgs([
    ...msgs,
    <ChattingThread
      imgUrl="/images/experience/room_user_avatars/room_user_avatar_15.webp"
      uName="You"
      text={props.newMsgDataState.myMsg}
      before="1m"
      setNewMsgDataState={props.setNewMsgDataState}
      newMsgDataState={props.newMsgDataState}
      hisMsg={props.newMsgDataState.reply.hisMsg}
      replyToWhom={props.newMsgDataState.reply.replyToWhom}
      fileUrls={props.newMsgDataState.files.fileUrls}
      fileNames={props.newMsgDataState.files.fileNames}
    />,
  ]);
  props.setNewMsgSendingState(false);
  props.setNewMsgDataState({
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
};

const initChatbox = (props) => {
  const tempMsgs = [];
  ChattingBoxData.map((i) => {
    tempMsgs.push(
      <ChattingThread
        imgUrl={i.imgUrl}
        uName={i.uName}
        text={i.text}
        before={i.before}
        setNewMsgDataState={props.setNewMsgDataState}
        newMsgDataState={props.newMsgDataState}
        hisMsg={i.hisMsg}
        replyToWhom={i.replyToWhom}
        fileUrls={i.fileUrls}
        fileNames={["__FOR__INITIAL__DATA__"]}
      />
    );
  });
  return tempMsgs;
};

const ChattingThreadBox = (props: ChattingThreadBoxType) => {
  const [msgs, setMsgs] = useState(initChatbox(props));

  useEffect(() => {
    if (props.newMsgSendingState) {
      appendMyNewChattingThread(msgs, setMsgs, props);
    }
  }, [props.newMsgSendingState]);
  return (
    <div
      className=" flex h-[76%] gap-[24px] relative mb-[24px] "
      id="chatting_thread_box"
    >
      <div
        className="flex flex-col px-[26px] w-full h-full overflow-y-scroll overflow-x-visible gap-[24px] relative pb-[30px]"
        id="chatting_thread_box_1"
      >
        {msgs.map((msg) => msg)}
      </div>
      <div className=" absolute bottom-[0px] right-[0px] h-[30px] w-full bg-gradient-to-t from-[#131314] via-[#131314] to-transparent"></div>
      <TypingNotification who={["Eugene", "Alex1440", "Eugene", "Alex1440"]} />
    </div>
  );
};

export default ChattingThreadBox;
