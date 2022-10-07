import { FC, useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { FirstRoom, SecondRoom, LockedRoom } from "../Rooms";
import { updateNftCard } from "redux/slices/profileSlice";

const RoomDemo = () => {
  const dispatch = useDispatch();
  const [roomUpdateView, setRoomUpdateView] = useState(false);
  const [loading, setLoading] = useState(false);
  const { rooms } = useSelector(
    (state: RootStateOrAny) => state.profile.data
  );
  const { selectedNft } = useSelector(
    (state: RootStateOrAny) => state.marketplace
  );
  const activeRoom = rooms.find((room: any) => room.active);
  console.log(activeRoom)
  const [chooseFlag, setChooseFlag] = useState<string | Boolean>(false);
  const [picNo, setPicNo] = useState<string>("0");
  const [room_id, setRoom_id] = useState("");
  const [imageUrl, setImageUrl] = useState<string>();

  // const { roomNo: activeRoomNo } = rooms.find(({ active }: any) => active);
  // const [nfts, nftLoading, nftError] = getNfts(username, solanaAddress);
  // let editRoomData;
  // let roomView;

  var chooseNft = () => {
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
  };

  return (
    <div className="rounded-[20px] border-[1px] border-primary bg-[#1a1a1c] p-3 mt-5 lg:mt-0">
      <div className="flex h-[450px] w-full rounded-[16px] overflow-hidden">
        {activeRoom && activeRoom.roomNo === 0 && (
          <FirstRoom
            chooseFlag={chooseFlag}
            setChooseFlag={setChooseFlag}
            picNo={picNo}
            setPicNo={setPicNo}
            setRoom_id={setRoom_id}
            imageUrl={imageUrl}
          />
        )}
        {activeRoom && activeRoom.roomNo === 1 && (
          <SecondRoom
            chooseFlag={chooseFlag}
            setChooseFlag={setChooseFlag}
            picNo={picNo}
            setPicNo={setPicNo}
            setRoom_id={setRoom_id}
            imageUrl={imageUrl}
          />
        )}
        {activeRoom && activeRoom.roomNo !== 0 && activeRoom.roomNo !== 1 && (
          <div
            className="w-full h-[240px] rounded-2xl relative"
            style={{ background: "rgba(255, 255, 255, 0.2)" }}
          >
            <LockedRoom />
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomDemo;
