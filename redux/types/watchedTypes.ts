import { Games } from "../../interfaces/dataInterfase";

export interface WatchedType {
    watchedList: Games[]
}

export enum WatchedAction {
    ADD_WATCHED_LIST = 'ADD_WATCHED_LIST'
}

export interface AddWatchedAction {
    type: WatchedAction.ADD_WATCHED_LIST,
    payload: Games[]
}