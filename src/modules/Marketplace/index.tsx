import Filter from "components/Marketplace/Filter"
import NFTItems from "components/Marketplace/NFTItems"
import Rooms from "components/Marketplace/Rooms"
import { RoomItemProps } from "components/Marketplace/Rooms/Items/Item"
import React from "react"
import { rooms } from "../../data/Marketplace"
import { categoriesData, collectionsData } from 'data/Marketplace';
import { RootStateOrAny, useSelector } from "react-redux"

interface MarketPlaceProps {
    visitRoom: (RoomItemProps, number) => void;
    searchString: string;
    setSearchString: any;
}

const Marketplace = (props: MarketPlaceProps) => {
    const { rooms } = useSelector((state: RootStateOrAny) => ({
        rooms: state.chat.rooms,
    }))

    return (
        <div className="mt-[36px]">
            <Filter collections={collectionsData} categories={categoriesData} setSearchString={props.setSearchString} searchString={props.searchString} />
            <Rooms count={4} headerTitle="Otherdeed collection" rooms={rooms} visitRoom={props.visitRoom} />
            <NFTItems />
        </div>
    )
}

export default Marketplace