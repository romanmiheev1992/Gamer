export interface Menu {
    name: string,
    block: MenuBlock[]
}

export interface MenuBlock {
    name: string,
    alias: string
}

export interface Games {
    alias: string,
    name: string,
    price: number,
    ageRestrictions: number,
    platform: string,
    genre: string,
    developer: string,
    publisher: string[],
    lenguage: string,
    recomended: boolean,
    new: boolean,
    bestSeller: boolean,
    sales: GamesSales,
    date: GamesDate,
    video: string,
    photos: GamePhotos,
    settings: GameSetting,
    discription: GameDiscription,
    systemRequirements: GameSystemRequirements
}

export interface GamesSales {
    status: boolean,
    value:  number,
    oldPrice: number
}

export interface GamesDate {
    day: number,
    month: number,
    year: number
}

export interface GamePhotos {
    mainPoster: string,
    smallCard: string,
    cardLabel: string,
    cardImageListBig: string[],
    cardImageListSmall: string[]
}

export interface GameSetting {
    singleplayer: boolean,
    multiplayer: boolean,
    cooperative: boolean,
    controller: boolean,
    steamCards: boolean,
    steamAchievements: boolean
}

export interface GameDiscription {
    gif: string,
    header: string,
    text: string
}

export interface Requirements {
    os: string,
    prosessor: string,
    ram: number,
    videoCard: string,
    directX: string,
    hardDisk: number,
    soundCard: string
}

export interface GameSystemRequirements {
    min: Requirements,
    recomended: Requirements,
    
}

export interface StatusType {
    min: Requirements,
    recomended: Requirements,
    
}

export interface formStatusType {
    status: number,
}