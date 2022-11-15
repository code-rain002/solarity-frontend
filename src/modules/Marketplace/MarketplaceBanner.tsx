import React, { useEffect, useState } from 'react'
import Image from "next/image"
import CollectionInfoDlg from 'components/Marketplace/CollectionInfoDlg'
import { ExpandIcon } from 'components/icons/ExpandIcon';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { setVisitFlag } from 'redux/slices/profileSlice';
import { useRouter } from 'next/router';


export type MarketPlaceBannerType = {
    buy: Function;
    activeRoom: string;
    isDlg: boolean;
    isExpand: boolean;
}

const MarketplaceBanner = (props: MarketPlaceBannerType) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { selectedRoom } = useSelector((state: RootStateOrAny) => ({
        selectedRoom: state.marketplace.selectedRoom,
    }))

    const expandRoom = () => {
        dispatch(setVisitFlag(1));
        router.push(`/profile/editroom?no=${selectedRoom.roomNo}`);
    }

    useEffect(() => {
        document.getElementsByTagName('html')[0].classList.remove('a-fullscreen');
    }, [])

    return (
        <div className={`rounded-[25px] md:bg-[#1A1A1C] md:flex xs:flex md:flex-row xs:flex-col justify-between ${props.isDlg ? "" : "xs:hidden"}`}>
            <div className="md:basis-3/4 relative rounded-[25px] overflow-hidden md:h-[496px] xs:h-[180px]">
                <Image src={selectedRoom.imgUrl} layout="responsive" width={1346} height={496} />
                <div
                    className={`absolute md:top-[24px] md:right-[24px] transform md:translate-x-0 md:translate-y-0 xs:top-1/2 xs:right-1/2 xs:translate-x-1/2 xs:-translate-y-1/2 flex cursor-pointer w-[52px] h-[52px] rounded-[15px] border-[#272829] border-[1px] items-center justify-center bg-globalBgColor`}
                    onClick={expandRoom}
                >
                    <ExpandIcon />
                </div>
            </div>
            <div className='md:basis-1/4'>
                <CollectionInfoDlg buy={props.buy} />
            </div>
        </div>
    )
}

export default MarketplaceBanner