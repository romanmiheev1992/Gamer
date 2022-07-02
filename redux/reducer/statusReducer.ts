import { GetStatus, StatusAction, StatusActions, StatusType } from "../types/statusType"

export const initialState: StatusType = {
    status: 0
}

export const statusReducer = (state = initialState, action: StatusActions): StatusType => {
    switch(action.type) {
        case StatusAction.GET_STATUS:
            return {status: state.status = action.payload}
        case StatusAction.DELETE_STATUS:
            return {status: state.status = 0}
        default:    
            return state
    }
}