export interface FormToggleType {
    formToggle: boolean
}

export enum FromToggleAction {
    TOGGLE_FORM = 'TOGGLE_FORM'
}

export interface FormToggle {
    type: FromToggleAction.TOGGLE_FORM
}