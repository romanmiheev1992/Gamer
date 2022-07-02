import { MainSliderProps } from "./MainSlider.props";
import styles from './MainSlider.module.css'
import { useSelectorHook } from "../../hooks/useSelectorHook";
import { format, getTime } from "date-fns";
import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { SliderBord } from "../SliderBord/SliderBord";
import Link from "next/link";
import { Games } from "../../interfaces/dataInterfase";
import { addWatched } from "../../helpers/functions";
import { useSwipeable } from "react-swipeable";

export const MainSlider = ({...props}: MainSliderProps): JSX.Element => {
    
    const {gamesList} = useSelectorHook(state => state)
    const [imageNum, setImageNum] = useState<number | null>(null)
    const [slideNum, setSlideNum] = useState<number>(0)
    const recomendedList = gamesList.games.filter(game => game.recomended)
    

    const handlers = useSwipeable({
        onSwipedLeft: () =>  slideNum >= recomendedList.length - 1 ? setSlideNum(0) : setSlideNum(slideNum + 1),
        onSwipedRight: () => slideNum <= 0 ?  setSlideNum(recomendedList.length - 1) : setSlideNum(slideNum - 1),
    })


    const onMouseEnter = (e) => {
        setImageNum(e._targetInst.key)
    }

    const onMouseLeave = (e) => {
        setImageNum(null)
    }

    const onClickNext = () => {
        if(slideNum >= recomendedList.length - 1){
            setSlideNum(0)
        } else {
            setSlideNum(slideNum + 1)
        }
    }

    const onClickPrev = () => {
        if(slideNum <= 0){
            setSlideNum(recomendedList.length - 1)
        } else {
            setSlideNum(slideNum - 1)
        }
    }

    return (
        <div 
        {...props}
        className={styles.MainSlider}
        >
            <p>ПОПУЛЯРНОЕ И РЕКОМЕНДУЕМОЕ</p>
            <div className={styles.MainSliderPoster}>
                <>
                <Button 
                    type="slider_left"
                    onClick={onClickPrev}
                />
                {
                    recomendedList.map((game: Games, i: number) => (
                        slideNum === i
                        ?
                            <Link key={i} href={`games/${game.alias}`}>
                                <div 
                                {...handlers}
                                className={styles.MainPosterBlock}
                                onClick={() => addWatched(game)}   
                                >
                                    <div className={styles.MainPoster}>
                                        {
                                            imageNum
                                            ? <img src={game.photos.cardImageListBig[imageNum]}/>
                                            : <img src={game.photos.mainPoster}/>
                                        }
                                        
                                    </div>
                                    <div className={styles.MainLabel}>
                                    <p>{game.name}</p>
                                    <div className={styles.MainLabelPhotos}>
                                            {
                                                game.photos.cardImageListBig.map((photo, i) => (
                                                    i <= 3 
                                                    ? <img 
                                                        key={i} 
                                                        src={photo}
                                                        onMouseEnter={onMouseEnter}
                                                        onMouseLeave={onMouseLeave}
                                                        />
                                                    : null
                                                ))
                                            }
                                    </div>
                                    <div className={styles.MainLabelPrice}>
                                            {
                                                game.sales.value
                                                ? <p className={styles.MainLabelPriceSale}> 
                                                        <span>-{game.sales.value}%</span>  
                                                        <span>{game.sales.oldPrice} руб.</span> {game.price} руб.
                                                    </p>
                                                : <p>{game.price} руб.</p>
                                            }
                                    </div>
                                    </div>
                                </div>
                            </Link>
                        : null
                  ))    
                }
                <Button 
                type="slider_right"
                onClick={onClickNext}
                />
                  </>
            </div>
            <SliderBord lengthList={recomendedList} numClick={setSlideNum} num={slideNum}/>
        </div>
    )
}