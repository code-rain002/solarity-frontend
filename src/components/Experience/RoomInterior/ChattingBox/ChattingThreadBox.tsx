import useWindowDimensions from "components/Common/useWindowDimensions";
import { ChattingBoxData } from "data/Experience";
import { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { clearUserMsg, setMsg, setUserMsg } from "redux/slices/chatSlice";
import { apiCaller } from "utils/fetcher";
import ChattingThread from "./ChattingThread";
import TypingNotification from "./TypingNotification";

const appendMyNewChattingThread = (msgs, setMsgs, props) => {
  setMsgs([
    ...msgs,
    <ChattingThread
      imgUrl="/images/experience/room_user_avatars/room_user_avatar_15.webp"
      uName="You"
      text={props.newMsgDataState.myMsg}
      before="1m"
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
  ChattingBoxData.map((i, j) => {
    tempMsgs.push(
      <ChattingThread
        imgUrl={i.imgUrl}
        uName={i.uName}
        text={i.text}
        before={i.before}
        hisMsg={i.hisMsg}
        replyToWhom={i.replyToWhom}
        fileUrls={i.fileUrls}
        fileNames={["__FOR__INITIAL__DATA__"]}
        key={j}
      />
    );
  });
  return tempMsgs;
};

const ChattingThreadBox = () => {
  const dispatch = useDispatch();
  const { msgs, chatLogs, members } = useSelector((state: RootStateOrAny) => ({
    msgs: state.chat.msgs,
    chatLogs: state.chat.chatLogs,
    members: state.chat.members,
  }));

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        dispatch(clearUserMsg({}))
        const { data } = await apiCaller.post("/chats/fetchMessages", { members });
        for (var i = 0; i < data.chat.msgs.length; i++) {
          dispatch(setUserMsg({
            groupType: data.chat.type,
            daoId: null,
            members: data.chat.users,
            sender: {
              name: data.chat.msgs[i].sender.username,
              profileImage: data.chat.msgs[i].sender.profileImage ? data.chat.msgs[i].sender.profileImage.link : "/images/experience/psuedo_avatars/avatar.png",
            },
            content: data.chat.msgs[i].content,
            reply: data.chat.msgs[i].reply,
            attachments: data.chat.msgs[i].attachments,
            date: data.chat.msgs[i].createdAt,
            editState: data.chat.msgs[i].editState,
            deleteState: data.chat.msgs[i].deleteState,
            msgId: data.chat.msgs[i]._id,
          }));
        }
      } catch (error) {
        console.error('Something went wrong.')
      }
    }
    fetchMessages();
  }, [members])

  useEffect(() => {
    setTimeout(() => {
      let box = document.getElementById("chatting_thread_box_1");
      if (box) {
        let height = box.scrollHeight + 113;
        box.scroll({ top: height, behavior: "smooth" });
      }
    }, 100);
  }, [chatLogs])

  return (
    <div
      className={`flex xs:h-[500px] sm:h-[700px] gap-[24px] relative mb-[24px] rounded-2xl pb-[80px] `}
      id="chatting_thread_box"
    >
      <div
        className="flex flex-col px-[26px] w-full h-full overflow-y-scroll overflow-x-visible gap-[2px] relative pb-[30px]"
        id="chatting_thread_box_1"
      >
        {(members.length == 0 ? [] : chatLogs).map((chatLog, index) => (
          <ChattingThread
            imgUrl={!!chatLog.sender.profileImage ? chatLog.sender.profileImage : "/images/experience/psuedo_avatars/avatar.png"}
            uName={chatLog.sender.name}
            text={chatLog.content}
            date={chatLog.date}
            hisMsg={!!chatLog.reply.hisMsg ? chatLog.reply.hisMsg : ""}
            replyToWhom={chatLog.reply.replyToWhom}
            attachments={chatLog.attachments}
            fileNames={["__FOR__INITIAL__DATA__"]}
            key={index}
          />
        ))}
      </div>
      {/* <TypingNotification who={["Eugene", "Alex1440", "Eugene", "Alex1440"]} /> */}
    </div>
  );
};

export default ChattingThreadBox;
