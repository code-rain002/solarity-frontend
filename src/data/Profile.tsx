import { UserProfileDataType, FeedDataType } from "../modal/profile"

export const UsersProfileData : UserProfileDataType = [
    {
        id : 0,
        domain_name : "Konstantin1982.sol",
        avatar_img : "../../assets/images/temp/Avatar_Konstantin1982.png",
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
        avatarUrl : '/images/profile/Konstantin1982.sol.png',
        domainName : "Konstantin1982.sol",
        date : "31.05.2022",
        content : "Hi, we are currently hiring a Minecraft Modder for MrBeast Gaming. <br />\
                    We switched back to google forms so if you applied above or tried to apply, use this form instead.<br />\
                    Please apply using the link below:<br />\
                    <a href='https://forms.gle/dYRrYcg7xpQmEwT67' style='color:#29B080;text-decoration:underline;'>https://forms.gle/dYRrYcg7xpQmEwT67</a>",
    },
    {
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