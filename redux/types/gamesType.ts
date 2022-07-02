import { Games } from "../../interfaces/dataInterfase";

export interface GameType{
    games: Games[]
}

export enum GameSort {
    GET_GAME = 'GET_GAME',
    SORT_GAME_UP = 'SORT_GAME_UP',
    SORT_GAME_LOW = 'SORT_GAME_LOW',
    GAME_SORT_BESTSELLER = 'GAME_SORT_BESTSELLER',
    GAME_SORT_POPULAR = 'GAME_SORT_POPULAR',
}

export interface GetGame {
    type: GameSort.GET_GAME,
    payload: Games[]
}

export interface SortGamesUp {
    type: GameActions.SORT_GAME_UP,
}

export interface SortGamesLow {
    type: GameActions.SORT_GAME_LOW,
}

export interface SortBestSaller{
    type: GameSort.GAME_SORT_BESTSELLER,
}

export interface SortPopular{
    type: GameSort.GAME_SORT_POPULAR,
    payload: string
}






export type GameSortActions = GetGame | SortGamesUp | SortGamesLow | SortBestSaller |  SortPopular
 
export enum GameActions {
    GET_GAMES_CONTENT = 'GET_GAMES_CONTENT',
    REMOVE_GAMES = 'REMOVE_GAMES',
    SORT_GAME_UP = 'SORT_GAME_UP',
    SORT_GAME_LOW = 'SORT_GAME_LOW',
}


export interface GamesGetContent {
    type: GameActions.GET_GAMES_CONTENT,
    payload: Games[]
}

export interface RemoveGames {
    type: GameActions.REMOVE_GAMES,
    payload: Games[]
}

export type GameAction = GamesGetContent | RemoveGames | SortGamesUp | SortGamesLow