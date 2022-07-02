import { LateWatchedComponentProps } from "./LateWatchedComponent.props"
import styles from './LateWatchedComponent.module.css'
import { useSelectorHook } from "../../../hooks/useSelectorHook"
import Link from "next/link"
import { Price } from "../../GameComponent/Price/Price"
import { Button } from "../../Button/Button"
import { addGameBacket } from "../../../helpers/functions"
import { useRouter } from "next/dist/client/router"
import { useEffect, useState } from "react"
import { Games } from "../../../interfaces/dataInterfase"


export const LateWatchedComponent = ({game, ...props}: LateWatchedComponentProps): JSX.Element => {

    const [chosen, setChosen] = useState<boolean>(false)
    const {watchedList, gameBasket} = useSelectorHook(state => state)
    const router = useRouter()

   
    useEffect(() => {
        setChosen(false) 
        gameBasket.games && gameBasket.games.map(item => {
            if(localStorage.getItem('name') && game.alias === item.alias) {
                setChosen(true)
            }
        })
    })

    const onClick = (game: Games) => {
            addGameBacket(game)
            router.push('/sign')
    }

    const regRoute = () => {
        router.push('/sign')
    }

    return (
     
        <div className={styles.GameSection} {...props}>
            <Link href={`/games/${game.alias}`}> 
                <a>
                    <div className={styles.GameSectionInfo}>
                        <img src={game.photos.smallCard}/>
                        <div>{game.name}</div>
                        <div>Просмотрено в {game.platform}</div>
                        
                    </div>
                </a>
            </Link >
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
                            : <Button onClick={() => onClick(game)} type="primary">В корзину</Button> 
                    }       
            </div>
        </div>                
    )
}