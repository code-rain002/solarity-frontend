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
        no: 0,
        price : 1,
        imgUrl : "/images/marketplace/rooms/0.jpg",
        valueIcon: <EthereumIcon />,
        walletIcon : <SolanaIcon />,
        collectionName : "Solana Money Boys",
        roomName : "Money Boys",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,eget quisque pharetra, nisl. Nisl a proin a commodo libero purusduis. Leo, condimentum viverra mattis feugiat egestas est at nec.Praesent vitae fames feugiat diam mauris. Fringilla posuere quamenim id urna. Arcu, ut magna cursus pharetra semper a.",
    },
    {
        no: 1,
        price : 1,
        imgUrl : "/images/marketplace/rooms/1.png",
        valueIcon: <EthereumIcon />,
        walletIcon : <SolanaIcon />,
        collectionName : "SolGods",
        roomName : "SolGods",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,eget quisque pharetra, nisl. Nisl a proin a commodo libero purusduis. Leo, condimentum viverra mattis feugiat egestas est at nec.Praesent vitae fames feugiat diam mauris. Fringilla posuere quamenim id urna. Arcu, ut magna cursus pharetra semper a.",
    },
    {
        no: 2,
        price : 1,
        imgUrl : "/images/marketplace/rooms/2.jpg",
        valueIcon: <EthereumIcon />,
        walletIcon : <SolanaIcon />,
        collectionName : "Solarity",
        roomName : "Solarity Gallery",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,eget quisque pharetra, nisl. Nisl a proin a commodo libero purusduis. Leo, condimentum viverra mattis feugiat egestas est at nec.Praesent vitae fames feugiat diam mauris. Fringilla posuere quamenim id urna. Arcu, ut magna cursus pharetra semper a.",
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