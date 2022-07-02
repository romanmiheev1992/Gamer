import { MenuListAction, MenuListAdd, MenuListType } from "../types/menuListType";

export const initialState: MenuListType = {
    menuList: []
}

export const menuListReducer = (state = initialState, action: MenuListAdd): MenuListType => {
    switch(action.type) {
        case MenuListAction.ADD_MENU_LIST:
            return {menuList: state.menuList = action.payload}
        default:
            return state
    }
}