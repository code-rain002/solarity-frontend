import Image from "next/image";
import { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { RootStateOrAny, useSelector } from "react-redux";

import ImgFileType from "./ImgFileType";
import OtherFileType from "./OtherFileType";

type ChattingThreadType = {
  imgUrl: string;
  uName: string;
  before?: string;
  text: string;
  hisMsg: string;
  replyToWhom: string;
  fileUrls?: string[];
  fileNames: string[];
  date?: string;
  attachments?: any;
};

const ChattingThread = (props: ChattingThreadType) => {
  const { profileData } = useSelector((state: RootStateOrAny) => ({
    profileData: state.profile.data
  }))
  const [showReplyBtn, setShowReplyBtn] = useState(false);
  const [replyHover, setReplyHover] = useState(false);
  const [msg, setMsg] = useState("");
  const [hisMsg, setHisMsg] = useState("");

  useEffect(() => {
    let box = document.getElementById("chatting_thread_box_1");
    let height = box.scrollHeight + 113;
    box.scroll({ top: height, behavior: "smooth" });

    let tempMsg: string = props.text;

    let urlArray: string[] = tempMsg.match(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g
    );

    if (urlArray != null) {
      let uniqueUrlArray = [];
      urlArray.forEach((element) => {
        if (!uniqueUrlArray.includes(element)) {
          uniqueUrlArray.push(element);
        }
      });

      for (let j in uniqueUrlArray) {
        let regExp = new RegExp(uniqueUrlArray[j], "g");
        tempMsg = tempMsg.replace(
          regExp,
          "<a href='" +
          uniqueUrlArray[j] +
          "' class='urlPart' target='__blank'>" +
          uniqueUrlArray[j] +
          "</a>"
        );
      }
    }
    let nameArray: string[] = tempMsg.match(/@[-a-zA-Z0-9@._#]{1,256}/g);
    if (nameArray != null) {
      let uniqueNameArray = [];
      nameArray.forEach((element) => {
        if (!uniqueNameArray.includes(element)) {
          uniqueNameArray.push(element);
        }
      });

      for (let j in uniqueNameArray) {
        let regExp = new RegExp(uniqueNameArray[j], "g");
        tempMsg = tempMsg.replace(
          regExp,
          "<a href='#' class='namePart'>" + uniqueNameArray[j] + "</a>"
        );
      }
    }

    setMsg(tempMsg);

    let tempHisMsg: string = props.hisMsg;

    let urlHisArray: string[] = tempHisMsg.match(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g
    );

    if (urlHisArray != null) {
      let uniqueUrlHisArray = [];
      urlHisArray.forEach((element) => {
        if (!uniqueUrlHisArray.includes(element)) {
          uniqueUrlHisArray.push(element);
        }
      });

      for (let j in uniqueUrlHisArray) {
        let regExp = new RegExp(uniqueUrlHisArray[j], "g");
        tempHisMsg = tempHisMsg.replace(
          regExp,
          "<a href='" +
          uniqueUrlHisArray[j] +
          "' class='urlPart' target='__blank'>" +
          uniqueUrlHisArray[j] +
          "</a>"
        );
      }
    }
    let nameHisArray: string[] = tempHisMsg.match(/@[-a-zA-Z0-9@._#]{1,256}/g);
    if (nameHisArray != null) {
      let uniqueNameHisArray = [];
      nameHisArray.forEach((element) => {
        if (!uniqueNameHisArray.includes(element)) {
          uniqueNameHisArray.push(element);
        }
      });

      for (let j in uniqueNameHisArray) {
        let regExp = new RegExp(uniqueNameHisArray[j], "g");
        tempHisMsg = tempHisMsg.replace(
          regExp,
          "<a href='#' class='namePart'>" + uniqueNameHisArray[j] + "</a>"
        );
      }
    }
    setHisMsg(tempHisMsg);
  }, [props.text]);

  let j = 0;
  return (
    <div
      className={`flex ${props.uName === profileData.username ? 'flex-row-reverse' : 'flex-row'} gap-[16px] items-start justify-start`}
      onDragStart={(e) => e.preventDefault()}
      onMouseEnter={() => setShowReplyBtn(true)}
      onMouseLeave={() => setShowReplyBtn(false)}
    >
      <div className={`min-h-[40px] min-w-[40px] rounded-[15px] overflow-hidden relative ${props.uName === profileData.username ? "hidden" : ""} `}>
        <Image src={props.imgUrl} layout="responsive" width={40} height={40} />
      </div>
      <div className={`flex ${props.uName === profileData.username ? "flex-row-reverse" : "flex-col"} gap-[10px] justify-between items-start md:w-[278px] xs:max-w-[100%]`}>
        <div className={`flex flex-row gap-[10px] justify-start items-center ${props.uName === profileData.username ? "hidden" : ""}`}>
          <div
            className={` font-['Outfit'] text-[14px] ${props.uName === profileData.username ? "text-[#f3f3f3]" : "text-[#929298]"
              } `}
          >
            {props.uName}
          </div>
          <div className=" font-['Outfit'] text-[14px] font-[400] text-[#474749] ">
            {props.before}
          </div>
        </div>

        <div
          className={` flex flex-col md:max-w-[240px] xs:max-w-[100%] ${props.uName === profileData.username ? "rounded-tl-[10px] rounded-tr-[3px]" : "rounded-tl-[3px] rounded-tr-[10px]"} rounded-bl-[10px] rounded-br-[10px] break-all whitespace-pre-wrap
                                pt-[5px] pb-[3px] px-[15px] ${props.uName === profileData.username
              ? "bg-[#3f3f43]"
              : "bg-[#1d1d1e]"
            } font-[400] text-[16px] text-[#b3b3b7] leading-[150%] relative`}
        >
          <div
            className={` font-['Outfit'] text-[14px] font-[400] text-[#b3b3b7] italic pb-[10px] border-b-[1px] border-b-[#b3b3b7]
                          ${props.hisMsg === "" ? "hidden" : ""}`}
          >
            " {ReactHtmlParser(hisMsg)} "
            <div
              className={` font-['Outfit'] text-[12px] font-[400] text-[#b3b3b7] not-italic`}
            >
              {props.replyToWhom}
            </div>
          </div>
          <div className="pt-[5px]">{ReactHtmlParser(msg)}</div>
          <div
            className={`absolute ${showReplyBtn ? "flex" : "hidden"
              } top-[0px] right-[-26px] cursor-pointer ml-[30px]`}
            onMouseEnter={() => setReplyHover(true)}
            onMouseLeave={() => setReplyHover(false)}
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
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.00039 15.3787H13.9204C15.6204 15.3787 17.0004 13.9988 17.0004 12.2988C17.0004 10.5988 15.6204 9.21875 13.9204 9.21875H7.15039"
                stroke={replyHover ? "#29b080" : "#292D32"}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.57 10.7691L7 9.18914L8.57 7.61914"
                stroke={replyHover ? "#29b080" : "#292D32"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div>
          {props.attachments.files.length != 0 &&
            props.attachments.files.map((i) => {
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
