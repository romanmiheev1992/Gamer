import { Menu } from "../../interfaces/dataInterfase";

export interface MenuListType {
    menuList: Menu[]
}

export enum MenuListAction {
    ADD_MENU_LIST = 'ADD_MENU_LIST'
}

export interface MenuListAdd {
    type: MenuListAction.ADD_MENU_LIST,
    payload: Menu[]
}