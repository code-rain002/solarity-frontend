import React, { useState } from 'react'
import NFTItem from './NFTItem'
import { roomsetting_nfts } from '../../../../../data/Marketplace'

function NFTList() {

    const [selectedNFT, setSelectedNFT] = useState(0);

    return (
        <div className='grid grid-cols-2 gap-6 overflow-y-auto'>
            {
                roomsetting_nfts.map(nft => (
                    <NFTItem collectionName={nft.collectionName} nftName={nft.nftName} imgUrl={nft.imgUrl} />
                ))
            }
        </div>
    )
}

export default NFTList