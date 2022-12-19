import { ItemProps } from "components/Community/Communities/Item";
import { FloorPriceIcon } from "components/Community/Feed/Header/Stats/icons/FloorPriceIcon";
import { MembersIcon } from "components/Community/Feed/Header/Stats/icons/MembersIcon";
import { TotalSupplyIcon } from "components/Community/Feed/Header/Stats/icons/TotalSupplyIcon";
import { StatsItemProps } from "components/Community/Feed/Header/Stats/StatsItem";
import { AvatarProps } from "components/Community/Feed/Main/Feed/RightSide/Users/Avatar";
import { EthereumIcon } from "components/icons/EthereumIcon";
import { MemberIcon } from "components/icons/MemberIcon";
import { SolanaLinkIcon } from "components/icons/SolanaLinkIcon";
import { SolanaIcon } from "components/icons/SolanaIcon";
import { FilterItemProps } from "components/Marketplace/Filter/FilterItem";
import { RoomItemProps } from "components/Marketplace/Rooms/Items/Item";

export const communities: ItemProps[] = [
    {
        avatarUrl: '/images/community/avatars/Picture (2).png',
        backUrl: '/images/community/backs/BG (2).png',
        communityName: 'Degods',
        collectionName: 'degods',
        memberNumber: 4500,
        totalSupply: 10000,
        icon: <MemberIcon />,
        description: 'DeGods is a digital art collection and global community of creators, developers, entrepreneurs, athletes, artists, experimenters and innovators.',
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        websiteUrl: "https://degods.com/",
        twitterUrl: "https://twitter.com/DeGodsNFT",
        discordUrl: "https://discord.gg/degods",
        walletIcon: <SolanaLinkIcon />
    },
    {
        avatarUrl: '/images/community/avatars/Picture (7).png',
        backUrl: '/images/community/backs/BG (10).png',
        communityName: 'Solana Monkey Business',
        collectionName: 'solana_monkey_business',
        memberNumber: 2800,
        totalSupply: 5000,
        icon: <MemberIcon />,
        description: "SMB is a collection of 5000 unique randomly generated SolanaMonkeys stored on the blockchain. With their accessibility-oriented design, the monkey's goal is to invade the Solana blockchain with as many individuals as possible, building a large community around them.",
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        websiteUrl: "http://solanamonkey.business/ ",
        twitterUrl: "https://twitter.com/SolanaMBS",
        discordUrl: "https://discord.gg/solanamonkey",
        walletIcon: <SolanaLinkIcon />
    },
    {
        avatarUrl: '/images/community/avatars/Picture (5).png',
        backUrl: '/images/community/backs/BG (9).png',
        communityName: 'Degenerate Ape Academy',
        collectionName: 'degenerate_ape_academy',
        memberNumber: 4500,
        totalSupply: 10000,
        icon: <MemberIcon />,
        description: "Our mission here at the academy is simple: Take 10,000 of the smoothest brained apes, put them all in one location and let the mayhem ensue. The academy was founded on the principles of friendship making, crayon eating and absolute, unregulated, deplorable, degenerate behaviour.",
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        websiteUrl: "https://degenape.academy/",
        twitterUrl: "https://twitter.com/DegenApeAcademy",
        discordUrl: "https://discord.gg/degenapeacademy",
        walletIcon: <SolanaLinkIcon />
    },
    {
        avatarUrl: '/images/community/avatars/Picture (9).png',
        backUrl: '/images/community/backs/BG (7).png',
        communityName: 'The Fracture - SolGods',
        collectionName: 'solgods',
        memberNumber: 3000,
        totalSupply: 6666,
        icon: <MemberIcon />,
        description: "Inspired by metaphysical artist Giorgio de Chirico. The Gods are the legacy 6666 collection within 'The Fracture'. A Brand Born in Blockchain.",
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        websiteUrl: "https://www.thefracture.io/",
        twitterUrl: "https://twitter.com/TheFracture_",
        discordUrl: "https://discord.gg/solgods	https://www.thefracture.io/",
        walletIcon: <SolanaLinkIcon />
    },
    {
        avatarUrl: '/images/community/avatars/Picture (4).png',
        backUrl: '/images/community/backs/BG (4).png',
        communityName: 'Famous Fox Federation',
        collectionName: 'famous_fox_federation',
        memberNumber: 3800,
        totalSupply: 7800,
        icon: <MemberIcon />,
        description: "The Famous Fox Federation, an independent organization of the most fabulously famous foxes on the Blockchain.",
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        websiteUrl: "https://aurory.io/",
        twitterUrl: "https://twitter.com/FamousFoxFed",
        discordUrl: "https://discord.gg/aurory",
        walletIcon: <SolanaLinkIcon />
    }
]

