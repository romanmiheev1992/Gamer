import { MenuAction, MenuActions, MenuType } from "../types/menuType"

export const initialState: MenuType = {
    toggleMenu: false,
    toggleList: true,
    value: ''
}

export const menuToggleReducer = (state = initialState, action: MenuActions): MenuType => {
    switch(action.type) {
        case MenuAction.SHOW_MENU:
            return {
                toggleMenu: state.toggleMenu = true,
                toggleList: state.toggleList,
                value: state.value
            }
        case MenuAction.HIDE_MENU:
            return {
                toggleMenu: state.toggleMenu = false,
                toggleList: state.toggleList,
                value: state.value
            }
        case MenuAction.LIST_TOGGLE:
            return {
                toggleMenu: state.toggleMenu,
                toggleList: state.toggleList,
                value: state.value = action.payload
            }
        default:
            return state
    }
}