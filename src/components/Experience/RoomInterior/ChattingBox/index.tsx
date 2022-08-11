import { UpArrow } from "components/icons";
import { ChattingBoxData } from "data/Experience";
import { useEffect, useState } from "react";
import ChattingThread from "./ChattingThread";
import ChattingThreadBox from "./ChattingThreadBox";
import Input from "./Input";
import TypingNotification from "./TypingNotification";

type ChattingBoxType = {
  setLeftSideActive: any;
  leftSideActive: string;
};

const ChattingBox = (props: ChattingBoxType) => {
  const [focusState, setFocusState] = useState(false);
  const [yourMsg, setYourMsg] = useState("");
  const [toggleDropZone, setToggleDropZone] = useState("none");

  return (
    <div
      className={` absolute bottom-[32px] right-[32px] w-[426px] top-[108px] rounded-[24px] border-[#1d1f1f] border-[1px] bg-[#131314]
                        ${
                          props.leftSideActive === "chatting"
                            ? "flex flex-col"
                            : "hidden"
                        } p-[6px] `}
      onDragOver={(e) => {
        e.preventDefault();
        setToggleDropZone("flex");
      }}
    >
      <div className=" flex flex-row items-center justify-between h-[30px] mt-[26px] mx-[26px] mb-[32px] ">
        <div className=" title font-['Outfit'] font-[500] text-[24px] text-[#f3f3f3] select-none ">
          Chat
        </div>
        <div
          className=" flex cursor-pointer "
          onClick={() =>
            props.leftSideActive === "chatting"
              ? props.setLeftSideActive("")
              : ""
          }
        >
          <UpArrow />
        </div>
      </div>

      <ChattingThreadBox yourMsg={yourMsg} />
      <Input
        focusState={focusState}
        setFocusState={() => setFocusState(true)}
        unsetFocusState={() => setFocusState(false)}
        setYourMsg={(arg) => setYourMsg(arg)}
      />

      <div
        className={`absolute top-[0px] bottom-[0px] left-[0px] right-[0px] bg-[rgba(12, 12, 14, 0.7)]
                            rounded-[24px] backdrop-blur-[14px] ${
                              toggleDropZone === "none"
                                ? "hidden"
                                : "flex flex-col"
                            }
                    items-center justify-center m-[12px] border-[1.5px] border-dashed border-[#474749] `}
        id="chatting_box"
      >
        <div>
            <svg width="164" height="164" viewBox="0 0 164 164" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path opacity="0.4" d="M140.084 69.6316H120.335C104.14 69.6316 90.9518 56.4433 90.9518 40.2483V20.5C90.9518 16.7416 87.8768 13.6666 84.1185 13.6666H55.1452C34.0985 13.6666 17.0835 27.3333 17.0835 51.7283V112.272C17.0835 136.667 34.0985 150.333 55.1452 150.333H108.855C129.902 150.333 146.917 136.667 146.917 112.272V76.465C146.917 72.7066 143.842 69.6316 140.084 69.6316Z" fill="#29B080"/>
                <path d="M107.967 15.1017C105.165 12.3 100.313 14.2133 100.313 18.1083V41.9567C100.313 51.9333 108.787 60.2017 119.105 60.2017C125.597 60.27 134.617 60.27 142.338 60.27C146.233 60.27 148.283 55.6917 145.55 52.9583C135.71 43.05 118.08 25.215 107.967 15.1017Z" fill="#29B080"/>
                <path d="M78.7885 85.2116L65.1218 71.545C65.0535 71.4766 64.9852 71.4766 64.9852 71.4083C64.5752 70.9983 64.0285 70.6566 63.4818 70.3833C63.4135 70.3833 63.4135 70.3833 63.3452 70.3833C62.7985 70.1783 62.2518 70.11 61.7052 70.0416C61.5002 70.0416 61.3635 70.0416 61.1585 70.0416C60.7485 70.0416 60.2702 70.1783 59.8602 70.315C59.6552 70.3833 59.5185 70.4516 59.3818 70.52C58.8352 70.7933 58.2885 71.0666 57.8785 71.545L44.2118 85.2116C42.2302 87.1933 42.2302 90.4733 44.2118 92.455C46.1935 94.4366 49.4735 94.4366 51.4552 92.455L56.3752 87.535V116.167C56.3752 118.968 58.6985 121.292 61.5002 121.292C64.3018 121.292 66.6252 118.968 66.6252 116.167V87.535L71.5452 92.455C72.5702 93.48 73.8685 93.9583 75.1668 93.9583C76.4652 93.9583 77.7635 93.48 78.7885 92.455C80.7702 90.4733 80.7702 87.1933 78.7885 85.2116Z" fill="#29B080"/>
            </svg>
        </div>
        
        <div className="mt-[32px] mb-[16px] font-['Outfit'] font-[500] text-[28px] text-[#f3f3f3] leading-[120%] ">
            Upload files
        </div>

        <div className="font-['Outfit'] font-[400] text-[16px] leading-[150%] text-[#b3b3b7] w-[226px] text-center">
            Release the button and the files will be added to the message
        </div>

      </div>
    {/* Following is a tranparent layer for drag and drop operation - with this flickering issue can be avoid */}
      <div
        className={`absolute top-[-3px] bottom-[-3px] left-[-3px] right-[-3px] bg-transparent
                            rounded-[24px] ${
                              toggleDropZone === "none"
                                ? "hidden"
                                : "flex flex-col"
                            }`}
        id="chatting_box"
        onDragLeave={() => setToggleDropZone("none")}
        onDrop={() => setToggleDropZone("none")}
      ></div>
    </div>
  );
};

export default ChattingBox;
