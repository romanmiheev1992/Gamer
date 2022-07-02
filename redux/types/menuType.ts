export interface MenuType {
    toggleMenu: boolean,
    toggleList: boolean,
    value: string
}

export enum MenuAction {
    SHOW_MENU = 'SHOW_MENU',
    HIDE_MENU = 'HIDE_MENU',
    LIST_TOGGLE = 'LIST_TOGGLE',
    HEADER_TOGGLE = 'HEADER_TOGGLE'
}

export interface MenuShow {
    type: MenuAction.SHOW_MENU
}

export interface MenuHide {
    type: MenuAction.HIDE_MENU
}

export interface ListToggle {
    type: MenuAction.LIST_TOGGLE
    payload: string
}


export type MenuActions = MenuShow | MenuHide | ListToggle 