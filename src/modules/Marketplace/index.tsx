import Filter from "components/Marketplace/Filter"
import NFTItems from "components/Marketplace/NFTItems"
import Rooms from "components/Marketplace/Rooms"
import React, { useState } from "react"
import { rooms } from "../../data/Marketplace"
import { categoriesData, collectionsData } from 'data/Marketplace';

interface MarketPlaceProps {
    searchString: string;
    setSearchString: any;
}

const Marketplace = (props: MarketPlaceProps) => {
    const [activeCategory, setActiveCategory] = useState('All categories');
    const [activeCollection, setActiveCollection] = useState('All collections');

    return (
        <div className="mt-[36px]">
            <Filter
                categories={categoriesData}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                collections={collectionsData}
                activeCollection={activeCollection}
                setActiveCollection={setActiveCollection}
                setSearchString={props.setSearchString}
                searchString={props.searchString}
            />
            {(activeCategory == "All categories" || activeCategory == "Rooms") && (
                <Rooms count={3} headerTitle="Otherdeed collection" rooms={rooms} activeCollection={activeCollection} />
            )}
            {(activeCategory == "All categories" || activeCategory == "NFTs") && (
                <NFTItems />
            )}
        </div>
    )
}

export default Marketplace