import React, { useState } from "react";
import { useRouter } from 'next/router'
import { FC } from "react";
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import Image from "next/image";
import { GridAdd } from "components/icons";

export type TopRoomItemProps = {
  title: string;
  imageUrl: string;
  roomUrl: string;
};

const TopRoomItem: FC<TopRoomItemProps> = ({
  title,
  imageUrl,
  roomUrl,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const { profileData } = useSelector((state: RootStateOrAny) => ({
    profileData: state.profile.data,
  }));

  const gotoRoom = () => {
    router.push(roomUrl);
  }

  return (
    <div className="flex flex-col col-span-2 relative overflow-hidden cursor-pointer
      w-full rounded-[20px] border-[1.2px] border-[#272829] hover:border-primary transition duration-300 bg-[#242424]" onClick={gotoRoom}>
      <div className="w-full"><Image src={imageUrl} width="100%" height="70%" layout="responsive" alt="room_image" /></div>
      <div className="py-[8px] px-[20px]">
        <div className="text-[20px] text-[#F3F3F3] leading-[32px]">{title}</div>
        <div className="flex items-center justify-between text-[#29B080] text-[14px]">
        </div>
      </div>
    </div>
  );
};

export default TopRoomItem;
