import { format } from "date-fns"
import { Games } from "../interfaces/dataInterfase"
import { WatchedAction } from "../redux/types/watchedTypes"
import {store} from '../redux/store/store'
import { GameBasketAction } from "../redux/types/gameBasketType"

export const addWatched = (game: Games) => {
    game.platform = format(new Date(), 'HH:mm')
    store.dispatch({type: WatchedAction.ADD_WATCHED_LIST, payload: [game]})
}

export const addGameBacket = (game: Games) => {
    store.dispatch({type: GameBasketAction.ADD_GAME, payload: [game]})
}

