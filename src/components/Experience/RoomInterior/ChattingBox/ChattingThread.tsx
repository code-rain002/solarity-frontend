import Image from "next/image";
import { useEffect, useState } from "react";
import ImgFileType from "./ImgFileType";
import OtherFileType from "./OtherFileType";

type ChattingThreadType = {
  imgUrl: string;
  uName: string;
  before: string;
  text: string;
  setNewMsgDataState: any;
  newMsgDataState: any;
  hisMsg: string;
  replyToWhom: string;
  fileUrls: string[];
  fileNames: string[];
};

const ChattingThread = (props: ChattingThreadType) => {
  const [showReplyBtn, setShowReplyBtn] = useState(false);
  const [replyHover, setReplyHover] = useState(false);

  useEffect(() => {
    let box = document.getElementById("chatting_thread_box_1");
    let height = box.scrollHeight + 113;
    box.scroll({ top: height, behavior: "smooth" });
  }, [props.text]);

  let j = 0;
  return (
    <div
      className=" flex flex-row gap-[16px] items-start justify-start"
      onDragStart={(e) => e.preventDefault()}
      onMouseEnter={() => setShowReplyBtn(true)}
      onMouseLeave={() => setShowReplyBtn(false)}
    >
      <div className=" h-[40px] w-[40px] rounded-[15px] overflow-hidden relative ">
        <Image src={props.imgUrl} layout="responsive" width={40} height={40} />
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
          className={` flex flex-col max-w-[276px] rounded-tl-[3px] rounded-tr-[15px] rounded-bl-[15px] rounded-br-[15px] break-words whitespace-pre-wrap
                                pt-[14px] pb-[20px] px-[20px] ${
                                  props.uName === "You"
                                    ? "bg-[#3f3f43]"
                                    : "bg-[#1d1d1e]"
                                } font-[400] text-[16px] text-[#b3b3b7] leading-[150%] relative`}
        >
          <div
            className={` font-['Outfit'] text-[14px] font-[400] text-[#b3b3b7] italic pb-[10px] border-b-[1px] border-b-[#b3b3b7]
                          ${props.hisMsg === "" ? "hidden" : ""}`}
          >
            " {props.hisMsg} "
            <div
              className={` font-['Outfit'] text-[12px] font-[400] text-[#b3b3b7] not-italic`}
            >
              {props.replyToWhom}
            </div>
          </div>
          <div className="pt-[5px]">{props.text}</div>
          <div
            className={`absolute ${
              showReplyBtn ? "flex" : "hidden"
            } top-[0px] right-[-26px] cursor-pointer`}
            onMouseEnter={() => setReplyHover(true)}
            onMouseLeave={() => setReplyHover(false)}
            onClick={() =>
              props.setNewMsgDataState({
                ...props.newMsgDataState,
                reply: {
                  replying: true,
                  replyToWhom: props.uName,
                  hisMsg: props.text,
                },
              })
            }
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                stroke={replyHover ? "#29b080" : "#292D32"}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.00039 15.3787H13.9204C15.6204 15.3787 17.0004 13.9988 17.0004 12.2988C17.0004 10.5988 15.6204 9.21875 13.9204 9.21875H7.15039"
                stroke={replyHover ? "#29b080" : "#292D32"}
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.57 10.7691L7 9.18914L8.57 7.61914"
                stroke={replyHover ? "#29b080" : "#292D32"}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        <div>
          {props.fileUrls.length != 0 &&
            props.fileUrls.map((i) => {
              let currentFileName = "";
              if (props.fileNames.length > 0) {
                if (props.fileNames[0] === "__FOR__INITIAL__DATA__") {
                  currentFileName = i;
                } else {
                  currentFileName = props.fileNames[j];
                }
              }

              let extensionPoint = currentFileName.lastIndexOf(".");
              let extension = currentFileName.substring(extensionPoint + 1);
              let onlyName = currentFileName.substring(0, extensionPoint);

              j++;
              if (
                extension === "jpg" ||
                extension === "png" ||
                extension === "bmp" ||
                extension === "webp" ||
                extension === "svg" ||
                extension === "tiff" ||
                extension === "jpeg" ||
                extension === "gif" ||
                extension === "tif" ||
                extension === "dib"
              ) {
                return (
                  <ImgFileType
                    key={j}
                    fileUrl={i}
                    setSelectedFile={"__FOR__UPLOADED__FILES__"}
                    selectedFile={"__FOR__UPLOADED__FILES__"}
                    fileName={currentFileName}
                  />
                );
              } else {
                return (
                  <OtherFileType
                    key={j}
                    selectedFile={"__FOR__UPLOADED__FILES__"}
                    fileName={onlyName}
                    extension={extension.toUpperCase()}
                    fileUrl={i}
                    setSelectedFile={"__FOR__UPLOADED__FILES__"}
                    originName={currentFileName}
                  />
                );
              }
            })}
        </div>
      </div>
    </div>
  );
};

export default ChattingThread;
