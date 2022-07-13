import React from "react"
import {useState} from 'react'
import TabItem from "../../components/Common/Forms/TabItem"
import ProfileFeedContent from "components/Profile/ProfileFeedContent"
import ProfileGalleryContent from "components/Profile/ProfileGalleryContent"
import ProfileRoomsContent from "components/Profile/ProfileRoomsContent"
import ProfileCommunitiesContent from "components/Profile/ProfileCommunitiesContent"

const Profile = () => {

    const [tabIndex, setTabIndex] = useState(0)
    return (
        <div className="flex flex-col w-full">
            <div className="my-[5px] text-[#929298] font-400 text-[18px]">
                A button with an eye has been added to make it clear to the user how to enable a preview of the room.
            </div>

            <div className="flex flex-row mt-8 w-full border-b-[1px] border-b-semiSplitter">
                <TabItem title="Feed" selectedStatus={tabIndex === 0} onClick={() => setTabIndex(0)} />
                <TabItem title="Gallery" selectedStatus={tabIndex === 1} onClick={() => setTabIndex(1)} />
                <TabItem title="Rooms" selectedStatus={tabIndex === 2} onClick={() => setTabIndex(2)} />
                <TabItem title="Communities" selectedStatus={tabIndex === 3} onClick={() => setTabIndex(3)} />
            </div>
            {tabIndex === 0 ? <ProfileFeedContent /> : tabIndex === 1 ? <ProfileGalleryContent /> : tabIndex === 2 ? <ProfileRoomsContent /> : tabIndex == 3 ? <ProfileCommunitiesContent /> : ""}
        </div>
    )
}

export default Profile