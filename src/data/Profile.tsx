import CommunityAvatarPanel from "components/Common/Panels/CommunityAvatarPanel"
import { UserProfileDataType, FeedDataType, SettingsRoomsTabDataType, GalleryAvatarDataType, CommunityAvatarDataType } from "../modal/profile"

export const UsersProfileData : UserProfileDataType = [
    {
        id : 0,
        domain_name : "Konstantin1982.sol",
        avatar_img : "../../assets/images/temp/Avatar_Konstantin1982.webp",
        banner_img : "../../assets/images/temp/Profile_banner_Konstantin1982.webp",
        balance : {
            total : 871.18,
            wallets : [
                {
                    network : "MATIC",
                    address : "0x09eu03u4d45s3k4j53434dfs98s",
                    w_balance : 0.0024
                },
                {
                    network : "ETH",
                    address : "0x74eas245d2fa2s4d3fer4dfs3fws",
                    w_balance : 0.19
                },
                {
                    network : "SOL",
                    address : "0x0we243qw24j53434df24sf53ew87",
                    w_balance : 0.003
                },
            ]
        }
    },
    {
        id : 1,
        domain_name : "Fenichita1234.sol",
        avatar_img : "../../assets/images/temp/Avatar_Fenichita1234.png",
        banner_img : "../../assets/images/temp/Profile_banner_Fenichita1234.webp",
        balance : {
            total : 500.00,
            wallets : [
                {
                    network : "MATIC",
                    address : "0xww6473eu0ud3k4j53434dfs9l8",
                    w_balance : 0.0081
                },
                {
                    network : "ETH",
                    address : "0x66asd34fa34sd2rw34r4dfs3ass",
                    w_balance : 0.075
                },
                {
                    network : "SOL",
                    address : "0x22eqw2346rt3463k42462few833",
                    w_balance : 0.00549
                },
            ]
        }
    },
    {
        id : 2,
        domain_name : "Catari5678.sol",
        avatar_img : "../../assets/images/temp/Avatar_Catari5678.png",
        banner_img : "../../assets/images/temp/Profile_banner_Catari5678.webp",
        balance : {
            total : 1023.68,
            wallets : [
                {
                    network : "MATIC",
                    address : "0xj53434sfs3k4j53434dfs98s",
                    w_balance : 0.04
                },
                {
                    network : "ETH",
                    address : "0x74ea234sdf3463w34er4dfs3fws",
                    w_balance : 0.05
                },
                {
                    network : "SOL",
                    address : "0x0we151654qw25463k4j53434w",
                    w_balance : 0.8
                },
            ]
        }
    }
]


export const FeedData : FeedDataType[] = [
    {
        badgeUrl : "/images/social/profile_feed_discord.png",
        avatarUrl : '/images/profile/Konstantin1982.sol.png',
        domainName : "Konstantin1982.sol",
        date : "31.05.2022",
        content : "Hi, we are currently hiring a Minecraft Modder for MrBeast Gaming. <br />\
                    We switched back to google forms so if you applied above or tried to apply, use this form instead.<br />\
                    Please apply using the link below:<br />\
                    <a href='https://forms.gle/dYRrYcg7xpQmEwT67' style='color:#29B080;text-decoration:underline;'>https://forms.gle/dYRrYcg7xpQmEwT67</a>",
    },
    {
        badgeUrl : "/images/social/profile_feed_twitter.png",
        avatarUrl : '/images/profile/@konstantin1981.sol.png',
        domainName : "@konstantin1981.sol",
        date : "30.05.2022",
        content : "Push the boundaries with @Nanxss’ hand-picked Locker Bundle<br />\
                    Available in the item Shop now",
        imageUrl : "/images/profile/@konstantin1981_img.webp",
        retweets : 317,
        twWithQuotes : 97,
        likes : 5512
    }
]

export const FeedCategoryCaptions : string[] = [
    'All categories',
    'Twitter',
    'DisCord',
    'Blockchain'
]

