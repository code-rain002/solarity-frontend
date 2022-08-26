import React from 'react'
import Header from './Header'
import Items from './Items'
import { nftItems } from 'data/Marketplace'

export default function NFTItems() {

  const RightArrowClick = () => {
    document.querySelector('.nft-items').scrollLeft += 200;
  }

  const LeftArrowClick = () => {
    document.querySelector('.nft-items').scrollLeft -= 200;
  }

  return (
    <div className='grid grid-cols-1'>
      <Header name={'Solana Money Boys'} count={13} onRightArrowClick={RightArrowClick} onLeftArrowClick={LeftArrowClick} />
      <div className=' col-span-1'>
        <Items items={nftItems.items} />
      </div>
    </div>
  )
}
