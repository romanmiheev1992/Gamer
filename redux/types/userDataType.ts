export interface UserDataType {
    email: string,
    status: boolean
}

export enum UserDataAction {
    ADD_USER = 'ADD_USER',
    CLEAR_USER = 'CLEAR_USER'
}


export interface AddUser {
    type: UserDataAction.ADD_USER,
    payload: string
}

export interface ClearUser {
    type: UserDataAction.CLEAR_USER,
}

export type UserDataActions = AddUser | ClearUser


