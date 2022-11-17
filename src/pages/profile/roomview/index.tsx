import React, { FC } from "react"
import LoadingScr from "components/Experience/RoomInterior/LoadingScr"
import EditRoom from "components/Profile/EditRoom"
import { RootStateOrAny, useSelector } from "react-redux"

const ProfileIndex: FC = () => {
  const { profile } = useSelector((state: RootStateOrAny) => ({
    profile: state.profile.data,
  }))
  return (
    <div className="h-full w-full">
      <LoadingScr />
      <EditRoom user={profile} />
    </div>
  )
}

export default ProfileIndex