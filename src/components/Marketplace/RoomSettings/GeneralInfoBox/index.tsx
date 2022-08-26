import { DownArrow, UpArrow } from "components/icons";
import { useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import NFTList from "./NFTList";
import Uploader from "./Uploader";

type GeneralInfoBoxType = {
  isHold: boolean;
  setDlgToggle: any;
};

const GeneralInfoBox = (props: GeneralInfoBoxType) => {

  const [roomName, setRoomName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('general-info');

  const Complete = () => {
    props.setDlgToggle(true);
  }

  const goToNext = () => {
    if (roomName.length > 0) {
      setStatus('select-nft');
    }
  }

  const cancel = () => {
    setStatus('general-info');
  }

  return (
    <>
      {props.isHold && (
      <div
        className={` absolute md:bottom-[32px] xs:bottom-[78px] md:right-[32px] xs:right-[0px] md:w-[426px] lg:w-[426px] md:top-[108px] xs:top-[0px] xs:w-full md:rounded-[24px] xs:rounded-[0px] border-[#1d1f1f] border-[1px] bg-[#131314]
                        grid grid-rows-4 gap-12 p-[24px] pt-[32px] md:mt-[24px] lg:mt-[24px] sm:mt-0 xs:mt-0`}
      >
        <div className=" row-span-3">
          {
            status === 'general-info' ? (
              <>
                <div className=" flex flex-row items-center justify-between w-full h-[30px]">
                  <div className=" title font-['Outfit'] font-[500] text-[24px] text-[#f3f3f3] select-none">
                    General Info
                  </div>
                </div>
                <div className="relative min-h-[52px] flex border-[1.2px] border-primary rounded-[15px] mt-[24px]">
                  <div className="absolute top-[-12px] left-[10px] bg-globalBgColor font-400 text-primary text-[12px] px-[5px]">
                    Room title
                  </div>
                  <div className="flex w-[100%] justify-center items-center">
                    <input
                      type="text"
                      className="w-full bg-transparent font-400 text-[#f3f3f3] text-[16px] px-[16px]
                                                border-r-[1.5px] border-r-[#272829] box-border"
                      value={roomName}
                      onChange={(e) => setRoomName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mt-[24px]">
                  <Uploader />
                </div>
                <div className="relative min-h-[76px] flex border-[1.2px] border-primary rounded-[15px] mt-[24px]">
                  <div className="flex w-[100%] justify-center items-center">
                    <ReactTextareaAutosize
                      minRows={1}
                      maxRows={10}
                      className={`tax bg-[#131314] text-[#f3f3f3] border-transparent resize-none box-border
                          mt-[-5px] h-[26px] w-[100%] overflow-visible font-['Outfit'] font-[400] text-[16px] px-[16px]`}
                      id="chatting_input"
                      placeholder="Write something"
                      wrap="hard"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className=" title font-['Outfit'] font-[500] text-[24px] mb-[24px] text-[#f3f3f3] select-none">
                  Select NFT from list
                </div>
                <NFTList />
              </>
            )
          }
        </div>
        <div className=" row-span-1 flex flex-col justify-end">
          {
            status === 'select-nft' && (<button onClick={cancel} className={`font-medium py-[22px] px-[22px] rounded-[15px] w-[100%] h-[52px] text-[16px] sm:text-[16px] text-center tracking-wider inline-flex items-center justify-center hover:border-primary mb-[20px] border-[1.2px] border-[#272829] text-[#29B080]`}>
              <span>Cancel</span>
            </button>)
          }
          <button onClick={goToNext} className={`font-medium py-[22px] px-[22px] rounded-[15px] text-white w-[100%] h-[52px] text-[16px] sm:text-[16px] text-center tracking-wider inline-flex items-center justify-center hover:shadow-[0_0_20px_-5px_#29b080] ${roomName.length > 0 ? ' bg-primary' : 'bg-[#1D1D1E]'}`}>
            <span>Save</span>
          </button>
        </div>
      </div>
      )}
    </>
  );
};

export default GeneralInfoBox;
