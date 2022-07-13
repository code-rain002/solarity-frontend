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