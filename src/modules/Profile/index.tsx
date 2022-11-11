import React from "react"
import { useState } from 'react'
import TabItem from "../../components/Common/Forms/TabItem"
import ProfileFeedContent from "components/Profile/ProfileFeedContent"
import ProfileGalleryContent from "components/Profile/ProfileGalleryContent"
import ProfileRoomsContent from "components/Profile/ProfileRoomsContent"
import ProfileCommunitiesContent from "components/Profile/ProfileCommunitiesContent"
import { LeftArrow, RightArrow } from "components/icons"
import { RootStateOrAny, useSelector } from "react-redux"
import { setValue } from "utils"

const Profile = ({ user, sidebarToggler }) => {

  const rightScroll = () => {
    document.querySelector(".profile-tab").scrollLeft += 80;
  };

  const leftScroll = () => {
    document.querySelector(".profile-tab").scrollLeft -= 80;
  };

  const [tabIndex, setTabIndex] = useState(0)
  return (
    <div className="flex flex-col w-full">
      <div className="my-[5px] text-[#929298] font-400 md:text-[18px] xs:text-[14px]">
        {setValue(user.bio)}
      </div>
      <div className={`relative w-fit`}>
        <div className={`profile-tab flex flex-row mt-8 relative sm:px-[0px] xs:px-[20px]
                                md:w-full ${sidebarToggler ? "md:w-[64vw] sm:w-[58vw]" : "md:w-[80vw] sm:w-[77vw]"} xs:w-[87vw]
                                border-b-[1px] border-b-semiSplitter overflow-x-scroll scroll-smooth`}>
          <TabItem title="Feed" selectedStatus={tabIndex === 0} onClick={() => setTabIndex(0)} />
          <TabItem title="Gallery" selectedStatus={tabIndex === 1} onClick={() => setTabIndex(1)} />
          <TabItem title="Rooms" selectedStatus={tabIndex === 2} onClick={() => setTabIndex(2)} />
          <TabItem title="Communities" selectedStatus={tabIndex === 3} onClick={() => setTabIndex(3)} />
        </div>

        <div className="absolute right-[-3px] text-white top-[33px] sm:hidden xs:block">
          <button onClick={rightScroll} className="bg-gradient-to-l from-[rgba(19,19,20,1)] via-[rgba(19,19,20,0.8)] to-[rgba(19,19,20,0)] pl-[35px] h-[73px]"><RightArrow /></button>
        </div>

        <div className="absolute left-[-3px] text-white top-[33px] sm:hidden xs:block">
          <button onClick={leftScroll} className="bg-gradient-to-r from-[rgba(19,19,20,1)] via-[rgba(19,19,20,0.8)] to-[rgba(19,19,20,0)] pr-[35px] h-[73px]"><LeftArrow /></button>
        </div>
      </div>
      {tabIndex === 0 ? <ProfileFeedContent sidebarToggler={sidebarToggler} /> : tabIndex === 1 ? <ProfileGalleryContent user={user} /> : tabIndex === 2 ? <ProfileRoomsContent user={user} /> : tabIndex == 3 ? <ProfileCommunitiesContent /> : ""}
    </div>
  )
}

export default Profile