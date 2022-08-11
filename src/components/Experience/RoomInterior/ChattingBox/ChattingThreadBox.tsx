import { ChattingBoxData } from "data/Experience";
import { useEffect } from "react";
import ChattingThread from "./ChattingThread";
import TypingNotification from "./TypingNotification";

type ChattingThreadBoxType = {
  yourMsg: string;
};

const ChattingThreadBox = (props: ChattingThreadBoxType) => {
  return (
    <div
      className=" flex h-[76%] gap-[24px] relative mb-[24px] "
      id="chatting_thread_box"
    >
      <div className="flex flex-col px-[26px] w-full h-full overflow-y-scroll overflow-x-visible gap-[24px] relative pb-[30px]" id="chatting_thread_box_1">
        {ChattingBoxData.map((i) => {
          return (
            <ChattingThread
              imgUrl={i.imgUrl}
              uName={i.uName}
              text={i.text}
              before={i.before}
            />
          );
        })}
        {props.yourMsg === "" ? (
          ""
        ) : (
          <ChattingThread
            imgUrl="/images/experience/room_user_avatars/room_user_avatar_15.webp"
            uName="You"
            text={props.yourMsg}
            before="1m"
          />
        )}
      </div>
      <div className=" absolute bottom-[0px] right-[0px] h-[30px] w-full bg-gradient-to-t from-[#131314] via-[#131314] to-transparent"></div>
      <TypingNotification who={["Eugene", "Alex1440", "Eugene", "Alex1440"]} />
    </div>
  );
};

export default ChattingThreadBox;
