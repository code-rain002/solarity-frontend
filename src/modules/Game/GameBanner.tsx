import React from "react";
import Image from 'next/image';
import { Line } from 'rc-progress';

import UserAvatarSmall from "components/Experience/RoomInfoDlg/RoomMemberAvatarSmall";
import DummyAvatarSmall4Experience from "components/Experience/RoomInfoDlg/DummyAvatarSmall4Experience";
import RoomInfoDlgTitle from "components/Experience/RoomInfoDlg/RoomInfoDlgTitle";
import RoomInfoDlgText from "components/Experience/RoomInfoDlg/RoomInfoDlgText";
import MoreUsersAvatar from "components/Experience/RoomInfoDlg/MoreUsersAvatar";
import PrimaryButton from "components/Common/Buttons/PrimaryButton";

import { AVATARS_SMALL } from 'data/Game';
const GameBanner = () => {
  var rest = 0;
  return (
    <div className="w-full h-[600px] relative rounded-[25px] overflow-hidden">
      <Image
        src={`/images/games/banner.png`}
        layout="fill"
        alt="Game Banner Image"
      />
      <div className="md:absolute xs:relative flex flex-col lg:right-8  md:right-4 xs:right-[0px] lg:bottom-8 xs:bottom-[0px] md:w-[420px] xs:w-[311px] xs:bg-globalBgColor rounded-[20px] pt-[28px] px-[32px] pb-[32px] md:mb-[0px] xs:mb-[32px]">
        <RoomInfoDlgTitle title={"CyberPunk 2077"} />
        {/* Levels */}
        <div className="pt-2 mb-3">
          <h3 className="text-xs text-[#9A9A9A] pb-1">
            LEVEL <span className="text-white text-base">7</span>
          </h3>
          <Line percent={70} strokeWidth={2} trailWidth={2} strokeColor="#29B080" trailColor="#0A3F1F" />
        </div>
        <div>
          <h3 className="text-xs text-[#9A9A9A] pb-1">Estimated Earnings:</h3>
          <div className="flex">
            <div className="text-white text-[17px] flex">
              <span>220</span>
              <div className="w-[16px] pt-1 mx-1">
                <Image src={'/images/loading_logo.png'} layout="responsive" width={16} height={16} alt="logo" />
              </div>
              <span>/hr</span>
            </div>
          </div>
        </div>
        <div className="md:mt-[32px] xs:mt-[24px] flex md:flex-row xs:flex-col md:h-fit xs:h-full items-center justify-between">
          <div className="flex ml-4">
            {AVATARS_SMALL.map(function (avatar, index) {
              rest = index - 2;
              return index >= 3 ? (
                false
              ) : avatar === "" ? (
                <DummyAvatarSmall4Experience key={index} />
              ) : (
                <UserAvatarSmall imageUrl={avatar} key={index} />
              );
            })}
            {rest < 1 ? "" : <MoreUsersAvatar rest={rest} />}
          </div>
          <div className="w-[140px]">
            <PrimaryButton
              caption="Play"
              onClick={() => { }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameBanner;