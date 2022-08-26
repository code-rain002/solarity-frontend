import { useState } from "react";
import Image from "next/image";


// import ChattingBox from "./ChattingBox";
// import TopRightMenu from "./TopRightMenu";
// import UsersBox from "./UsersBox";
// import SettingBox from "./RoomSettingBox";
import { checkBrowser } from "utils";
import BackButton from "./BackButton";
import TopRightMenu from "./TopRightMenu";
import GeneralInfoBox from "./GeneralInfoBox";
import SuccessfulDlg from "./SuccessfulDlg";

type RoomSettingScrTyp = {
  roomId: string;
  percentage: number;
};

const RoomSettingScr = (props: RoomSettingScrTyp) => {
  const [successDlgToggle, setSuccessDlgToggle] = useState(false);
  const [isHold, setIsHold] = useState(true);

  const SetSuccessDlgToggle = (status: boolean) => {
    setSuccessDlgToggle(status);
  }

  return (
    <div
      className={` ${props.percentage == 100 ? "flex" : "hidden"
        } h-full w-full `}
    >
      <Image
        src={`/images/experience/room_images/room_${parseInt(props.roomId) + 1
          }.jpg`}
        layout="fill"
      />
      <BackButton />
      <TopRightMenu Complete={setSuccessDlgToggle} isHold={isHold} setIsHold={setIsHold} />
      <GeneralInfoBox isHold={isHold} setDlgToggle={setSuccessDlgToggle} />
      <SuccessfulDlg dlgToggle={successDlgToggle} setDlgToggle={setSuccessDlgToggle} />
    </div>
  );
};

export default RoomSettingScr;
