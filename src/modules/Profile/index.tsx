import React from "react"
import {useState} from 'react'
import TabItem from "../../components/Common/Forms/TabItem"
import FeedCategoryButton from "../../components/Common/Buttons/FeedCategoryButton"
import {FeedData} from "../../data/Profile"
import {FeedCategoryCaptions} from "../../data/Profile"
import ProfileFeed from "components/Profile/ProfileFeed"
import { Top_Daos } from "data/Sidebar"
import { DAORoleButton } from "components/Common/Buttons/index"
import CommonDAOavatar from "components/Profile/CommonDAOavatar"

var j = 0
const top_daos_avatars = Top_Daos.avatars.map(function(i){
    if(j == 6)
    {
        return
    }
    j++
    return <CommonDAOavatar key={i.name} img_url={i.url} />
})

const Profile = () => {
    
    const [activeIndex, setActiveIndex] = useState(0)
    const [tabIndex, setTabIndex] = useState(0)

    return (
        <div className="flex flex-col w-full">
            <div className="my-[5px] text-[#929298] font-400 text-[18px]">
                A button with an eye has been added to make it clear to the user how to enable a preview of the room.
            </div>

            <div className="flex flex-row my-8 w-full border-b-[1px] border-b-semiSplitter">
                <TabItem title="Feed" selectedStatus={tabIndex === 0} onClick={() => setTabIndex(0)} />
                <TabItem title="Gallery" selectedStatus={tabIndex === 1} onClick={() => setTabIndex(1)} />
                <TabItem title="Rooms" selectedStatus={tabIndex === 2} onClick={() => setTabIndex(2)} />
                <TabItem title="Communities" selectedStatus={tabIndex === 3} onClick={() => setTabIndex(3)} />
            </div>

            <div className="flex flex-row ">
                {[0,1,2,3].map(i => (
                    <FeedCategoryButton isActive={activeIndex === i} caption={FeedCategoryCaptions[i]} onClick={() => setActiveIndex(i)} />
                ))}
            </div>

            <div className="flex flex-row justify-between mt-[32px]">
                <div className="flex flex-col w-[72%]">
                    {
                    FeedData.map( i => (
                            <ProfileFeed avatarUrl={i.avatarUrl} domainName={i.domainName} date={i.date} content={i.content}
                                imageUrl={i.imageUrl ? i.imageUrl : null} retweets={i.retweets ? i.retweets : null }
                                twWithQuotes={i.twWithQuotes ? i.twWithQuotes : null} likes={i.likes ? i.likes : null} />
                            )
                        )
                    }
                </div>

                <div className="flex flex-col w-[25%] pt-[24px] pb-[32px] px-[32px] rounded-[20px] bg-[#19191a] h-fit">
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
                        [1, 2, 3, 4].map((i) => {
                            return (
                                <DAORoleButton description="Developer" caption="Big Star" onClick={() => (alert("THE ROLE OF THIS DAO."))} icon={`/images/DAO_avatars/top_daos/top_daos(${i}).png`}/>
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Profile