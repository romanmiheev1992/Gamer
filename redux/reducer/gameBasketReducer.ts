import { AddGameBacket, GameBasketAction, GameBasketActions, GameBasketType } from "../types/gameBasketType"

export const initialState: GameBasketType = {
    games: []
}

export const gameBasketReducer = (state = initialState, action: GameBasketActions): GameBasketType => {
    switch(action.type) {
        case GameBasketAction.ADD_GAME:
            return {games: [...action.payload, ...state.games]}
        case GameBasketAction.DELETE_ALL_GAMES:
            return {games: state.games = []}
        case GameBasketAction.FILTER_GAMES:
            return {games: state.games.filter(item => item.alias !== action.payload)}
        default:
            return state
    }
}