import { BankCardProps } from "./BankCard.props"
import styles from './BankCard.module.css'
import Mir from './icon/mir.svg'
import UnionPay from './icon/unionpay.svg'
import Visa from './icon/visa.svg'
import Maesto from './icon/maestro.svg'
import cn from 'classnames'
import { useEffect, useState } from "react"
import { Input } from "../Input/Input"
import { useSelectorHook } from "../../hooks/useSelectorHook"
import { useDispatch } from "react-redux"
import { CardAction } from "../../redux/types/cardType"
import { Button } from "../Button/Button"

export const BankCard = ({...props}: BankCardProps): JSX.Element => {
    const {cardNum} = useSelectorHook(state => state)
    const dispatch = useDispatch()
    const [margin, setMargin] = useState<number>(0)
    const [status, setStatus] = useState(true)
    const [cardFront, setCardFront] = useState(true)
    const [bankLabel, setBankLabel] = useState([<Mir/>,  <Maesto/>, <Visa/>, <UnionPay/>])

    useEffect(() => {
        if(cardNum.cardNumber.length >= 12 && cardNum.name != '' && +cardNum.mounth.length >= 2 && +cardNum.year.length >= 2 ) {
            setCardFront(false)
        }
        if(cardNum.cvv.length >= 3 && status) {
            dispatch({type: CardAction.INPUT_CATD_SUCCESS, payload: true})
            setStatus(false)
            // dispatch({type: CardToggleAction.TOGGLE_CARD})
        }
    }, [cardNum])

    console.log(cardNum)



    const onSelect = (e) => {
        setMargin(e.target.value)
    }

    const onChange = (e) => {

        if(e.target.value.length <= 14 && typeof e.target.value.number) {
           dispatch({type: CardAction.INPUT_CATD_NUM, payload: e.target.value}) 
        }
    }

    const onChangeName = (e) => {
       
        if(typeof e.target.value.String) {
            dispatch({type: CardAction.INPUT_CATD_NAME, payload: e.target.value.toUpperCase()})
        }  
        
    }

    
    const onChangeMounth = (e) => {
        const cardNumVal = /^\d+$/
        if(cardNumVal.test(e.target.value) && +cardNum.mounth.length < 2) {
            dispatch({type: CardAction.INPUT_CATD_MOUNTH, payload: e.target.value})
        }  
    }

    const onChangeYear = (e) => {
        const cardNumVal = /^\d+$/
        if(cardNumVal.test(e.target.value)) {
            dispatch({type: CardAction.INPUT_CATD_YEAR, payload: e.target.value})
        }  
    }

    const onChangeCVV = (e) => {
        const cardNumVal = /^\d+$/
        if(cardNumVal.test(e.target.value)) {
            dispatch({type: CardAction.INPUT_CATD_CVV, payload: e.target.value})
        } 
    }


    return (
           <div className={cn(styles.BankCardWrapper)} {...props}>
               {/* <Button onClick={() => dispatch({type: CardToggleAction.TOGGLE_CARD})} type="primary">Отменить</Button> */}
                <div className={cn(styles.BankCardFront, {
                    [styles.CardRotateFront]: !cardFront
                })}>
                    <select onChange={(e) => onSelect(e)}>
                        <option value={0}>Мир</option>
                        <option value={70}>Maestro</option>
                        <option value={140}>Visa</option>
                        <option value={210}>Union Pay</option>
                    </select>
                    <div className={styles.BankCardFrontLabel}>
                        <div 
                            className={styles.BankCardFrontLabelCarusel}
                            style={{transform: `translateX(-${margin}px)`}}
                        >
                            {
                                bankLabel.map(item => (
                                    item
                                ))
                            }
                        </div>
                    </div>
                    <div className={styles.CardInput}>
                        <Input placeholder="9999 9999 9999 9999" onChange={(e) => onChange(e)} name="cardnumber" value={cardNum.cardNumber}/>
                    </div>
                    <div className={styles.CardInputName}>
                        <Input placeholder="IVANOV IVAN" onChange={(e) => onChangeName(e)} name="cardname" value={cardNum.name}/>
                    </div>

                    <div className={styles.CardInputDate}>
                        <Input placeholder="01" onChange={(e) => onChangeMounth(e)} name="cardmounth" value={cardNum.mounth}/>
                        <Input placeholder="01" onChange={(e) => onChangeYear(e)} name="cardyear" value={cardNum.year}/>
                    </div>
                    
                </div>
                <div className={cn(styles.BankCardBack, {
                    [styles.CardRotateBack]: !cardFront
                })}>
                    <div className={styles.CardInputCVV}>
                        <Input placeholder="CVV" onChange={(e) => onChangeCVV(e)} name="cardCvv" value={cardNum.cvv}/>
                    </div>
                </div>
            
            </div>

    )
}