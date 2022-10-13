import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";

import AvatarPanel from "../AvatarPanel";
import { models, PsuedoAvatarItemData } from "data/Experience";
import PsuedoAvatarItem from "../PsuedoAvatarItem";

const AvatarSelectionContent = () => {

  const { newModelIndex } = useSelector((state: RootStateOrAny) => ({
    newModelIndex: state.chat.newModelIndex
  }))

  return (
    <div className=" grid grid-cols-4 profile-settings-content tab-general-content h-full min-w-[330px] items-between gap-[32px] pt-[2px] pb-[2px] mb-[25px] overflow-y-auto overflow-x-visible items-center">
      <div
        className=" col-span-3 h-[400px] w-full rounded-[15px] bg-[#181818]"
      >
        <AvatarPanel
          modelPath={models[newModelIndex].modelUrl}
          position={models[newModelIndex].position}
          rotation={models[newModelIndex].rotation}
          scale={models[newModelIndex].scale}
        />
      </div>
      {/* begin of avatar list------------------------------------------------------------------------------------------------ */}
      <div className="col-span-1 relative h-[400px] overflow-y-scroll overflow-x-visible overscroll-contain">
        <div
          className="grid gap-[16px] w-full h-[100%] pr-1 pb-[30px] "
        >
          {PsuedoAvatarItemData.map((i, index) => {
            return (
              <PsuedoAvatarItem
                key={index}
                itemId={index}
                imgUrl={i.imgUrl}
                title={i.title}
              />
            );
          })}
        </div>
        <div className=" absolute bottom-[-5px] right-[0px] h-[20px] w-full bg-gradient-to-t from-[#131314] to-transparent"></div>
      </div>
    </div>
  );
}

export default AvatarSelectionContent;