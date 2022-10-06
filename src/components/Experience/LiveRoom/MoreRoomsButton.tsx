import { useState } from "react";

type MoreRoomsButtonType = {
  liveRoomSectionHeight: number;
  setLiveRoomSectionHeight: any;
  maxLiveRoomSectionHeight: number;
};

const MoreRoomsButton = (props: MoreRoomsButtonType) => {
  const [showButton, setShowButton] = useState(true);

  function increaseHeight(props, setShowButton) {
    if (props.liveRoomSectionHeight + 440 > props.maxLiveRoomSectionHeight) {
      props.setLiveRoomSectionHeight(props.maxLiveRoomSectionHeight);
      setShowButton(false);
    } else {
      props.setLiveRoomSectionHeight(props.liveRoomSectionHeight + 440);
    }
  }
  return (
    <div
      className={`justify-center items-center border-[1.2px] border-[#272829] rounded-[15px] md:hidden xs:${showButton ? "flex" : "hidden"
        }
      font-['Outfit'] font-[500] text-[16px] text-primary pt-[12px] pb-[16px] `}
      onClick={() => increaseHeight(props, setShowButton)}
    >
      More rooms
    </div>
  );
};

export default MoreRoomsButton;