export const games: ItemProps[] = [
    {
        avatarUrl: '/images/community/avatars/Halo.png',
        backUrl: '/images/community/backs/Halo.jpeg',
        itemUrl: '/images/community/posters/evio.png',
        communityName: 'Halo',
        collectionName: 'Halo',
        memberNumber: 2400,
        totalSupply: 1100,
        icon: <MemberIcon />,
        description: "Heroes & Empires has exquisitely digital collectibles created using blockchain technology. Each collectible is matchless, genuine and varies in rarity.",
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        iframeUrl: "https://www.xbox.com/en-US/play/games/halo-infinite-campaign/9NP1P1WFS0LB",
        websiteUrl: "https://ev.io",
        twitterUrl: "https://twitter.com/play_evio",
        discordUrl: "https://discord.gg/NFvd4pWemv",
        walletIcon: <SolanaLinkIcon />
    },
    {
        avatarUrl: '/images/community/avatars/Picture (18).png',
        backUrl: '/images/community/backs/BG (18).png',
        itemUrl: '/images/community/posters/Decentraland.png',
        communityName: 'Decentraland',
        collectionName: 'Decentraland',
        memberNumber: 5700,
        totalSupply: 1234,
        icon: <MemberIcon />,
        description: "Decentraland is a user-owned, Ethereum-based virtual world where you can play, explore, and interact with games and activities. You can also purchase parcels of land on which to build your own environments, marketplaces, and applications.",
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        iframeUrl: "https://play.decentraland.org",
        websiteUrl: "https://home.panzerdogs.io/",
        twitterUrl: "https://twitter.com/panzerdogs",
        discordUrl: "https://discord.gg/panzerdogs",
        walletIcon: <SolanaLinkIcon />
    },
    {
        avatarUrl: '/images/community/avatars/webb.png',
        backUrl: '/images/community/backs/webb.jpeg',
        itemUrl: '/images/community/posters/webb.png',
        communityName: 'WorldWide Webb',
        collectionName: 'WWebb',
        memberNumber: 5700,
        totalSupply: 1234,
        icon: <MemberIcon />,
        description: "Worldwide Webb is an interoperable pixel art MMORPG metaverse game giving utility to popular NFT projects. The game uses NFTs for in-game avatars, pets, lands, NFT Items , and quests. Deployed with a build-first mentality by a group of crypto-native game developers, artists, coders, and marketers; rapidly pushing out new technologies and applications.",
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        iframeUrl: "https://alpha.webb.game/",
        websiteUrl: "https://home.panzerdogs.io/",
        twitterUrl: "https://twitter.com/panzerdogs",
        discordUrl: "https://discord.gg/panzerdogs",
        walletIcon: <SolanaLinkIcon />
    },
    // {
    //     avatarUrl: '/images/community/avatars/Picture (8).png',
    //     backUrl: '/images/community/backs/Aave.gif',
    //     itemUrl: '/images/community/posters/Aave.png',
    //     communityName: 'Aavegotchi',
    //     collectionName: 'Aavegotchi',
    //     memberNumber: 5000,
    //     totalSupply: 2850,
    //     icon: <MemberIcon />,
    //     description: "A yield-generating NFT that doubles as a digital pet. Take care of them, and they’ll take care of you ^_^",
    //     walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
    //     iframeUrl: "https://app.aavegotchi.com/",
    //     websiteUrl: "https://theportal.to/",
    //     twitterUrl: "https://twitter.com/_portals_",
    //     discordUrl: "https://discord.gg/9uMBaCPW3f",
    //     walletIcon: <SolanaLinkIcon />
    // },
    {
        avatarUrl: '/images/community/avatars/Oncyber.png',
        backUrl: '/images/community/backs/Oncyber.png',
        itemUrl: '/images/community/posters/MiniRoyale.png',
        communityName: 'OnCyber',
        collectionName: 'OnCyber',
        memberNumber: 8000,
        totalSupply: 37000,
        icon: <MemberIcon />,
        description: "A multiverse for creators, oncyber is the easiest way for artists and collectors to show their digital assets (NFTs) in fully immersive experiences (3D/VR), for free. Holding an item from any of these collections allows you to use it as a 3D exhibition space for your digital assets oncyber.io/create",
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        iframeUrl: "https://oncyber.io",
        websiteUrl: "https://oncyber.io",
        twitterUrl: "https://twitter.com/MiniNations",
        discordUrl: "https://discord.gg/miniroyale",
        walletIcon: <SolanaLinkIcon />
    },
    {
        avatarUrl: '/images/community/avatars/HeroesEmpire.png',
        backUrl: '/images/community/backs/heroes&empire.jpeg',
        posterUrl: '/images/community/posters/evio.png',
        communityName: 'Heroes & Empires',
        collectionName: 'Heroes & Empires',
        memberNumber: 2400,
        totalSupply: 1100,
        icon: <MemberIcon />,
        description: "Heroes & Empires has exquisitely digital collectibles created using blockchain technology. Each collectible is matchless, genuine and varies in rarity.",
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        iframeUrl: "https://play.heroesempires.com/",
        websiteUrl: "https://ev.io",
        twitterUrl: "https://twitter.com/play_evio",
        discordUrl: "https://discord.gg/NFvd4pWemv",
        walletIcon: <SolanaLinkIcon />
    },

    
    
]

