import Filter from 'components/Marketplace/Filter'
import Rooms from 'components/Marketplace/Rooms'
import React from 'react'
import Image from 'next/image'
import { categoriesData, collectionsData, rooms } from '../../../../../data/Community'
import SearchBox from 'components/Common/Forms/SearchBox'


function FeedMarketplace({visitRoom}) {
    return (
        <div>
            <div className='grid grid-cols-12 mt-[36px]'>
                <div className='col-span-3 flex 
                lg:inline-flex md:inline-flex sm:hidden xs:hidden '>
                    <SearchBox searchString={''} setSearchString={() => {}} />
                    <div className='items-center justify-center mx-auto flex'>
                        <Image src={'/images/marketplace/line.png'} height={32} width={1} />
                    </div>
                </div>
                <div className='lg:col-span-9 md:col-span-9 sm:col-span-12 xs:col-span-12'>
                    <Filter collections={collectionsData} categories={categoriesData.slice(0, 2)} setSearchString={() => {}} searchString={''} />
                </div>
            </div>
            <Rooms count={12} headerTitle='Solana Money Boys' rooms={rooms} visitRoom={visitRoom} />
        </div>
    )
}

export default FeedMarketplace