import Header from "components/Marketplace/NFTItems/Header";
import LiveRoomItems from "components/Marketplace/NFTItems/LiveRoomItems";
import GameItems from "components/Marketplace/NFTItems/GameItems";
import { LIVE_ROOMS_EXPLORE, GAMES_EXPLORE } from "data/Explore";
import React from "react"

const Explore = () => {
    const RightArrowClick = () => {
        document.querySelector('.nft-items').scrollLeft += 200;
    }

    const LeftArrowClick = () => {
        document.querySelector('.nft-items').scrollLeft -= 200;
    }

    return (
        <div className='grid grid-cols-1 pb-10'>
            <Header name={'Explore Live rooms right now'} count={6} onRightArrowClick={RightArrowClick} onLeftArrowClick={LeftArrowClick} />
            <div className=' col-span-1'>
                <LiveRoomItems items={LIVE_ROOMS_EXPLORE} />
            </div>
            <Header name={'Jump Back In'} count={6} onRightArrowClick={RightArrowClick} onLeftArrowClick={LeftArrowClick} />
            <div className=' col-span-1'>
                <GameItems items={GAMES_EXPLORE} />
            </div>
        </div>
    )
}

export default Explore