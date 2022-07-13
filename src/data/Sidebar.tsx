import React, { ReactNode } from 'react'

import {
    DaosType
} from 'modal/sidebar'

export const Your_Daos: DaosType = {
    title : 'Your DAOs',
    avatars : [
        { url : "/images/DAO_avatars/your_daos/your_daos(1).png", name : 'Solgods'},
        { url : "/images/DAO_avatars/your_daos/your_daos(2).png", name : 'Official fortnite'},
        { url : "/images/DAO_avatars/your_daos/your_daos(3).png", name : 'MrBeast Gaming'}
    ]
}

export const Top_Daos: DaosType = {
    title : 'Top DAOs',
    avatars : [
        { url : "/images/DAO_avatars/top_daos/top_daos(1).png", name : 'Axie infinity'},
        { url : "/images/DAO_avatars/top_daos/top_daos(2).png", name : 'Apex Legends'},
        { url : "/images/DAO_avatars/top_daos/top_daos(3).png", name : 'Tommy Init’s'},
        { url : "/images/DAO_avatars/top_daos/top_daos(4).png", name : 'Servidor De Goularde'},
        { url : "/images/DAO_avatars/top_daos/top_daos(5).png", name : 'Rainbow 6'},
        { url : "/images/DAO_avatars/top_daos/top_daos(6).png", name : 'Rocket League'},
        { url : "/images/DAO_avatars/top_daos/top_daos(7).png", name : 'LOUD'},
        { url : "/images/DAO_avatars/top_daos/top_daos(8).png", name : 'Elite Customes'},
        { url : "/images/DAO_avatars/top_daos/top_daos(9).png", name : 'SplitGarts'},
        { url : "/images/DAO_avatars/top_daos/top_daos(10).png", name : 'The End'},
    ]
}

export const MagnifyIcon:ReactNode = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#29B080" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
)