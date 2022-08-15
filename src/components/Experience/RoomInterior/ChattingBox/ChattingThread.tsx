import Image from "next/image";
import { useEffect, useState } from "react";

type ChattingThreadType = {
  imgUrl: string;
  uName: string;
  before: string;
  text: string;
  setReplyMsg : any;
};

const ChattingThread = (props: ChattingThreadType) => {

  const [showReplyBtn, setShowReplyBtn] = useState(false)
  const [replyHover, setReplyHover] = useState(false)

    useEffect(() => {
        let box = document.getElementById("chatting_thread_box_1")
        let height = box.scrollHeight + 113
        box.scroll({ top: height, behavior: "smooth"})
    },[props.text])

  const setReplyMsgHelper = () => {
    
  }
  return (
    <div className=" flex flex-row gap-[16px] items-start justify-start"
    onDragStart={(e) => e.preventDefault()} onMouseEnter={() => setShowReplyBtn(true)} onMouseLeave={() => setShowReplyBtn(false)} >
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
                                } font-[400] text-[16px] text-[#b3b3b7] leading-[150%] relative`}
        >
          {props.text}
          <div className={`absolute ${showReplyBtn ? "flex" : "hidden"} top-[0px] right-[-26px] cursor-pointer`}
                onMouseEnter={() => setReplyHover(true)} onMouseLeave={() => setReplyHover(false)}
                onClick={() => props.setReplyMsg({
                          replying : true,
                          whose : props.uName,
                          his_msg : props.text,
                        })}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={replyHover ? "#29b080" : "#292D32"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9.00039 15.3787H13.9204C15.6204 15.3787 17.0004 13.9988 17.0004 12.2988C17.0004 10.5988 15.6204 9.21875 13.9204 9.21875H7.15039" stroke={replyHover ? "#29b080" : "#292D32"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.57 10.7691L7 9.18914L8.57 7.61914" stroke={replyHover ? "#29b080" : "#292D32"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChattingThread;
