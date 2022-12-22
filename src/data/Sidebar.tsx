import React, { ReactNode } from 'react'

import {
    DaosType
} from 'modal/sidebar'

export const Your_Daos: DaosType = {
    title: 'Groups',
    avatars: [
        { url: "/images/daos/solgods.jpeg", name: 'Solgods' },
        { url: "/images/daos/moneyboys.jpeg", name: 'Official fortnite' },
        { url: "/images/daos/bayc.jpeg", name: 'Axie infinity' },
        { url: "/images/daos/solgods2.jpg", name: 'Tommy Init’s' },
    ]
}

export const Top_Daos: DaosType = {
    title: 'DMs',
    avatars: [
        { url: "/images/daos/cryptopunk.png", name: 'Axie infinity' },
        { url: "/images/daos/doodles.png", name: 'Apex Legends' },
    ]
}

export const MagnifyIcon: ReactNode = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#29B080" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
)