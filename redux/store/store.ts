import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { cardReducer } from "../reducer/cardReducer";
import { formReducer } from "../reducer/formReducer";
import { formToggleReducer } from "../reducer/formToggleReducer";
import { gameBasketReducer } from "../reducer/gameBasketReducer";
import { gamesReducer } from "../reducer/gameReducer";
import { menuListReducer } from "../reducer/menuReducer";
import { menuToggleReducer } from "../reducer/menuToggleReducer";
import { statusReducer } from "../reducer/statusReducer";
import { userDataReducer } from "../reducer/userDataReducer";
import { watchedListReducer } from "../reducer/watchedReducer";
import { rootSaga } from "../sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware()

export const rootReducer = combineReducers({
    menuToggle: menuToggleReducer,
    gamesList: gamesReducer,
    menuList: menuListReducer,
    watchedList: watchedListReducer,
    form: formReducer,
    status: statusReducer,
    formToggle: formToggleReducer,
    userData: userDataReducer,
    gameBasket: gameBasketReducer,
    cardNum: cardReducer,
})

export type RootType = ReturnType <typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)