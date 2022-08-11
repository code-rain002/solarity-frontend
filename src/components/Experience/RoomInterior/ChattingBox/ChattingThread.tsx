import Image from "next/image";
import { useEffect } from "react";

type ChattingThreadType = {
  imgUrl: string;
  uName: string;
  before: string;
  text: string;
};

const ChattingThread = (props: ChattingThreadType) => {

    useEffect(() => {
        // scroll to bottom of the chat box
        let box = document.getElementById("chatting_thread_box_1")
        let height = box.scrollHeight + 113
        box.scroll({ top: height, behavior: "smooth"})
    })

  return (
    <div className=" flex flex-row gap-[16px] items-start justify-start" onDragStart={(e) => e.preventDefault()}>
      <div className=" h-[40px] w-[40px] rounded-[15px] overflow-hidden relative ">
        <Image src={props.imgUrl} layout="responsive" width={40} height={40}  />
      </div>
      <div className=" flex flex-col gap-[10px] justify-between items-start ">
        <div className=" flex flex-row gap-[10px] justify-start items-center ">
          <div
            className={` font-['Outfit'] text-[14px] ${
              props.uName === "You" ? "text-[#f3f3f3]" : "text-[#929298]"
            } `}
          >
            {props.uName}
          </div>
          <div className=" font-['Outfit'] text-[14px] font-[400] text-[#474749] ">
            {props.before}
          </div>
        </div>

        <div
          className={` max-w-[276px] rounded-tl-[3px] rounded-tr-[15px] rounded-bl-[15px] rounded-br-[15px] break-words whitespace-pre-wrap
                                pt-[14px] pb-[20px] px-[20px] ${
                                  props.uName === "You"
                                    ? "bg-[#3f3f43]"
                                    : "bg-[#1d1d1e]"
                                } font-[400] text-[16px] text-[#b3b3b7] leading-[150%] `}
        >
          {props.text}
        </div>
      </div>
    </div>
  );
};

export default ChattingThread;
