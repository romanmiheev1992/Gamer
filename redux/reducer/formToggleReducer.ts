import { FormToggle, FormToggleType, FromToggleAction } from "../types/formToggleType"

export const initialState: FormToggleType = {
    formToggle: false
}

export const formToggleReducer = (state = initialState, action: FormToggle): FormToggleType => {
    switch(action.type) {
        case FromToggleAction.TOGGLE_FORM:
            return {formToggle: !state.formToggle}
        default:
            return state
    }
}