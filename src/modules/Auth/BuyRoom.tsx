import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, RootStateOrAny, useSelector } from "react-redux";
import {
  startLoadingApp,
  stopLoadingApp,
} from "../../redux/slices/commonSlice";
import {
  UserRoom,
  RoomIframe,
  EditRoom,
  RoomDemo,
} from "./Steps";
import { updateNftCard } from "redux/slices/profileSlice";

export const BuyRoomPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { profile, step } = useSelector((state: RootStateOrAny) => ({
    profile: state.profile.data,
    step: state.profile.step,
  }));
  const { selectedNft } = useSelector(
    (state: RootStateOrAny) => state.marketplace
  );

  const [chooseFlag, setChooseFlag] = useState<string | Boolean>(false);
  const [picNo, setPicNo] = useState<string>("0");
  const [room_id, setRoom_id] = useState("");
  const [imageUrl, setImageUrl] = useState<string>();

  useEffect(() => {
    if (selectedNft.link) {
      dispatch(
        updateNftCard({
          data: {
            roomId: room_id,
            picNo: picNo,
            mintAddress: selectedNft.mintAddress,
            link: selectedNft.link,
          },
          successFunction: () => {},
          errorFunction: () => {},
          finalFunction: () => {},
        })
      );
      setChooseFlag(true);
    }
  }, [selectedNft]);
  
  return (
    <div className="lg:flex lg:flex-row justify-center md:flex-col gap-[25px] mt-[50px] items-center">
      <div className="w-[90%] md:w-[65%] lg:w-[50%] xl:w-[45%] custom-2xl:w-[45%] m-auto z-10">
        <div className="relative w-auto mx-auto">
          <div className="rounded-[30px] min-h-[800px] lg:min-h-[calc(100vh-100px)] shadow-lg relative w-full bg-[#141416] outline-none focus:outline-none flex flex-row">
            <div className="w-[100%] xl:w-[100%] flex flex-col relative">
              {step === 1 && <UserRoom />}
              {step === 2 && <EditRoom setImageUrl={setImageUrl} />}
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] md:w-[85%] lg:w-[50%] xl:w-[55%] custom-2xl:w-[55%] lg:block m-auto">
        {step == 1 && <RoomIframe />}
        {step == 2 && (
          <RoomDemo 
            chooseFlag={chooseFlag}
            setChooseFlag={setChooseFlag}
            picNo={picNo}
            setPicNo={setPicNo}
            setRoom_id={setRoom_id}
            imageUrl={imageUrl}
          />
        )}
      </div>
    </div>
  );
};

export default BuyRoomPage;
