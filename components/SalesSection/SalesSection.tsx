import { SalesSectionProps } from "./SalesSection.props";
import styles from './SalesSection.module.css'
import { useSelectorHook } from "../../hooks/useSelectorHook";
import { useState } from "react";
import { Button } from "../Button/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { addWatched } from "../../helpers/functions";
import { useSwipeable } from "react-swipeable";


export const SalesSection = ({ ...props}: SalesSectionProps): JSX.Element => {

    const {gamesList} = useSelectorHook(state => state)
    const [margin, setMargin] = useState<number>(0)
    const salesGames = gamesList.games.filter(game => game.sales.status)

    const variants = {
        move: {
            x: -margin,
            transition: {
                duration: 0
            }
        }
    }


    const handlers = useSwipeable({
        onSwipedLeft: (event) => margin <= (333 * salesGames.length - 333) ? setMargin(margin - event.deltaX) : setMargin(0),
        onSwipedRight: (event) => margin > 0 ? setMargin(margin - event.deltaX ) :  setMargin(0),
    })

    const nextCorusel = () => {
        if(margin <= (333 * salesGames.length - 1000)){
             setMargin(margin + 333)
        } else {
            setMargin(0)
        }
           
    }   
    
    const prevCorusel = () => {
        if(margin > 0) {
            setMargin(margin - 333)
        } else {
            setMargin(0)
        }
    }

    

    return(
        <div className={styles.SalesSection} {...props}>
            <p>СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ</p>
            <div className={styles.sliderWrapper}   {...handlers}>
                <Button 
                    type="slider_left"
                    onClick={() => prevCorusel()}
                />
                <div className={styles.SalesSectionField}>
                    <motion.div 
                        className={styles.SalesSectionCarusel}
                        style={{width: `${333 * salesGames.length}px`}}    
                        animate={'move'}
                        variants={variants}  
                    >
                        {
                            salesGames.map(game => (
                                <Link key={game.alias} href={`games/${game.alias}`}>
                                    <div
                                    
                                        onClick={() => addWatched(game)}
                                        className={styles.SalesSectionBlock}
                                        style={{backgroundImage: `url(${game.photos.cardLabel})`}}
                                    >
                                        <div
                                            className={styles.SalesInfo}
                                        >
                                            <p>{game.name} 
                                                <span>{game.sales.value}%</span>
                                                <span>{game.sales.oldPrice}руб.</span>
                                                <span>{game.price} руб.</span>
                                            </p> 

                                        </div>
                                        
                                    </div>
                                </Link>
                            ))
                        }   
                    </motion.div>
                </div>
                <Button 
                    type="slider_right"
                    onClick={() => nextCorusel()}
                />
            </div>
        </div>
    )
}