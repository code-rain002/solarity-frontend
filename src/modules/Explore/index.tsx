import Header from "components/Marketplace/NFTItems/Header";
import LiveRoomItems from "components/Marketplace/NFTItems/LiveRoomItems";
import GameItems from "components/Marketplace/NFTItems/GameItems";
import { LIVE_ROOMS_EXPLORE } from "data/Explore";
import { games } from 'data/Community';
import React, { useEffect } from "react"
import { RootStateOrAny, useSelector } from "react-redux";
import ACTIONS from "config/actions";

const Explore = () => {
    const { rooms } = useSelector((state: RootStateOrAny) => ({
        rooms: state.chat.rooms
    }))

    useEffect(() => {
        setTimeout(() => {
            if (!!(window as any).socket)
                (window as any).socket.emit(ACTIONS.ROOM_LIST, {});
        }, 10);
    }, []);

    const roomRightArrowClick = () => {
        (document as any).querySelector('.room-items').scrollLeft += 200;
    }
    const roomLeftArrowClick = () => {
        (document as any).querySelector('.room-items').scrollLeft -= 200;
    }
    const gameRightArrowClick = () => {
        (document as any).querySelector('.game-items').scrollLeft += 200;
    }
    const gameLeftArrowClick = () => {
        (document as any).querySelector('.game-items').scrollLeft -= 200;
    }

    return (
        <div className='grid grid-cols-1 pb-10'>
            <Header name={'Explore Live rooms right now'} count={rooms.length} onRightArrowClick={roomRightArrowClick} onLeftArrowClick={roomLeftArrowClick} />
            <div className=' col-span-1'>
                <LiveRoomItems items={rooms} />
            </div>
            <Header name={'Jump Back In'} count={games.length} onRightArrowClick={gameRightArrowClick} onLeftArrowClick={gameLeftArrowClick} />
            <div className=' col-span-1'>
                <GameItems items={games} />
            </div>
        </div>
    )
}

export default Explore