export const SettingsRoomsTabData : SettingsRoomsTabDataType[] = [{
    srcUrl : "/images/profile/temp/room1.png",
    title : "RESSURECTION enriched with death",
    no : 244314213123123
}, {
    srcUrl : "/images/profile/temp/room2.png",
    title : "RESSURECTION enriched with death",
    no : 244758692022346
},{
    srcUrl : "/images/profile/temp/room1.png",
    title : "RESSURECTION -------------",
    no : 3242284544545123
}, {
    srcUrl : "/images/profile/temp/room2.png",
    title : "RESSURECTION coming soon :)",
    no : 3456348692022346
},{
    srcUrl : "/images/profile/temp/room1.png",
    title : "RESSURECTION here comes your inspiration",
    no : 92389100947673485
}, {
    srcUrl : "/images/profile/temp/room2.png",
    title : "RESSURECTION reality",
    no : 29384959300002348
},{
    srcUrl : "/images/profile/temp/room1.png",
    title : "RESSURECTION enriched with death",
    no : 102837290304834534
}, {
    srcUrl : "/images/profile/temp/room2.png",
    title : "RESSURECTION enriched with death",
    no : 648883002357231235
}
]


export const GalleryAvatarData : GalleryAvatarDataType[] = [
    {
        title : "RESSURECTION",
        subtitle : "enriched with death",
        iconUrl : "/images/wallets/ethereum-classic-(etc).png",
        price : 1.995,
        imageSrc : "/images/profile/temp/GalleryPicture1.png"
    },{
        title : "RANDOM STR",
        subtitle : "I believe in...",
        iconUrl : "/images/wallets/ethereum-classic-(etc).png",
        price : 2.45,
        imageSrc : "/images/profile/temp/GalleryPicture2.png"
    },{
        title : "DONT TAKE THIS SERIOUS",
        subtitle : "Coming soon",
        iconUrl : "/images/wallets/ethereum-classic-(etc).png",
        price : 1.342,
        imageSrc : "/images/profile/temp/GalleryPicture3.png"
    },{
        title : "JUST JOKING",
        subtitle : "soon is soon enough",
        iconUrl : "/images/wallets/ethereum-classic-(etc).png",
        price : 3.664,
        imageSrc : "/images/profile/temp/GalleryPicture1.png"
    },{
        title : "nft",
        subtitle : "burnt death",
        iconUrl : "/images/wallets/ethereum-classic-(etc).png",
        price : 1.995,
        imageSrc : "/images/profile/temp/GalleryPicture2.png"
    },{
        title : "RESSURECTION",
        subtitle : "half life",
        iconUrl : "/images/wallets/ethereum-classic-(etc).png",
        price : 0.995,
        imageSrc : "/images/profile/temp/GalleryPicture3.png"
    },{
        title : "SUN FLOWER",
        subtitle : "Icaros",
        iconUrl : "/images/wallets/ethereum-classic-(etc).png",
        price : 1.995,
        imageSrc : "/images/profile/temp/GalleryPicture1.png"
    },{
        title : "MONKEY WITH FAG",
        subtitle : "forget me not",
        iconUrl : "/images/wallets/ethereum-classic-(etc).png",
        price : 2.489,
        imageSrc : "/images/profile/temp/GalleryPicture2.png"
    },{
        title : "GEEKS",
        subtitle : "Lo rem ip sum",
        iconUrl : "/images/wallets/ethereum-classic-(etc).png",
        price : 5.333,
        imageSrc : "/images/profile/temp/GalleryPicture3.png"
    },{
        title : "SUN GLASSES",
        subtitle : "Need back up",
        iconUrl : "/images/wallets/ethereum-classic-(etc).png",
        price : 1.995,
        imageSrc : "/images/profile/temp/GalleryPicture1.png"
    },{
        title : "RESSURECTION",
        subtitle : "From heaven",
        iconUrl : "/images/wallets/ethereum-classic-(etc).png",
        price : 2.006,
        imageSrc : "/images/profile/temp/GalleryPicture2.png"
    },{
        title : "WHAT THE...",
        subtitle : "Roger that",
        iconUrl : "/images/wallets/ethereum-classic-(etc).png",
        price : 1.995,
        imageSrc : "/images/profile/temp/GalleryPicture3.png"
    },{
        title : "COOL GOOL",
        subtitle : "Mixed with V and R",
        iconUrl : "/images/wallets/ethereum-classic-(etc).png",
        price : 1.957,
        imageSrc : "/images/profile/temp/GalleryPicture1.png"
    },
]

