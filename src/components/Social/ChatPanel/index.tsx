import ChattingThreadBox from "components/Experience/RoomInterior/ChattingBox/ChattingThreadBox";
import MsgInput from "components/Experience/RoomInterior/ChattingBox/MsgInput";
import UploadDropZoneImg from "components/Experience/RoomInterior/ChattingBox/UploadDropZoneImg";
import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { setIsNewChatModal } from "redux/slices/chatSlice";
import { RoundPlus } from "../../icons";
import TitleItem from "./TitleItem";
import UsersSidebar from "./UsersSidebar";
import NewChatModal from './NewChatModal';
import { apiCaller } from "utils/fetcher";
import { time_ago } from "utils";

const ChatPanel = () => {
  const dispatch = useDispatch();
  const { isNewChatModal, profile } = useSelector((state: RootStateOrAny) => ({
    isNewChatModal: state.chat.isNewChatModal,
    profile: state.profile.data
  }));
  const [focusState, setFocusState] = useState(false);
  const [toggleDropZone, setToggleDropZone] = useState("none");
  const [serverChats, setServerChats] = useState([]);
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

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const { data } = await apiCaller.get("/chats/fetchChats");
        var tmpChats = [];
        for (var i = 0; i < data.chats.length; i++) {
          const person = data.chats[i].users[0].username == profile.username ? data.chats[i].users[1] : data.chats[i].users[0];
          tmpChats.push({
            _id: data.chats[i]._id,
            users: data.chats[i].users,
            image: <img className="rounded-xl" src={person.profileImage ? person.profileImage.link : "/images/experience/psuedo_avatars/avatar.png"} width={52} height={52} />,
            title: person.username,
            detail: data.chats[i].lastMsg.content,
            time: time_ago(data.chats[i].lastMsg.createdAt),
            gap: 3,
            badge: data.chats[i].unreadCount
          });
        }
        setServerChats(tmpChats);
      } catch (error) {
        console.error('Something went wrong.')
      }
    }
    fetchChats();
  }, [])

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
          <UsersSidebar serverChats={serverChats} />
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