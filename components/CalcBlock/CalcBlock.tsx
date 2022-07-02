import { CalcBlockProps } from "./CalcBlock.props"
import styles from './CalcBlock.module.css'
import { useSelectorHook } from "../../hooks/useSelectorHook"
import { Button } from "../Button/Button"
import { motion } from "framer-motion"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { GameBasketAction } from "../../redux/types/gameBasketType"

export const CalcBlock = ({...props}: CalcBlockProps): JSX.Element => {

    const {gameBasket} = useSelectorHook(state => state)
    const [successToggle, setSuccessToggle] = useState<boolean>(false)
    const dispatch = useDispatch()
       
    const success = {
        done: {
            opacity: 1,
            y: [-70, 300, 300, 300,  -70],
            transition: {
                duration: 5
            }
        }
    }

  


    const salesInfo = () => {
        return (
            <motion.div 
            variants={success}
            animate={'done'}
            className={styles.SalesInfo}>
               <p>Оплата прошла успешно! <br/> Покупка совершена!</p>  
            </motion.div>
        )
    }


    const onClick = () => {
        setSuccessToggle(!successToggle)
        dispatch({type: GameBasketAction.DELETE_ALL_GAMES})
    }

    return (

        <>
        <div className={styles.CalcBlock} {...props}>

            <p>И того: {gameBasket.games.reduce((acum, item) => acum += item.price , 0)} руб.</p>
            {
                gameBasket.games.length
                ? <Button onClick={() => onClick()} type="submit">Купить</Button>
                : null
            }

            {
                successToggle && gameBasket.games
                ? salesInfo()
                : null
            }

        </div>
        </>
        
    )
}