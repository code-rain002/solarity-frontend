import React, { FC } from "react"
import LoadingScr from "components/Experience/RoomInterior/LoadingScr"
import EditRoom from "components/Profile/EditRoom"

const ProfileIndex: FC = () => {
  return (
    <div className="h-full w-full">
      <LoadingScr />
      <EditRoom />
    </div>
  )
}

export default ProfileIndex