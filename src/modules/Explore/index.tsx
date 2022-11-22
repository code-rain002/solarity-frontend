import Header from "components/Marketplace/NFTItems/Header";
import LiveRoomItems from "components/Marketplace/NFTItems/LiveRoomItems";
import GameItems from "components/Marketplace/NFTItems/GameItems";
import { LIVE_ROOMS_EXPLORE, GAMES_EXPLORE } from "data/Explore";
import React from "react"

const Explore = () => {
    const roomRightArrowClick = () => {
        document.querySelector('.room-items').scrollLeft += 200;
    }

    const roomLeftArrowClick = () => {
        document.querySelector('.room-items').scrollLeft -= 200;
    }

    const gameRightArrowClick = () => {
        document.querySelector('.game-items').scrollLeft += 200;
    }

    const gameLeftArrowClick = () => {
        document.querySelector('.game-items').scrollLeft -= 200;
    }

    return (
        <div className='grid grid-cols-1 pb-10'>
            <Header name={'Explore Live rooms right now'} count={6} onRightArrowClick={roomRightArrowClick} onLeftArrowClick={roomLeftArrowClick} />
            <div className=' col-span-1'>
                <LiveRoomItems items={LIVE_ROOMS_EXPLORE} />
            </div>
            <Header name={'Jump Back In'} count={6} onRightArrowClick={gameRightArrowClick} onLeftArrowClick={gameLeftArrowClick} />
            <div className=' col-span-1'>
                <GameItems items={GAMES_EXPLORE} />
            </div>
        </div>
    )
}

export default Explore