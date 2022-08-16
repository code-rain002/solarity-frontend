export type GameLibraryDataType = {
    image : string,
    title : string,
    likes : number,
    members : number,
    owner: string,
    category: string,
    iframe: string,
    description: string,
    twitter?: string,
    discord?: string,
    website?: string,
    quests?: Array<{
        title: string,
        description: string,
        image: string,
        rarity: number
    }>,
    stores?: Array<{
        title: string,
        image: string,
        price: number,
    }>,
}

export type LiveEventsDataType = {
    image: string,
    title: string,
    creator: {
        avatar: string,
        name: string,
    },
    friends: Array<{
        avatar: string,
        name: string
    }>,
    createAt: string
}