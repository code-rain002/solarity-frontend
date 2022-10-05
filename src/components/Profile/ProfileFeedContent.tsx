import DAORoleButton from "components/Common/Buttons/DAORoleButton"
import FeedCategoryButton from "components/Common/Buttons/FeedCategoryButton"
import useWindowDimensions from "components/Common/useWindowDimensions"
import { LeftArrow, RightArrow } from "components/icons"
import { FeedCategoryCaptions, FeedData } from "data/Profile"
import { Top_Daos } from "data/Sidebar"
import { useState } from "react"
import CommonDAOavatar from "./CommonDAOavatar"
import ProfileFeed from "./ProfileFeed"

const ProfileFeedContent = ({ sidebarToggler }) => {

    const rightScroll = () => {
        document.querySelector(".profile-feed-category").scrollLeft += 80;
    };

    const leftScroll = () => {
        document.querySelector(".profile-feed-category").scrollLeft -= 80;
    };

    const [activeIndex, setActiveIndex] = useState(0)

    const { height, width } = useWindowDimensions()
    var max = width > 1850 ? 6 : width > 1480 ? 5 : width > 1280 ? 4 : width > 640 ? 6 : 5
    var j = 0
    const top_daos_avatars = Top_Daos.avatars.map(function (i, j) {
        if (j === max) return

        j++
        return <CommonDAOavatar img_url={i.url} key={j} />
    })

    return (
        <div className="flex
                            custom-2xl:flex-row xl:flex-row sm:flex-col xs:flex-col
                            justify-between ">
            <div className="flex flex-col custom-2xl:w-[72%] xl:w-[72%] sm:w-[100%]">
                <div className="relative w-fit">
                    <div className={`profile-feed-category flex flex-row relative my-[31px] lg:w-fit ${sidebarToggler ? "sm:w-[59vw]" : "md:w-fit sm:w-[80vw]"}  xs:w-[87vw]
                                        overflow-x-scroll`}>
                        {[0, 1, 2, 3].map((i, index) => (
                            <FeedCategoryButton isActive={activeIndex === i} key={index} caption={FeedCategoryCaptions[i]} onClick={() => setActiveIndex(i)} />
                        ))}
                    </div>
                    <div className="absolute right-[-3px] text-white top-[10px] sm:hidden xs:block">
                        <button onClick={rightScroll} className="bg-gradient-to-l from-[rgba(19,19,20,1)] via-[rgba(19,19,20,0.8)] to-[rgba(19,19,20,0)] pl-[35px] h-[73px]"><RightArrow /></button>
                    </div>

                    <div className="absolute left-[-3px] text-white top-[10px] sm:hidden xs:block">
                        <button onClick={leftScroll} className="bg-gradient-to-r from-[rgba(19,19,20,1)] via-[rgba(19,19,20,0.8)] to-[rgba(19,19,20,0)] pr-[35px] h-[73px]"><LeftArrow /></button>
                    </div>
                </div>
                <div className="flex flex-col">
                    {
                        FeedData.map((i, index) => (
                            <ProfileFeed badgeUrl={i.badgeUrl} key={index} avatarUrl={i.avatarUrl} domainName={i.domainName} date={i.date} content={i.content}
                                imageUrl={i.imageUrl ? i.imageUrl : null} retweets={i.retweets ? i.retweets : null}
                                twWithQuotes={i.twWithQuotes ? i.twWithQuotes : null} likes={i.likes ? i.likes : null} />
                        )
                        )
                    }
                </div>
            </div>

            <div className="flex flex-col  mb-[30px]
                                custom-2xl:mt-[104px] xl:mt-[104px] sm:mt-[20px]
                                custom-2xl:w-[25%] xl:w-[25%] sm:w-[100%]
                                pt-[24px] pb-[32px] px-[32px] rounded-[20px] bg-[#19191a] h-fit">
                <div className="flex justify-left font-500 text-[#f3f3f3] text-[20px]">
                    Common DAO
                </div>

                <div className="flex flex-row justify-between mt-[24px] pb-[16px] border-b-[1px] border-b-[#272829]">
                    {top_daos_avatars}
                </div>

                <div className="flex justify-start items-center py-[24px] font-500 text[20px] text-[#f3f3f3]">
                    Roles
                </div>
                {
                    [1, 2, 3, 4].map((i, index) => {
                        return (
                            <DAORoleButton description="Developer" key={index} caption="Big Star" onClick={() => (alert("THE ROLE OF THIS DAO."))} icon={`/images/DAO_avatars/top_daos/top_daos(${i}).png`} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProfileFeedContent