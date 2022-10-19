import Image from "next/image";

type RoomListType = {
  data: any;
  setActiveRoom: any;
  index: number;
  selected: boolean;
};

const RoomList = (props: RoomListType) => {
  const { data, index, setActiveRoom, selected } = props;

  return (
    <div
      className={`flex flex-col h-fit border-[1.2px] border-[#272829] rounded-[20px] p-[8px]
                        relative cursor-pointer hover:border-primary ${selected ? 'border-primary' : ''}`} onClick={() => setActiveRoom(data)} key={index}
    >
      <div className=" rounded-[15px] overflow-hidden">
        <Image
          src={data.imgUrl}
          layout="responsive"
          width={387}
          height={232}
          alt="room_image"
        />
      </div>
      {/* <div className=" mt-[20px] font-['Outfit'] font-[500] text-[14px] text-[#f3f3f3] ml-[12px]  mb-[12px] truncate">
        {props.roomName}
      </div> */}
      <div
        className={` top-[18px] left-[18px] ${selected ? "absolute" : "hidden"
          } `}
      >
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
    </div>
  );
};

export default RoomList;
