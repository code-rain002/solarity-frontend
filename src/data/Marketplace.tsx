import { NFTItemsProps } from "components/Marketplace/NFTItems/Items";
import { EthereumIcon } from "components/icons/EthereumIcon";
import { FilterItemProps } from "components/Marketplace/Filter/FilterItem";
import { RoomItemProps } from "components/Marketplace/Rooms/Items/Item";
import { SolanaIcon } from "components/icons";
import { RoomSettingNFTItemProps } from "components/Marketplace/RoomSettings/GeneralInfoBox/NFTList/NFTItem";

export const nftItems: NFTItemsProps = {
    items: [
        {
            name: 'Solana Money Boys',
            description: 'Solana Money Boy',
            value: 0.1,
            imgUrl: '/images/marketplace/nfts/nft1.png',
            id: 682,
            icon: <EthereumIcon />
        },
        {
            name: 'Solana Money Boys',
            description: 'Solana Money Boy',
            value: 0.1,
            imgUrl: '/images/marketplace/nfts/nft2.png',
            id: 682,
            icon: <EthereumIcon />
        },
        {
            name: 'Solana Money Boys',
            description: 'Solana Money Boy',
            value: 0.1,
            imgUrl: '/images/marketplace/nfts/nft3.png',
            id: 682,
            icon: <EthereumIcon />
        },
        {
            name: 'Solana Money Boys',
            description: 'Solana Money Boy',
            value: 0.1,
            imgUrl: '/images/marketplace/nfts/nft4.png',
            id: 682,
            icon: <EthereumIcon />
        },
        {
            name: 'Solana Money Boys',
            description: 'Solana Money Boy',
            value: 0.1,
            imgUrl: '/images/marketplace/nfts/nft5.png',
            id: 682,
            icon: <EthereumIcon />
        },
        {
            name: 'Solana Money Boys',
            description: 'Solana Money Boy',
            value: 0.1,
            imgUrl: '/images/marketplace/nfts/nft6.png',
            id: 682,
            icon: <EthereumIcon />
        },
        {
            name: 'Solana Money Boys',
            description: 'Solana Money Boy',
            value: 0.1,
            imgUrl: '/images/marketplace/nfts/nft1.png',
            id: 682,
            icon: <EthereumIcon />
        },
        {
            name: 'Solana Money Boys',
            description: 'Solana Money Boy',
            value: 0.1,
            imgUrl: '/images/marketplace/nfts/nft2.png',
            id: 682,
            icon: <EthereumIcon />
        },
        {
            name: 'Solana Money Boys',
            description: 'Solana Money Boy',
            value: 0.1,
            imgUrl: '/images/marketplace/nfts/nft3.png',
            id: 682,
            icon: <EthereumIcon />
        },
        {
            name: 'Solana Money Boys',
            description: 'Solana Money Boy',
            value: 0.1,
            imgUrl: '/images/marketplace/nfts/nft4.png',
            id: 682,
            icon: <EthereumIcon />
        },
        {
            name: 'Solana Money Boys',
            description: 'Solana Money Boy',
            value: 0.1,
            imgUrl: '/images/marketplace/nfts/nft5.png',
            id: 682,
            icon: <EthereumIcon />
        },
    ]
}

export const categoriesData: FilterItemProps[] = [
    {
        name: 'All categories',
        active: true
    },
    {
        name: 'Rooms',
        active: false
    },
    {
        name: 'NFT',
        active: false
    },
]

export const collectionsData: FilterItemProps[] = [
    {
        name: 'All Collections',
        active: true
    },
    {
        name: 'Solarity',
        active: false
    },
    {
        name: 'Monkeys',
        active: false
    },
    {
        name: 'Goblintown',
        active: false
    },
    {
        name: 'Moonbirds Odities',
        active: false
    },
    {
        name: 'Chimpers',
        active: false
    },
    {
        name: 'Azuki',
        active: false
    },
    {
        name: 'Cuiosities',
        active: false
    },
    {
        name: 'Moonbirds',
        active: false
    },
    {
        name: 'CloneX',
        active: false
    },
    {
        name: 'Chimpers',
        active: false
    },
    {
        name: 'Azuki',
        active: false
    },
    {
        name: 'Cuiosities',
        active: false
    },
    {
        name: 'Moonbirds',
        active: false
    },
    {
        name: 'CloneX',
        active: false
    }
]

export const rooms: RoomItemProps[] = [
    {
        price : 5,
        imgUrl : "/images/experience/room_images/room_1.jpg",
        valueIcon: <EthereumIcon />,
        walletIcon : <SolanaIcon />,
        collectionName : "CollectionName",
        roomName : "The Vincent Van Dough Gallery",
    },
    {
        price : 5,
        imgUrl : "/images/experience/room_images/room_2.jpg",
        valueIcon: <EthereumIcon />,
        walletIcon : <SolanaIcon />,
        collectionName : "CollectionName",
        roomName : "Teufzer",
    },
    {
        price : 5,
        imgUrl : "/images/experience/room_images/room_3.jpg",
        valueIcon: <EthereumIcon />,
        walletIcon : <SolanaIcon />,
        collectionName : "CollectionName",
        roomName : "RESSURECTION enriched with death",
    },
    {
        price : 5,
        imgUrl : "/images/experience/room_images/room_4.jpg",
        valueIcon: <EthereumIcon />,
        walletIcon : <SolanaIcon />,
        collectionName : "Solana Money Boys",
        roomName : "Meta trap house",
    },
    {
        price : 5,
        imgUrl : "/images/experience/room_images/room_5.jpg",
        valueIcon: <EthereumIcon />,
        walletIcon : <SolanaIcon />,
        collectionName : "CollectionName",
        roomName : "This room is really fantastic",
    },
    {
        price : 5,
        imgUrl : "/images/experience/room_images/room_6.jpg",
        valueIcon: <EthereumIcon />,
        walletIcon : <SolanaIcon />,
        collectionName : "what do you want?",
        roomName : "Dummy text goes here",
    },
    {
        price : 5,
        imgUrl : "/images/experience/room_images/room_7.jpg",
        valueIcon: <EthereumIcon />,
        walletIcon : <SolanaIcon />,
        collectionName : "Quiet room",
        roomName : "Leave me alone",
    },
    {
        price : 5,
        imgUrl : "/images/experience/room_images/room_8.jpg",
        valueIcon: <EthereumIcon />,
        walletIcon : <SolanaIcon />,
        collectionName : "So Crowd",
        roomName : "The Vincent Van Dough Gallery",
    },
]


export const roomsetting_nfts: RoomSettingNFTItemProps[] = [
    {
        collectionName: 'CollectionName',
        nftName: 'Solana Money Boys',
        imgUrl: '/images/marketplace/roomsetting-nfts/nft1.png'
    },
    {
        collectionName: 'CollectionName',
        nftName: 'RESSURECTION enriched with death',
        imgUrl: '/images/marketplace/roomsetting-nfts/nft2.png'
    },

]