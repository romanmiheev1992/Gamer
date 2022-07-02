import { FormAction, FormActions, FormType } from "../types/formType"

export const initialState: FormType = {
    email: '',
    password: '',
    returnSecureToken: true
}

export const formReducer = (state = initialState, action: FormActions): FormType => {
    switch(action.type) {
        case FormAction.INPUT_EMAIL:
            return {
                email: state.email = action.payload,
                password: state.password,
                returnSecureToken: state.returnSecureToken
            }
        case FormAction.INPUT_PASSWORD:
            return {
                email: state.email,
                password: state.password = action.payload,
                returnSecureToken: state.returnSecureToken
            }
        default:
            return state
    }
}