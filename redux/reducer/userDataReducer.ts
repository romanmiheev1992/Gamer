import { UserDataAction, UserDataActions, UserDataType } from "../types/userDataType"

export const initialState: UserDataType = {
    email: '',
    status: false
}

export const userDataReducer = (state = initialState, action: UserDataActions): UserDataType => {
    switch(action.type) {
        case UserDataAction.ADD_USER:
            return {
                email: state.email = action.payload,
                status: state.status = true
            }
        case UserDataAction.CLEAR_USER:
            return {
                email: state.email = '',
                status: state.status = false
            }
        default:
            return state
    }
}