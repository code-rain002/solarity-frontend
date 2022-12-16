import Image from 'next/image';
import React from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux';
import { setSelectedGame } from 'redux/slices/commonSlice';

export interface ItemProps {
    id?: number;
    avatarUrl: string;
    backUrl: string;
    communityName: string;
    collectionName?: string;
    memberNumber: number;
    icon: any;
    type?: string;
    totalSupply?: number;
    description?: string;
    walletAddress?: string;
    websiteUrl?: string;
    twitterUrl?: string;
    discordUrl?: string;
    iframeUrl?: string;
    walletIcon?: any;
}

function Item(props: ItemProps) {
    const router = useRouter();
    const dispatch = useDispatch();

    const goToFeed = () => {
        dispatch(setSelectedGame({
            title: props.communityName,
            websiteUrl: props.websiteUrl,
        }));
        router.push('/community/feed/' + props.id + '?type=' + props.type);
    }

    return (
        <div onClick={goToFeed} className='relative border-[#272829] border-[1.2px] flex flex-col justify-center rounded-[20px] hover:border-primary hover:cursor-pointer'>
            <Image className=' rounded-t-[20px]' src={props.backUrl} layout='responsive' height={114} width={258} />
            <div className='mt-[48px] text-[18px] font-["outfit"] text-[#F3F3F3] font-[500] text-center'>{props.communityName}</div>
            <div className='mt-[10px] pb-[24px] flex justify-center gap-[8px]'>
                {props.icon}
                <div className='text-[14px] text-[#929298] font-[500px] font-["outfit"]'>{props.memberNumber} members</div>
            </div>
            <div className='absolute top-14 left-1/2 transform -translate-x-1/2
                        w-1/3 h-1/3
                        '>
                <div className='rounded-[20px] border-[3px] border-black'>
                    <Image src={props.avatarUrl} className="rounded-[20px]" width={100} height={100} layout="responsive" />
                </div>
            </div>
        </div>
    )
}

export default Item