export const CommunityAvatarData : CommunityAvatarDataType[] = [
    {
        bgSrc : "/images/profile/temp/community_bg_1.png",
        fgSrc : "/images/profile/temp/community_avatar_1.png",
        title : "Axie infinity",
        members : 231
    },{
        bgSrc : "/images/profile/temp/community_bg_2.png",
        fgSrc : "/images/profile/temp/community_avatar_2.png",
        title : "Solana Money Boys",
        members : 445
    },{
        bgSrc : "/images/profile/temp/community_bg_1.png",
        fgSrc : "/images/profile/temp/community_avatar_1.png",
        title : "Vivamus magna",
        members : 3456
    },{
        bgSrc : "/images/profile/temp/community_bg_2.png",
        fgSrc : "/images/profile/temp/community_avatar_2.png",
        title : "lacinia eget ",
        members : 865
    },{
        bgSrc : "/images/profile/temp/community_bg_1.png",
        fgSrc : "/images/profile/temp/community_avatar_2.png",
        title : "consectetur sed",
        members : 830
    },{
        bgSrc : "/images/profile/temp/community_bg_2.png",
        fgSrc : "/images/profile/temp/community_avatar_1.png",
        title : "convallis at tellus",
        members : 12
    },{
        bgSrc : "/images/profile/temp/community_bg_1.png",
        fgSrc : "/images/profile/temp/community_avatar_2.png",
        title : "Nulla porttitor",
        members : 4756
    },{
        bgSrc : "/images/profile/temp/community_bg_2.png",
        fgSrc : "/images/profile/temp/community_avatar_1.png",
        title : "accumsan tincidunt",
        members : 445
    },{
        bgSrc : "/images/profile/temp/community_bg_1.png",
        fgSrc : "/images/profile/temp/community_avatar_1.png",
        title : "Vestibulum ac diam",
        members : 9979
    },{
        bgSrc : "/images/profile/temp/community_bg_2.png",
        fgSrc : "/images/profile/temp/community_avatar_2.png",
        title : "sit amet quam",
        members : 1238
    },{
        bgSrc : "/images/profile/temp/community_bg_2.png",
        fgSrc : "/images/profile/temp/community_avatar_1.png",
        title : "vehicula elementum sed",
        members : 3456
    },{
        bgSrc : "/images/profile/temp/community_bg_1.png",
        fgSrc : "/images/profile/temp/community_avatar_2.png",
        title : "sit amet dui",
        members : 222344555
    },{
        bgSrc : "/images/profile/temp/community_bg_1.png",
        fgSrc : "/images/profile/temp/community_avatar_1.png",
        title : "Sed porttitor lectus nibh",
        members : 5463
    },{
        bgSrc : "/images/profile/temp/community_bg_2.png",
        fgSrc : "/images/profile/temp/community_avatar_1.png",
        title : "Lorem ipsum dolor",
        members : 756
    },{
        bgSrc : "/images/profile/temp/community_bg_1.png",
        fgSrc : "/images/profile/temp/community_avatar_1.png",
        title : "sit amet",
        members : 445
    },{
        bgSrc : "/images/profile/temp/community_bg_1.png",
        fgSrc : "/images/profile/temp/community_avatar_2.png",
        title : "consectetur adipiscing elit",
        members : 445
    },{
        bgSrc : "/images/profile/temp/community_bg_2.png",
        fgSrc : "/images/profile/temp/community_avatar_1.png",
        title : "Solana Money Boys",
        members : 4
    },{
        bgSrc : "/images/profile/temp/community_bg_1.png",
        fgSrc : "/images/profile/temp/community_avatar_1.png",
        title : "Praesent sapien massa",
        members : 56457
    },
]