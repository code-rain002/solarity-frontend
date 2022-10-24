import Image from "next/image";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { setSelectedRoom } from "redux/slices/chatSlice";

type ExploreRoomItemType = {
  walletIcon: any;
  roomName: string;
  type: Boolean;
  roomNo: Number;
  imgUrl: string;
};

const ExploreRoomItem = (props: ExploreRoomItemType) => {
  const dispatch = useDispatch();
  const { selectedRoom } = useSelector((state: RootStateOrAny) => ({
    selectedRoom: state.chat.selectedRoom,
  }))

  const selectRoom = (roomNo) => {
    dispatch(setSelectedRoom({
      type: props.type,
      roomName: props.roomName,
      roomNo: props.roomNo,
    }))
  }

  return (
    <div
      className={`flex flex-col w-[100%] h-fit border-[1.2px] border-[#272829] rounded-[20px] p-[8px]
                        relative cursor-pointer hover:border-primary custom-2xl:col-span-3 xl:col-span-4 lg:col-span-6 xs:col-span-6 ${(selectedRoom.roomNo == props.roomNo && selectedRoom.type == props.type) ? 'border-primary' : ''}`}
      onClick={() => selectRoom(props.roomNo)}
    >
      <div className=" rounded-[15px] overflow-hidden">
        <Image
          src={props.imgUrl}
          layout="responsive"
          width={387}
          height={232}
          alt="room_image"
        />
      </div>
      <div className=" mt-[20px] font-['Outfit'] font-[200] text-[16px] text-[#f3f3f3] ml-[12px]  mb-[12px] truncate">
        {props.roomName}
      </div>

      <div className="absolute flex items-center justify-center top-[20px] left-[20px] m-auto w-auto gap-[12px]">
        <span
          className="md:flex xs:hidden items-center justify-center h-[25px] w-[25px] text-[12px] text-[#f3f3f3] bg-[rgba(12,12,14,0.5)] rounded-[15px]
                                border-[1.5px] border-[rgba(0,0,0,0)] hover:border-primary cursor-pointer"
        >
          {props.walletIcon}
        </span>
        <span
          className="flex items-center justify-center h-[25px] text-[12px] font-[200] text-[#f3f3f3] px-2 bg-[rgba(12,12,14,0.5)] rounded-[15px]
                                border-[1.5px] border-[rgba(0,0,0,0)] hover:border-primary cursor-pointer"
        >
          {props.type ? (<span className="text-primary">Private room</span>) : "Public room"}
        </span>
      </div>
    </div>
  );
};

export default ExploreRoomItem;
