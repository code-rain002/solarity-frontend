import internal from "stream"

export type WalletsType = {
    network : string,
    address : string,
    w_balance : number
}

export type ProfileType = {
    id : number,
    domain_name : string,
    avatar_img : string,
    banner_img : string,
    balance : {
        total : number,
        wallets : WalletsType[]
    }
}

export type FeedDataType = {
        badgeUrl : string,
        avatarUrl : string,
        domainName : string,
        date : string,
        content : string,
        imageUrl? : string,
        retweets? : number,
        twWithQuotes? : number,
        likes? : number
    }


export type UserProfileDataType = ProfileType[]

export type SettingsRoomsTabDataType = {
    srcUrl : string,
    title : string,
    no : number
}

export type GalleryAvatarDataType = {
    title : string,
    subtitle : string,
    iconUrl : string,
    price : number,
    imageSrc : string
}

export type CommunityAvatarDataType = {
    bgSrc : string,
    fgSrc : string,
    title : string,
    members : number
}