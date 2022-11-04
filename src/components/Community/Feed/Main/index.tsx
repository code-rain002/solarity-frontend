import TabItem from 'components/Common/Forms/TabItem'
import React, { useEffect, useState } from 'react'
import { communities } from '../../../../data/Community'
import Feed from './Feed'
import FeedGallery from './Gallery'
import FeedMarketplace from './Marketplace'

function Main({ id, visitRoom, setIsMarketplace, activeIndex = 0, setActiveIndex }) {
    const [community, setCommunity] = useState<any>({});

    useEffect(() => {
        setCommunity(communities[parseInt(id)]);
    }, [])


    return (
        <div className='w-full'>
            <div className={`relative w-fit`}>
                <div className={`profile-tab flex flex-row mt-8 relative sm:px-[0px] xs:px-[20px]
                                md:w-full xs:w-[87vw]
                                border-b-[1px] border-b-semiSplitter overflow-x-scroll scroll-smooth`}>
                    <TabItem title="Feed" selectedStatus={activeIndex === 0} onClick={() => {
                        setActiveIndex(0)
                        setIsMarketplace(false)
                    }
                    } />
                    <TabItem title="Gallery" selectedStatus={activeIndex === 1} onClick={() => {
                        setActiveIndex(1)
                        setIsMarketplace(false);
                    }
                    } />
                    <TabItem title="Marketplace" selectedStatus={activeIndex === 2} onClick={() => {
                        setActiveIndex(2)
                        setIsMarketplace(true)
                    }
                    } />
                </div>
            </div>
            {activeIndex === 0 ? <Feed /> : activeIndex === 1 ? <FeedGallery visitRoom={visitRoom} /> : activeIndex === 2 ? <FeedMarketplace visitRoom={visitRoom} /> : ""}
        </div>
    )
}

export default Main