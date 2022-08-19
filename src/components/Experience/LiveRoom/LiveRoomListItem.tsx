import useWindowDimensions from "components/Common/useWindowDimensions";
import { SolanaIcon } from "components/icons";
import Image from "next/image";

type LiveRoomListItemType = {
  imgUrl: string;
  walletIcon: any;
  collectionName: string;
  roomName: string;
  roomSelect: any;
  lgImgUrl: string;
  activeRoom: any;
  currentNumberOfMembers: number;
  setActiveRoomId: any;
  roomId: number;
  setShowMobileJoinRoomDlg: any;
};

const onItemClick = (arg) => {
  arg.roomSelect(arg.lgImgUrl);
  arg.setActiveRoomId(arg.roomId);

  const distance = document.documentElement.scrollTop;
  const accelerationDistance = distance * 0.3;

  const myInterval = setInterval(() => {
    document.documentElement.scrollTop > 0
      ? (document.documentElement.scrollTop -= 80)
      : clearInterval(myInterval);
  }, 10);
};

const showJoinRoomDlg = (arg) => {
  arg.roomSelect(arg.lgImgUrl);
  arg.setActiveRoomId(arg.roomId);
  arg.setShowMobileJoinRoomDlg(true);
};
const LiveRoomListItem = (props: LiveRoomListItemType) => {
  const { height, width } = useWindowDimensions();
  return (
    <div
      className={` flex flex-row p-[8px] w-full md:h-[91px] xs:h-[72px] border-[1.2px] rounded-[15px] relative
                        cursor-pointer hover:border-[#29b080] ${
                          props.activeRoom == props.lgImgUrl
                            ? "border-primary"
                            : "border-[#272829]"
                        } `}
      onClick={() => {
        width < 768 ? showJoinRoomDlg(props) : onItemClick(props);
      }}
    >
      <div className=" min-w-[120px] rounded-[10px] overflow-hidden ">
        <Image
          src={props.imgUrl}
          alt="room_img"
          layout="fixed"
          width={120}
          height={75}
        />
      </div>
      <div className=" flex flex-col ml-[16px] truncate overflow-hidden ">
        <div className=" flex flex-row gap-[15px] ">
          {props.walletIcon}
          <div className=" font-['Outfit'] font-[400] text-[12px] text-[#929298] ">
            {props.collectionName}
          </div>
        </div>
        <div className=" font-['Outfit'] font-[500] text-[14px] text-[#f3f3f3] truncate overflow-hidden">
          {props.roomName}
        </div>
      </div>

      <div
        className=" flex flex-row gap-[4px] py-[4px] pr-[8px] pl-[6px]  absolute h-[24px] left-[16px] top-[16px]
                            bg-[rgba(12,12,14,0.5)] backdrop-blur-[15px] rounded-[40px] items-center "
      >
        <div className="block">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 6C7.38071 6 8.5 4.88071 8.5 3.5C8.5 2.11929 7.38071 1 6 1C4.61929 1 3.5 2.11929 3.5 3.5C3.5 4.88071 4.61929 6 6 6Z"
              stroke="#F3F3F3"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.295 11C10.295 9.065 8.36995 7.5 5.99995 7.5C3.62995 7.5 1.70496 9.065 1.70496 11"
              stroke="#F3F3F3"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className=" block font-['Outfit'] font-[500] text-[12px] text-[#f3f3f3] ">
          {props.currentNumberOfMembers}
        </div>
      </div>
    </div>
  );
};

export default LiveRoomListItem;
