import { useState } from "react";
import Image from "next/image";

import BackButton from "./BackButton";
import ChattingBox from "./ChattingBox";
import TopRightMenu from "./TopRightMenu";
import UsersBox from "./UsersBox";
import SettingBox from "./RoomSettingBox";
import { checkBrowser } from "utils";
import { useRouter } from "next/router";

type MainScrTyp = {
  percentage: number;
  setPercetage: Function;
};

const MainScr = (props: MainScrTyp) => {
  const router = useRouter();

  const [leftSideActive, setLeftSideActive] = useState("");
  const [usersBoxActive, setUsersBoxActive] = useState(false);

  const { rid, roomType, no } = router.query;

  const isAndroid = checkBrowser();
  return (
    <div
      className={` ${props.percentage == 100 ? "flex" : "hidden"
        } h-full w-full `}
    >
      <Image
        src={`/images/experience/room_images/room_${parseInt(rid.toString()) + 1
          }.jpg`}
        layout="fill"
      />
      <BackButton />
      <TopRightMenu
        setLeftSideActive={(any) => setLeftSideActive(any)}
        leftSideActive={leftSideActive}
        usersBoxActive={usersBoxActive}
        setUsersBoxActive={setUsersBoxActive}
        isAndroid={isAndroid}
      />
      <ChattingBox
        setLeftSideActive={(any) => setLeftSideActive(any)}
        leftSideActive={leftSideActive}
      />
      <UsersBox
        setLeftSideActive={(any) => setLeftSideActive(any)}
        leftSideActive={leftSideActive}
        usersBoxActive={usersBoxActive}
        setUsersBoxActive={setUsersBoxActive}
        isAndroid={isAndroid}
      />
      <SettingBox
        setLeftSideActive={(any) => setLeftSideActive(any)}
        leftSideActive={leftSideActive}
        kind="setting"
      />
    </div>
  );
};

export default MainScr;
