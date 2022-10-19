import React from 'react'
import Image from 'next/image'

interface InvitationAvatarProps {
  imgUrl: string;
  verified: boolean;
}

function InvitationAvatar(props: InvitationAvatarProps) {
  return (
    <div className="relative w-[24px] h-[24px] rounded-[10px] border-globalBgColor">
      <Image src={props.imgUrl} className="rounded-[4px]" width={136} height={136} alt="user avatar" />
      <div className="absolute top-[15px] left-[15px] w-[12px] h-[12px]">
        <Image src={"/images/profile/temp/Verified.png"} layout="responsive" width={28} height={28} alt="verified badge" />
      </div>
    </div>
  )
}

export default InvitationAvatar