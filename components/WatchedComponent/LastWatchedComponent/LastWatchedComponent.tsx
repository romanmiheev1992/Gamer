import { LastWatchedComponentProps} from "./LastWatchedComponent.props"
import styles from './LastWatchedComponent.module.css'
import { useSelectorHook } from "../../../hooks/useSelectorHook"
import Link from "next/link"
import { Button } from "../../Button/Button"
import { useRouter } from "next/dist/client/router"
import { Games } from "../../../interfaces/dataInterfase"
import { addGameBacket } from "../../../helpers/functions"
import { useEffect, useState } from "react"


export const LastWatchedComponent = ({game, ...props}: LastWatchedComponentProps): JSX.Element => {

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
    const onClick = (game: Games) => {
        addGameBacket(game)
        router.push('/sign')
    }

    const regRoute = () => {
        router.push('/sign')
    }
    return (
        <div className={styles.LastWatchedComponent} {...props}>
            <p>Последнее просмотренное вами</p>
            <div className={styles.LastWatchedComponentBlock}>
                <Link key={game.alias} href={`/games/${game.alias}`}>
                    <a>
                        <div className={styles.GameSection}>
                            <img src={game.photos.cardLabel}/>
                            <div>
                                <div>{game.name}</div>
                                <div className={styles.watched}>Просмотрено в {game.platform}</div>
                            </div>
                        </div>
                    </a>
                </Link>

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
        </div>
    )
}