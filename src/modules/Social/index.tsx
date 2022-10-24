import SearchBox from "components/Common/Forms/SearchBox";
import WeeklyMovement from "components/Community/Feed/Main/Feed/RightSide/WeeklyMovement";
import CommonDAOavatar from "components/Profile/CommonDAOavatar";
import CommonDAOs from 'components/Social/CommonDAOs';
import Guilds from 'components/Social/Guilds';
import ChatPanel from 'components/Social/ChatPanel';
import { Top_Daos } from "data/Sidebar";
import React, { useState } from "react";

const SocialComp = () => {
  const [searchString, setSearchString] = useState('');
  return (
    <div className="w-full">
      <SearchBox searchString={searchString} setSearchString={setSearchString} styles="my-3 !w-[50%]" />
      <div className="flex gap-[60px]">
        <div className="w-full">
          <Guilds />
        </div>
        <div className="">
          <ChatPanel />
        </div>
        <div className="w-[376px] mt-[64px]">
          <WeeklyMovement />
          <CommonDAOs />
        </div>
      </div>
    </div>
  );
}

export default SocialComp;