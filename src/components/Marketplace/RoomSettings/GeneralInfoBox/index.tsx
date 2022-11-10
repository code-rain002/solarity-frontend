import { DownArrow, UpArrow } from "components/icons";
import { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import ReactTextareaAutosize from "react-textarea-autosize";
import NFTList from "./NFTList";
import Uploader from "./Uploader";
import { getNfts } from "hooks";
import NFTItem from "./NFTList/NFTItem";
import { updateNftCard } from "redux/slices/profileSlice";

type GeneralInfoBoxType = {
  isHold: boolean;
  setDlgToggle: any;
  chooseFlag: boolean;
  setChooseFlag: Function;
  imageUrl: string;
  roomNo: string;
  picNo: string;
  setImageUrl: Function;
};

const GeneralInfoBox = (props: GeneralInfoBoxType) => {
  const dispatch = useDispatch();
  const { rooms, username, solanaAddress } = useSelector((state: RootStateOrAny) => state.profile.data
  );
  const [nfts, nftLoading, nftError] = getNfts(username, solanaAddress);

  const [roomName, setRoomName] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('select-nft');
  const [selected, setSelected] = useState<string>('');
  const [selectedRoomId, setSelectedRoomId] = useState("");

  const Complete = () => {
    props.setDlgToggle(true);
  }

  useEffect(() => {
    if (rooms) {
      const selectedRoom = rooms.find(s => s.roomNo == props.roomNo);
      if (selectedRoom) {
        setSelectedRoomId(selectedRoom._id);
      }
    }
  }, [rooms, props.roomNo]);

  const chooseNFT = (mint, image) => {
    if ((window as any).picState) {
      dispatch(
        updateNftCard({
          data: {
            roomId: selectedRoomId,
            picNo: props.picNo,
            mintAddress: mint,
            link: image,
          },
          successFunction: () => { },
          errorFunction: () => { },
          finalFunction: () => { },
        })
      );
      setSelected(mint);
      props.setImageUrl(image);
      props.setChooseFlag(true);
    }
  }

  const Save = () => {
    if (!disabled) {

    }
  }

  useEffect(() => {
    if (props.chooseFlag && (window as any).picState) {
      setDisabled(false);
    }
  }, [props.chooseFlag])

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
                  <div className='grid grid-cols-2 gap-6 overflow-y-auto'>
                    {nfts.map(({ mintAddress: mint, name, image, collectionName }, index) => (
                      <NFTItem
                        key={index}
                        collectionName={collectionName}
                        nftName={name}
                        imgUrl={image}
                        onClick={() => chooseNFT(mint, image)}
                      />
                    ))}
                  </div>
                </>
              )
            }
          </div>
          <div className=" row-span-1 flex flex-col justify-end">
            {
              // status === 'select-nft' && (<button onClick={cancel} className={`font-medium py-[22px] px-[22px] rounded-[15px] w-[100%] h-[52px] text-[16px] sm:text-[16px] text-center tracking-wider inline-flex items-center justify-center hover:border-primary mb-[20px] border-[1.2px] border-[#272829] text-[#29B080]`}>
              //   <span>Cancel</span>
              // </button>)
            }
            <button onClick={Save} className={`font-medium py-[22px] px-[22px] rounded-[15px] text-white w-[100%] h-[52px] text-[16px] sm:text-[16px] text-center tracking-wider inline-flex items-center justify-center hover:shadow-[0_0_20px_-5px_#29b080] ${!disabled ? ' bg-primary' : 'bg-[#1D1D1E]'}`}>
              <span>Save</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GeneralInfoBox;
