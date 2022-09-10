import FeedCategoryButton from 'components/Common/Buttons/FeedCategoryButton';
import { LeftArrow, RightArrow } from 'components/icons';
import ProfileFeed from 'components/Profile/ProfileFeed';
import { FeedCategoryCaptions, FeedData } from 'data/Profile';
import React, { useState } from 'react'

function FeedContent() {
    const rightScroll = () => {
        document.querySelector(".feed-category").scrollLeft += 80;
    };

    const leftScroll = () => {
        document.querySelector(".feed-category").scrollLeft -= 80;
    };

    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className="flex flex-col custom-2xl:w-[72%] xl:w-[72%] sm:w-[100%]">
            <div className="relative w-fit">
                <div className={`feed-category flex flex-row relative my-[31px] lg:w-fit   xs:w-[87vw]
                                        overflow-x-scroll`}>
                    {[0, 1, 2, 3].map(i => (
                        <FeedCategoryButton isActive={activeIndex === i} caption={FeedCategoryCaptions[i]} onClick={() => setActiveIndex(i)} />
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
                    FeedData.map(i => (
                        <ProfileFeed badgeUrl={i.badgeUrl} avatarUrl={i.avatarUrl} domainName={i.domainName} date={i.date} content={i.content}
                            imageUrl={i.imageUrl ? i.imageUrl : null} retweets={i.retweets ? i.retweets : null}
                            twWithQuotes={i.twWithQuotes ? i.twWithQuotes : null} likes={i.likes ? i.likes : null} />
                    )
                    )
                }
            </div>
        </div>
    )
}

export default FeedContent