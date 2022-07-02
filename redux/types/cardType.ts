export interface CardType {
    cardNumber: string,
    name: string,
    mounth: string,
    year: string,
    cvv: string,
    cardSuccess: boolean
}

export enum CardAction {
    INPUT_CATD_NUM = 'INPUT_CATD_NUM',
    INPUT_CATD_NAME = 'INPUT_CATD_NAME',
    INPUT_CATD_MOUNTH = 'INPUT_CATD_MOUNTH',
    INPUT_CATD_YEAR = 'INPUT_CATD_YEAR',
    INPUT_CATD_CVV = 'INPUT_CATD_CVV',
    INPUT_CATD_SUCCESS = 'INPUT_CATD_SUCCESS'
}

export interface InputCardNum {
    type: CardAction.INPUT_CATD_NUM,
    payload: string
}

export interface InputCardName {
    type: CardAction.INPUT_CATD_NAME,
    payload: string
}

export interface InputCardMounth {
    type: CardAction.INPUT_CATD_MOUNTH,
    payload: string
}

export interface InputCardYear {
    type: CardAction.INPUT_CATD_YEAR,
    payload: string
}


export interface InputCardCVV {
    type: CardAction.INPUT_CATD_CVV,
    payload: string
}

export interface InputCardCVV {
    type: CardAction.INPUT_CATD_CVV,
    payload: string
}

export interface InputCardSuccess {
    type: CardAction.INPUT_CATD_SUCCESS,
    payload: boolean
}


export type CardActions = InputCardNum | InputCardName | InputCardMounth | InputCardYear |  InputCardCVV | InputCardSuccess