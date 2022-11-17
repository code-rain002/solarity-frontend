import React, { FC } from "react"

import { getStaticPaths, UserPageProps, getStaticProps } from "modules/User";
import NoUserView from "modules/User/NoUserView";
import LoadingScr from "components/Experience/RoomInterior/LoadingScr"
import EditRoom from "components/Profile/EditRoom"

const ProfileIndex: FC<UserPageProps> = ({ user, success }) => {

  if (!success) return <NoUserView />;

  return (
    <div className="h-full w-full">
      <LoadingScr />
      <EditRoom user={user} />
    </div>
  )
}

export { getStaticProps, getStaticPaths };

export default ProfileIndex