export const stats: StatsItemProps[] = [
    {
        icon: <MembersIcon />,
        count: 445,
        name: 'Members'
    },
    {
        icon: <TotalSupplyIcon />,
        count: 500,
        name: 'Total supply'
    },
    {
        icon: <FloorPriceIcon />,
        count: 0.063,
        unit: 'SOL',
        name: 'Floor price'
    },
]

export const members: AvatarProps[] = [
    {
        imgUrl: '/images/community/members/Avatar.png'
    },
    {
        imgUrl: '/images/community/members/Avatar (1).png'
    },
    {
        imgUrl: '/images/community/members/Avatar (2).png'
    },
    {
        imgUrl: '/images/community/members/Avatar (3).png'
    },
    {
        imgUrl: '/images/community/members/Avatar (4).png'
    },
    {
        imgUrl: '/images/community/members/Avatar (5).png'
    },
    {
        imgUrl: '/images/community/members/Avatar (6).png'
    },
    {
        imgUrl: '/images/community/members/Avatar (7).png'
    },
    {
        imgUrl: '/images/community/members/Avatar (8).png'
    },
    {
        imgUrl: '/images/community/members/Avatar (9).png'
    },
    {
        imgUrl: '/images/community/members/Avatar (10).png'
    },
    {
        imgUrl: '/images/community/members/Avatar (11).png'
    },
    {
        imgUrl: '/images/community/members/Avatar (12).png'
    },
    {
        imgUrl: '/images/community/members/Avatar (13).png'
    },
    {
        imgUrl: '/images/community/members/Avatar (14).png'
    },
    {
        imgUrl: '/images/community/members/Avatar (15).png'
    },
    {
        imgUrl: '/images/community/members/Avatar (16).png'
    },
]

