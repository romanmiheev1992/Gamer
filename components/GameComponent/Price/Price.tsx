import { PriceProps } from "./Price.props"
import styles from './Price.module.css'
import { Button } from "../../Button/Button"
import { addGameBacket } from "../../../helpers/functions"
import { useRouter } from "next/dist/client/router"
import { useSelectorHook } from "../../../hooks/useSelectorHook"
import { useEffect, useState } from "react"

export const Price = ({game, className ,...props}: PriceProps): JSX.Element => {

    const {gameBasket} = useSelectorHook(state => state)
    const [chosen, setChosen] = useState<boolean>(false)
    const router = useRouter()

    useEffect(() => {
        setChosen(false) 
        gameBasket.games && gameBasket.games.map(item => {
            if(localStorage.getItem('name') && game.alias === item.alias) {
                setChosen(true)
            }
        })
    })
      
    
    const onClick = () => {
            addGameBacket(game)
            router.push('/sign')
    }

    const regRoute = () => {
        router.push('/sign')
    }

    return (
        <div className={styles.PriceSection} {...props}>
            <div>Купить {game.name}</div>
            <div className={styles.PriceSectionBlock}>
                {
                    game.sales.status
                    ? <div className={styles.GameItemPriceSale}>
                        <span>{game.sales.value}%</span>
                        <span>{game.sales.oldPrice}руб.</span>
                        <span>{game.price} руб.</span>
                      </div> 
                    : <div>{game.price} руб.</div>
                }  
                {
                    chosen
                    ? <Button onClick={() => regRoute()} type="primary">В корзинe</Button> 
                    : <Button onClick={() => onClick()} type="primary">В корзину</Button> 
                }
            </div>
        </div>
    )
}