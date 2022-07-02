import { GameAction, GameActions, GameType } from "../types/gamesType"

export const initialState: GameType = {
    games: []
}

export const gamesReducer = (state = initialState, action: GameAction): GameType => {
    switch(action.type) {
        case GameActions.GET_GAMES_CONTENT:
            return { games: state.games = action.payload}
        case GameActions.REMOVE_GAMES:
            return { games: state.games = action.payload}
        default:
            return state
    }
}