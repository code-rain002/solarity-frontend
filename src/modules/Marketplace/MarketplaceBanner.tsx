import React, { useEffect, useState } from 'react'
import Image from "next/image"
import CollectionInfoDlg from 'components/Marketplace/CollectionInfoDlg'
import { ExpandIcon } from 'components/icons/ExpandIcon';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { setVisitFlag } from 'redux/slices/profileSlice';
import { setRoom } from 'redux/slices/marketplaceSlice';
import { useRouter } from 'next/router';
import { demoRooms } from './../../data/Marketplace';

export type MarketPlaceBannerType = {
    buy: Function;
    activeRoom: string;
    isDlg: boolean;
    isExpand: boolean;
}

const MarketplaceBanner = (props: MarketPlaceBannerType) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { selectedRoom, profile } = useSelector((state: RootStateOrAny) => ({
        selectedRoom: state.marketplace.selectedRoom,
        profile: state.profile.data
    }))

    const [isIframe, setIsIframe] = useState(false);
    const [path, setPath] = useState("");

    const expandRoom = () => {
        dispatch(setVisitFlag(1));
        setPath(`/profile/roomview?no=${selectedRoom.no}`);
        setIsIframe(true);
    }

    useEffect(() => {
        setIsIframe(false);
    }, [selectedRoom])

    useEffect(() => {
        document.getElementsByTagName('html')[0].classList.remove('a-fullscreen');
    }, [])

    const chooseFirstRoom = () => {
        dispatch(setRoom(demoRooms[0]))
    }

    return (
        <div className={`rounded-[25px] md:bg-[#1A1A1C] md:flex xs:flex md:flex-row xs:flex-col justify-between ${props.isDlg ? "" : "xs:hidden"}`}>
            <div className="md:basis-3/4 relative rounded-[25px] overflow-hidden md:h-[496px] xs:h-[180px]">
                {!isIframe && (
                    <div>
                        {selectedRoom.imgUrl == undefined ? (
                            <div className='flex border border-[#1A1A1C]'>
                                <div className='relative w-[50%] h-[496px] bg-[#131314]'>
                                    <Image src="/images/intro/slides/rooms.png" layout="fill" />
                                </div>
                                <div className='w-[50%] bg-[#131314] flex items-center justify-center text-center'>
                                    <div>
                                        <h2 className='text-[30px] font-[700] title-color'>ROOMS</h2>
                                        <p className='center text-[19px] font-[500] content-color'>Virtual Experiences for your friends and <br />communities.</p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <Image src={selectedRoom.imgUrl} layout="fill" />
                                <div
                                    className={`absolute md:top-[24px] md:right-[24px] transform md:translate-x-0 md:translate-y-0 xs:top-1/2 xs:right-1/2 xs:translate-x-1/2 xs:-translate-y-1/2 flex cursor-pointer w-[52px] h-[52px] rounded-[15px] border-[#272829] border-[1px] items-center justify-center bg-globalBgColor`}
                                    onClick={expandRoom}
                                >
                                    <ExpandIcon />
                                </div>
                            </div>
                        )}
                    </div>
                )}
                {isIframe && (
                    <div className='w-full md:h-[496px]'>
                        <iframe src={path} frameBorder="0" className="w-full h-full"></iframe>
                    </div>
                )}
            </div>
            <div className='md:basis-1/4'>
                <CollectionInfoDlg buy={selectedRoom.imgUrl ? props.buy : chooseFirstRoom} />
            </div>
        </div>
    )
}

export default MarketplaceBanner