import { Games } from "../../interfaces/dataInterfase"
import { AddWatchedAction, WatchedAction, WatchedType } from "../types/watchedTypes"

export const initialState: WatchedType = {
    watchedList: []
}

export const watchedListReducer = (state = initialState, action: AddWatchedAction): WatchedType => {
    switch(action.type) {
        case WatchedAction.ADD_WATCHED_LIST:
            return {watchedList: [...action.payload, ...state.watchedList]}
        default:
            return state
    }
}