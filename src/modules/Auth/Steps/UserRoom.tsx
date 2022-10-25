import {
  AddressButton,
  BackButton,
  PrimaryButton,
} from "components/Common/Buttons";
import { CloseIcon, SolanaIcon } from "components/icons";
import { demoRooms } from "data/Marketplace";
import Image from "next/image";
import React, { useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { WalletAddress } from "../Components";
import { selectRoom } from "redux/slices/marketplaceSlice";
import { EthereumIcon } from "components/icons/EthereumIcon";
import { goStep } from "redux/slices/profileSlice";
import { useRouter } from "next/router";

const UserRoom = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { profile, step } = useSelector((state: RootStateOrAny) => ({
    profile: state.profile.data,
    step: state.profile.step,
  }));
  console.log(profile)
  const [selectedRoom, setSelectedRoom] = useState<any>(demoRooms[0]);
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);

  const onSelectRoom = (room) => {
    setSelectedRoom(room);
    // setShowPurchaseModal(true);
    dispatch(selectRoom({ roomData: room }))
  };

  const closePurchaseModal = (e) => {
    if (e.target.id == "purchase_modal") {
      setShowPurchaseModal(false);
    }
  };

  const onContinue = () => {
    if (profile.rooms.length) {
      const payload = {
        stepNum: 2,
      }
      dispatch(goStep(payload));
    } else {
      router.push({ pathname: `/${profile.username}/profile` })
    }
  }

  return (
    <>
      <div className="flex items-center justify-between pt-8 px-5 pb-5 lg:p-5 lg:pt-8 lg:pb-5 lg:pr-5 rounded-t">
        <h3 className="text-[22px] sm:text-[30px] text-white font-medium tracking-[0.02em]">
          Buy your own room
        </h3>
        <WalletAddress />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3 max-h-[436px] sm:max-h-[600px] overflow-scroll pl-5 pr-5 mr-3 grid-rows-none">
        {demoRooms.map((room, index) => (
          <div
            className={`flex flex-col border-[1.2px] border-[#272829] rounded-[20px] p-[5px] relative cursor-pointer hover:border-primary ${selectedRoom == room ? 'border-primary' : ''}`}
            onClick={() => onSelectRoom(room)}
            key={index}
          >
            <div className=" rounded-[15px] overflow-hidden">
              <Image
                src={room.imgUrl}
                layout="responsive"
                width={387}
                height={232}
                alt="room_image"
              />
            </div>
            <div className="flex flex-row justify-between items-center pt-3 px-2">
              <div className="font-[500] text-[14px]">
                <div className="font-['Outfit'] text-[#929298]">
                  {room.roomName}
                </div>
              </div>
              <div className="flex items-center">
                <EthereumIcon />
                <div className="text-[14px] text-white">{room.price}</div>
              </div>
            </div>

            <div className="absolute flex items-center justify-center top-[10px] left-[10px] m-auto w-auto gap-[12px]">
              <span className="md:flex xs:hidden items-center justify-center h-[25px] w-[25px] text-[12px] text-[#f3f3f3] bg-[rgba(12,12,14,0.5)] rounded-[15px] border-[1.5px] border[rgba(0,0,0,0)] hover:border-primary cursor-pointer">
                <SolanaIcon />
              </span>
              {/* <span className="flex items-center justify-center h-[25px] text-[12px] text-[#f3f3f3] px-2 bg-[rgba(12,12,14,0.5)] rounded-[15px] border-[1.5px] border-[rgba(0,0,0,0)] hover:border-primary cursor-pointer">
                {room.collectionName}
              </span> */}
            </div>
            {profile.rooms && (
              <div className={`top-[18px] right-[18px] ${profile.rooms.findIndex(item => item.roomNo == room.no && item.active) >= 0 ? "absolute" : "hidden"}`}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    stroke="#29B080"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.75 12.0019L10.58 14.8319L16.25 9.17188"
                    stroke="#29B080"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="w-full px-5 py-5 lg:px-5 lg:py-5 flex-auto flex items-end">
        {/* <div className="inline-block w-[20%] pr-2">
          <BackButton onClick={() => onUndo()} styles="rounded-[15px]" />
        </div> */}
        <div className="inline-block w-[100%] pl-2">
          <PrimaryButton
            caption={`${profile.rooms?.length ? "Continue" : "Skip"}`}
            icon=""
            bordered={false}
            onClick={() => onContinue()}
            disabled={false}
            styles="rounded-[15px]"
          />
        </div>
      </div>
      {selectedRoom && (
        <div
          className={` flex justify-center md:items-center xs:items-end top-[0px] left-[0px] right-[0px] bottom-[0px] backdrop-blur-[20px] bg-[rgba(12,12,14,0.7)] z-[1004] ${showPurchaseModal === true ? "fixed" : "hidden"
            } `}
          id="purchase_modal"
          onClick={(e) => closePurchaseModal(e)}
        >
          <div className="fixed lg:w-[450px] md:w-[450px] sm:w-full xs:w-full h-[440px] bg-[#131314] md:border-[1px] xs:border-t-[1px] border-[#1d1d1f] rounded-[20px] flex flex-col pt-[28px] px-[32px] pb-[32px] gap-[24px] overscroll-contain">
            <div
              className=" absolute md:right-[-18px] md:top-[-18px] cursor-pointer md:transform-none xs:right-1/2 xs:transform xs:translate-x-1/2 xs:top-[-50px]"
              onClick={() => setShowPurchaseModal(false)}
            >
              <CloseIcon />
            </div>
            <div className="">
              <p className="text-center text-[24px] font-[500] text-white">
                Purchase Room
              </p>
            </div>
            <div className="h-[72px] rounded-[15px] bg-[#1D1D1E] flex p-[12px]">
              <Image
                src={selectedRoom.imgUrl}
                width={56}
                height={48}
                className="rounded-[10px]"
              />
              <div className="ml-6">
                <div className='text-[#929298] text-[12px] font-[500] font-["outfit"]'>
                  {selectedRoom.collectionName}
                </div>
                <div className='text-white text-[16px] font-[500] font-["outfit"]'>
                  {selectedRoom.roomName.length > 20
                    ? selectedRoom.roomName.slice(0, 20) + "..."
                    : selectedRoom.roomName}
                </div>
              </div>
            </div>
            <div className="divide-y divide-[#1D1F1F]">
              <div className="flex justify-between text-[14px] py-[16px]">
                <div className="text-[#929298]">Number of frames</div>
                <div className="text-[#F3F3F3]">
                  {selectedRoom.numberOfFrames}
                </div>
              </div>
              <div className="flex justify-between text-[14px] py-[16px]">
                <div className="text-[#929298]">Connecting other users</div>
                <div className="text-[#F3F3F3]">
                  {selectedRoom.connectingOtherUsers
                    ? "Possible"
                    : "Impossible"}
                </div>
              </div>
              <div className="flex justify-between text-[14px] pt-[16px]">
                <div className="text-[#929298]">Another Info</div>
                <div className="text-[#F3F3F3]">{selectedRoom.anotherInfo}</div>
              </div>
            </div>
            <div className="flex flex-row gap-5">
              {/* <button
                // onClick={goToRoomSetting}
                className="solarity-button font-medium py-[22px] px-[22px] rounded-[22px] text-white w-[100%] h-[52px] text-[16px] sm:text-[16px] text-center tracking-wider inline-flex items-center justify-center bg-primary"
              >
                <span>{"Buy for " + selectedRoom.price + " SOL"}</span>
              </button> */}
              <button
                className="solarity-button font-medium py-[22px] px-[22px] rounded-[22px] text-white w-[100%] h-[52px] text-[16px] sm:text-[16px] text-center tracking-wider inline-flex items-center justify-center bg-primary"
                onClick={() => { }}
              >
                <span>{"Buy for " + selectedRoom.price + " VERSE"}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserRoom;
