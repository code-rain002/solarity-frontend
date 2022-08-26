import React from 'react'
import BuyButton from './BuyButton'
import Info from './Info'
import { BuyButtonProps } from './BuyButton'
import { InfoProps } from './Info'

export type CollectionInfoDlgProps = BuyButtonProps & InfoProps;

function CollectionInfoDlg(props: CollectionInfoDlgProps) {
    return (
        <div className='items-center flex flex-col justify-between md:p-[40px] xs:p-[24px] md:pb-0 xs:pb-[24px] md:h-[496px]'>
            <div className=''>
                <Info title={props.title} subtitle={props.subtitle} description={props.description} />
            </div>
            <div className='flex items-end'>
                <BuyButton buy={props.buy} price={props.price} />
            </div>
        </div>
    )
}

export default CollectionInfoDlg