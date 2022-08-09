export type GameLibraryDataType = {
    image : string,
    title : string,
    likes : number,
    members : number,
    owner: string,
    category: string,
    description?: string,
    badges?: [{
        title: string,
        description: string,
        image: string,
        rarity: Float32Array
    }],
    stores?: [{
        image: string,
        price: number,
    }],
}