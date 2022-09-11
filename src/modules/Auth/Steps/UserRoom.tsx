import {
  AddressButton,
  BackButton,
  PrimaryButton,
} from "components/Common/Buttons";
import {
  AddressImg,
  AvatarImg,
  MetamaskImg,
  PhantomImg,
} from "components/Common/Images";
import Logo from "components/Common/Logo";
import { UserAvatar } from "components/Common/Panels";
import { CloseIcon } from "components/icons";
import { rooms } from "data/Marketplace";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { minifyAddress } from "utils";

const UserRoom = (props) => {
  const { setAvatar, avatar, goStep } = props;
  const dispatch = useDispatch();
  const router = useRouter();
  const { userInfo, step } = useSelector((state: RootStateOrAny) => ({
    userInfo: state.auth.userInfo,
    step: state.auth.step,
  }));

  // bug code
  const publicKey = localStorage.getItem("publickey");
  const walletType = localStorage.getItem("type");

  const miniPublicKey = minifyAddress(publicKey, 3);
  const provider = (window as any).phantom.solana;

  const [selectedRoom, setSelectedRoom] = useState<any>();
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);

  const onSelectRoom = (room) => {
    console.log(room);
    setSelectedRoom(room);
    setShowPurchaseModal(true);
  };

  const closePurchaseModal = (e) => {
    if (e.target.id == "purchase_modal") {
      setShowPurchaseModal(false);
    }
  };

  return (
    <>
      <div className="flex items-start justify-between py-8 px-10 lg:p-10 lg:pb-4 lg:pr-12 rounded-t">
        <h3 className="text-[28px] lg:text-[30px] text-white font-medium tracking-[0.02em]">
          Buy your own room
        </h3>
        <AddressButton
          caption={miniPublicKey ? miniPublicKey : ""}
          icon={AddressImg}
          onClick={null}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-7 h-[600px] overflow-scroll pl-10 pr-7 mr-3">
        {rooms.map((room, index) => (
          <div
            className="flex flex-col border-[1.2px] border-[#272829] rounded-[20px] p-[8px] relative cursor-pointer hover:border-primary"
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
                {room.valueIcon}
                <div className="text-[18px] text-white">{room.price}</div>
              </div>
            </div>

            <div className="absolute flex items-center justify-center top-[20px] left-[20px] m-auto w-auto gap-[12px]">
              <span className="md:flex xs:hidden items-center justify-center h-[25px] w-[25px] text-[12px] text-[#f3f3f3] bg-[rgba(12,12,14,0.5)] rounded-[15px] border-[1.5px] border[rgba(0,0,0,0)] hover:border-primary cursor-pointer">
                {room.walletIcon}
              </span>
              <span className="flex items-center justify-center h-[25px] text-[12px] text-[#f3f3f3] px-2 bg-[rgba(12,12,14,0.5)] rounded-[15px] border-[1.5px] border-[rgba(0,0,0,0)] hover:border-primary cursor-pointer">
                {room.collectionName}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full px-10 py-10 lg:px-10 lg:py-8 flex-auto flex items-end">
        <div className="inline-block w-[20%] pr-2">
          <BackButton onClick={() => goStep(4)} styles="rounded-[15px]" />
        </div>
        <div className="inline-block w-[80%] pl-2">
          <PrimaryButton
            caption="Skip"
            icon=""
            bordered={false}
            onClick={() => alert("Successfully Registered")}
            disabled={false}
            styles="rounded-[15px]"
          />
        </div>
      </div>
      {selectedRoom && (
        <div
          className={` flex justify-center md:items-center xs:items-end top-[0px] left-[0px] right-[0px] bottom-[0px] backdrop-blur-[20px] bg-[rgba(12,12,14,0.7)] z-[1004] ${
            showPurchaseModal === true ? "fixed" : "hidden"
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
              <button
                // onClick={goToRoomSetting}
                className="solarity-button font-medium py-[22px] px-[22px] rounded-[22px] text-white w-[100%] h-[52px] text-[16px] sm:text-[16px] text-center tracking-wider inline-flex items-center justify-center bg-primary"
              >
                <span>{"Buy for " + selectedRoom.price + " SOL"}</span>
              </button>
              <button
                // onClick={goToRoomSetting}
                className="solarity-button font-medium py-[22px] px-[22px] rounded-[22px] text-white w-[100%] h-[52px] text-[16px] sm:text-[16px] text-center tracking-wider inline-flex items-center justify-center bg-primary"
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
