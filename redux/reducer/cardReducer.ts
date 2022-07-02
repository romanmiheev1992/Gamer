import { CardAction, CardActions, CardType } from "../types/cardType";

export const initialState: CardType = {
    cardNumber: '',
    name: '',
    mounth: '',
    year: '',
    cvv: '',
    cardSuccess: false
}

export const cardReducer = (state = initialState, action: CardActions): CardType => {
    switch(action.type) {
        case CardAction.INPUT_CATD_NUM:
            return {
                cardNumber: state.cardNumber = action.payload,
                name: state.name,
                mounth: state.mounth,
                year: state.year,
                cvv: state.cvv,
                cardSuccess: state.cardSuccess
            }
        case CardAction.INPUT_CATD_NAME:
            return {
                cardNumber: state.cardNumber,
                name: state.name = action.payload,
                mounth: state.mounth,
                year: state.year,
                cvv: state.cvv,
                cardSuccess: state.cardSuccess
            }
        case CardAction.INPUT_CATD_MOUNTH:
            return {
                cardNumber: state.cardNumber,
                name: state.name,
                mounth: state.mounth = action.payload,
                year: state.year,
                cvv: state.cvv,
                cardSuccess: state.cardSuccess
            }
        case CardAction.INPUT_CATD_YEAR:
            return {
                cardNumber: state.cardNumber,
                name: state.name ,
                mounth: state.mounth,
                year: state.year = action.payload,
                cvv: state.cvv,
                cardSuccess: state.cardSuccess
            }
        case CardAction.INPUT_CATD_CVV:
            return {
                cardNumber: state.cardNumber,
                name: state.name ,
                mounth: state.mounth,
                year: state.year,
                cvv: state.cvv= action.payload,
                cardSuccess: state.cardSuccess 
            }
        case CardAction.INPUT_CATD_SUCCESS:
            return {
                cardNumber: state.cardNumber,
                name: state.name ,
                mounth: state.mounth,
                year: state.year,
                cvv: state.cvv,
                cardSuccess: state.cardSuccess = action.payload
            }
        default:
            return state;
    }
}