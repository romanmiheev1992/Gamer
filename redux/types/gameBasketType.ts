import { Games } from "../../interfaces/dataInterfase";

export interface GameBasketType {
    games: Games[]
}

export enum GameBasketAction {
    ADD_GAME = 'ADD_GAME',
    DELETE_ALL_GAMES = 'DELETE_ALL_GAMES',
    FILTER_GAMES = 'FILTER_GAMES'
}

export interface AddGameBacket {
    type: GameBasketAction.ADD_GAME,
    payload: Games[]
}


export interface DeletaAllGameBacket {
    type: GameBasketAction.DELETE_ALL_GAMES,
}

export interface FilterGameBacket {
    type: GameBasketAction.FILTER_GAMES,
    payload: string
}


export type GameBasketActions = AddGameBacket | DeletaAllGameBacket |FilterGameBacket

