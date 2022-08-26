import Filter from "components/Marketplace/Filter"
import NFTItems from "components/Marketplace/NFTItems"
import Rooms from "components/Marketplace/Rooms"
import { RoomItemProps } from "components/Marketplace/Rooms/Items/Item"
import React from "react"

interface MarketPlaceProps {
    visitRoom: (RoomItemProps, number) => void;
    searchString: string;
    setSearchString: any;
}

const Marketplace = (props: MarketPlaceProps) => {
    return (
        <div>
            <Filter setSearchString={props.setSearchString} searchString={props.searchString} list={[{ name: 'Catagories', active: true}, { name: 'Catagories', active: false}]} />
            <NFTItems />    
            <Rooms visitRoom={props.visitRoom} />
        </div>
    )   
}

export default Marketplace