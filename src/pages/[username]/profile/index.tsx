import React from "react"
import Layout from "components/Layout"
import Profile from "modules/Profile"
import ProfileBanner from "modules/Profile/ProfileBanner"
import { useRouter } from "next/router"

const ProfileIndex = () => {
    const router = useRouter();
    // if(props.user)
    return (
        <Layout banner={<ProfileBanner />}>
            <Profile />
        </Layout>
    )
}

export default ProfileIndex