export const rooms: RoomItemProps[] = [
    {
        price: 5,
        imgUrl: "/images/experience/room_images/room_1.jpg",
        valueIcon: <EthereumIcon />,
        walletIcon: <SolanaLinkIcon />,
        collectionName: "CollectionName",
        roomName: "The Vincent Van Dough Gallery",
    },
    {
        price: 5,
        imgUrl: "/images/experience/room_images/room_2.jpg",
        valueIcon: <EthereumIcon />,
        walletIcon: <SolanaIcon />,
        collectionName: "CollectionName",
        roomName: "Teufzer",
    },
    {
        price: 5,
        imgUrl: "/images/experience/room_images/room_3.jpg",
        valueIcon: <EthereumIcon />,
        walletIcon: <SolanaIcon />,
        collectionName: "CollectionName",
        roomName: "RESSURECTION enriched with death",
    },
    {
        price: 5,
        imgUrl: "/images/experience/room_images/room_4.jpg",
        valueIcon: <EthereumIcon />,
        walletIcon: <SolanaIcon />,
        collectionName: "Solana Money Boys",
        roomName: "Meta trap house",
    },
    {
        price: 5,
        imgUrl: "/images/experience/room_images/room_5.jpg",
        valueIcon: <EthereumIcon />,
        walletIcon: <SolanaIcon />,
        collectionName: "CollectionName",
        roomName: "This room is really fantastic",
    },
    {
        price: 5,
        imgUrl: "/images/experience/room_images/room_6.jpg",
        valueIcon: <EthereumIcon />,
        walletIcon: <SolanaLinkIcon />,
        collectionName: "CollectionName",
        roomName: "The Vincent Van Dough Gallery",
    },
    {
        price: 5,
        imgUrl: "/images/experience/room_images/room_7.jpg",
        valueIcon: <EthereumIcon />,
        walletIcon: <SolanaIcon />,
        collectionName: "CollectionName",
        roomName: "Teufzer",
    },
    {
        price: 5,
        imgUrl: "/images/experience/room_images/room_8.jpg",
        valueIcon: <EthereumIcon />,
        walletIcon: <SolanaIcon />,
        collectionName: "CollectionName",
        roomName: "RESSURECTION enriched with death",
    },
    {
        price: 5,
        imgUrl: "/images/experience/room_images/room_9.jpg",
        valueIcon: <EthereumIcon />,
        walletIcon: <SolanaIcon />,
        collectionName: "Solana Money Boys",
        roomName: "Meta trap house",
    },
    {
        price: 5,
        imgUrl: "/images/experience/room_images/room_10.jpg",
        valueIcon: <EthereumIcon />,
        walletIcon: <SolanaIcon />,
        collectionName: "CollectionName",
        roomName: "This room is really fantastic",
    },
    {
        price: 5,
        imgUrl: "/images/experience/room_images/room_11.jpg",
        valueIcon: <EthereumIcon />,
        walletIcon: <SolanaIcon />,
        collectionName: "Solana Money Boys",
        roomName: "Meta trap house",
    },
    {
        price: 5,
        imgUrl: "/images/experience/room_images/room_12.jpg",
        valueIcon: <EthereumIcon />,
        walletIcon: <SolanaIcon />,
        collectionName: "CollectionName",
        roomName: "This room is really fantastic",
    },

]

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
        name: 'NFTs',
        active: false
    }
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

export const GUILDS: ItemProps[] = [
    {
        avatarUrl: '/images/daos/degods.png',
        backUrl: '/images/community/backs/degods_bg.png',
        communityName: 'DeGods Guild',
        memberNumber: 445,
        icon: <MemberIcon />,
        description: 'Solana Money Boys is thrilled to announce its debut PFP (profile picture) collection—The Loaded Lions. The drop is the first native platform-owned jkajfadfjalsd jkflkjadlfk',
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        walletIcon: <SolanaLinkIcon />
    },
    {
        avatarUrl: '/images/daos/degods.png',
        backUrl: '/images/community/backs/degods_bg.png',
        communityName: 'DeGods Guild',
        memberNumber: 445,
        icon: <MemberIcon />,
        description: 'Solana Money Boys is thrilled to announce its debut PFP (profile picture) collection—The Loaded Lions. The drop is the first native platform-owned jkajfadfjalsd jkflkjadlfk',
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        walletIcon: <SolanaLinkIcon />
    },
    {
        avatarUrl: '/images/daos/degods.png',
        backUrl: '/images/community/backs/degods_bg.png',
        communityName: 'DeGods Guild',
        memberNumber: 445,
        icon: <MemberIcon />,
        description: 'Solana Money Boys is thrilled to announce its debut PFP (profile picture) collection—The Loaded Lions. The drop is the first native platform-owned jkajfadfjalsd jkflkjadlfk',
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        walletIcon: <SolanaLinkIcon />
    },
    {
        avatarUrl: '/images/daos/degods.png',
        backUrl: '/images/community/backs/degods_bg.png',
        communityName: 'DeGods Guild',
        memberNumber: 445,
        icon: <MemberIcon />,
        description: 'Solana Money Boys is thrilled to announce its debut PFP (profile picture) collection—The Loaded Lions. The drop is the first native platform-owned jkajfadfjalsd jkflkjadlfk',
        walletAddress: '9jKipb3AbeNNZWtaJ6vgYPPBGZg2mX8Gqp1bU1SjeRDc',
        walletIcon: <SolanaLinkIcon />
    },
];