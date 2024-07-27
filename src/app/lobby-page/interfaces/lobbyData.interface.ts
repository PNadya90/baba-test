export interface ISlot {
    id: number,
    name : string,
    image: string,
    isLocked: boolean,
    order: number,
    jackpot: number
}

export interface ILobbyData  {
    backgroundImage: string,
    backgroundMusic: string,
    slots:ISlot[]
}