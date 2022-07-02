import {  useState } from "react"
import { GamesItemProps } from "./GamesItem.props"
import Link from 'next/link'
import styles from './GamesItem.module.css'
import cn from 'classnames'
import { addWatched } from "../../helpers/functions"
import { motion } from 'framer-motion'

export const GamesItem = ({game, ...props}: GamesItemProps): JSX.Element => {

    const [onFocus, setOnFocus] = useState<boolean>(false)

    const variants = {
        hide: {
            opacity: 0,
            
        },
        show : {
            opacity: 1, 
        }
    }

    return (
        <>
            <Link href={`/games/${game.alias}`}>
                <motion.div
                layout
                variants={variants}
                initial={'hide'}
                animate={'show'}
                key={game.alias} 
                className={cn(styles.GameItem, {
                    [styles.active]: onFocus
                })}
                onMouseEnter={() => setOnFocus(true)}
                onMouseLeave={() => setOnFocus(false)}
                onClick={() => addWatched(game)}
                >
                    <div className={styles.GameItemImage}>
                        {
                            onFocus
                            ? <video loop muted autoPlay src={game.video}/>
                            : <img src={game.photos.cardLabel}/>
                        }
                    </div>
                    <div className={styles.GameItemInfo}>
                    
                        <p>{game.name}</p>
                        <p>{game.genre}</p>
                        {
                            game.sales.status
                            ?  <p className={styles.GameItemPriceSale}>
                                    <span>{game.sales.value}%</span>
                                    <span>{game.sales.oldPrice}руб.</span>
                                    <span>{game.price} руб.</span>
                                </p> 
                            : <p className={styles.GameItemPrice}>{game.price} руб.</p> 
                        }
                    
                        <p></p>
                    </div>
                </motion.div>
            </Link>   
        </>  
    )
}
