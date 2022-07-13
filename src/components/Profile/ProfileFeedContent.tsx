import DAORoleButton from "components/Common/Buttons/DAORoleButton"
import FeedCategoryButton from "components/Common/Buttons/FeedCategoryButton"
import useWindowDimensions from "components/Common/useWindowDimensions"
import { FeedCategoryCaptions, FeedData } from "data/Profile"
import { Top_Daos } from "data/Sidebar"
import { useState } from "react"
import CommonDAOavatar from "./CommonDAOavatar"
import ProfileFeed from "./ProfileFeed"

const ProfileFeedContent = () => {

    const [activeIndex, setActiveIndex] = useState(0)

    const {height, width} = useWindowDimensions()
    var max = width > 1850 ? 6 : width > 1480 ? 5 : width > 1280 ? 4 : 6
    var j = 0
    const top_daos_avatars = Top_Daos.avatars.map(function(i){
        if(j === max) return
        
        j++
        return <CommonDAOavatar key={i.name} img_url={i.url} />
    })
    
    return (
        <div className="flex
                            custom-2xl:flex-row xl:flex-row sm:flex-col
                            justify-between ">
                <div className="flex flex-col custom-2xl:w-[72%] xl:w-[72%] sm:w-[100%]">
                    <div className="flex flex-row relative my-[31px]">
                        {[0,1,2,3].map(i => (
                            <FeedCategoryButton isActive={activeIndex === i} caption={FeedCategoryCaptions[i]} onClick={() => setActiveIndex(i)} />
                        ))}
                    </div>
                    <div className="flex flex-col">
                        {
                        FeedData.map( i => (
                                <ProfileFeed badgeUrl={i.badgeUrl} avatarUrl={i.avatarUrl} domainName={i.domainName} date={i.date} content={i.content}
                                    imageUrl={i.imageUrl ? i.imageUrl : null} retweets={i.retweets ? i.retweets : null }
                                    twWithQuotes={i.twWithQuotes ? i.twWithQuotes : null} likes={i.likes ? i.likes : null} />
                                )
                            )
                        }
                    </div>
                </div>

                <div className="flex flex-col 
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
                        [1, 2, 3, 4].map((i) => {
                            return (
                                <DAORoleButton description="Developer" caption="Big Star" onClick={() => (alert("THE ROLE OF THIS DAO."))} icon={`/images/DAO_avatars/top_daos/top_daos(${i}).png`}/>
                            )
                        })
                    }
                    
                </div>
            </div>
    )
}

export default ProfileFeedContent