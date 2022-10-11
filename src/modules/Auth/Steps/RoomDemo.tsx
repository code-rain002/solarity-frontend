import { FC, useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { FirstRoom, SecondRoom, LockedRoom } from "../Rooms";
import { updateNftCard } from "redux/slices/profileSlice";

const RoomDemo = (props) => {
  const { chooseFlag, setChooseFlag, picNo, setPicNo, setRoom_id, imageUrl } = props;
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
