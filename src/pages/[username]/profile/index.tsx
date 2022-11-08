import React, { FC, useState } from "react"

import Profile from "modules/Profile"
import Layout from "components/Layout"
import ProfileBanner from "modules/Profile/ProfileBanner"
import { getServerSideProps, UserPageProps } from "modules/User";
import NoUserView from "modules/User/NoUserView";

const ProfileIndex: FC<UserPageProps> = ({ user, success }) => {
    const [sidebarToggler, setSidebarToggler] = useState(false)

    if (!success) return <NoUserView />;

    return (
        <Layout
            sidebarToggler={sidebarToggler}
            banner={<ProfileBanner user={user} sidebarToggler={sidebarToggler} />}
            onClick={() => setSidebarToggler(!sidebarToggler)}
        >
            <Profile user={user} sidebarToggler={sidebarToggler} />
        </Layout>
    )
}

export { getServerSideProps };

export default ProfileIndex