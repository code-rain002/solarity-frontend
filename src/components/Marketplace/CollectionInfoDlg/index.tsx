import React from 'react'
import BuyButton from './BuyButton'
import Info from './Info'
import { BuyButtonProps } from './BuyButton'
import { InfoProps } from './Info'
import { RootStateOrAny, useSelector } from 'react-redux'

type CollectionInfoDlgType = {
    buy: Function;
}

function CollectionInfoDlg(props: CollectionInfoDlgType) {
    const { selectedRoom } = useSelector((state: RootStateOrAny) => ({
        selectedRoom: state.marketplace.selectedRoom,
    }))

    return (
        <div className='items-center flex flex-col justify-between md:p-[40px] xs:p-[24px] md:pb-0 xs:pb-[24px] md:h-[496px]'>
            <div className=''>
                <Info title={selectedRoom.collectionName} subtitle={selectedRoom.roomName} description={selectedRoom.description} />
            </div>
            <div className='flex items-end'>
                <BuyButton buy={props.buy} price={selectedRoom.price} />
            </div>
        </div>
    )
}

export default CollectionInfoDlg