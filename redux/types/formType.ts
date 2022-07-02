export interface FormType {
    email: string,
    password: string,
    returnSecureToken: boolean
}

export enum FormAction {
    INPUT_EMAIL = 'INPUT_EMAIL',
    INPUT_PASSWORD = 'INPUT_PASSWORD',
    FORM_SUBMIT = 'FORM_SUBMIT',
    FORM_SIGN_UP = 'FORM_SIGN_UP'
}

export interface FormActionEmail {
    type: FormAction.INPUT_EMAIL,
    payload: string
}

export interface FormActionPassword {
    type: FormAction.INPUT_PASSWORD,
    payload: string
}


export type FormActions = FormActionEmail | FormActionPassword 