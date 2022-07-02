import { useRouter } from "next/dist/client/router"
import { useSelectorHook } from "../../hooks/useSelectorHook"
import { GameComponentProps } from "./GameComponent.props"
import styles from './GameComponent.module.css'
import { useEffect, useState } from "react"
import { Slider } from "./Slider/Slider"
import { SliderSmall } from "./SliderSmall/SliderSmall"
import { Button } from "../Button/Button"
import { Games } from "../../interfaces/dataInterfase"
import { GameInfo } from "./GameInfo/GameInfo"
import { Price } from "./Price/Price"
import { GameDescritption } from "./GameDescritption/GameDescritption"
import { GameSetting } from "./GameSetting/GameSetting"


export const GameComponent = ({className, ...props}: GameComponentProps): JSX.Element => {

    const {gamesList} = useSelectorHook(state => state)
    const [sliderCounter, setSliderCounter] = useState(0)
    const [currentGame, setCurrentGame] = useState<Games>(gamesList.games[0])

    const router = useRouter()

    useEffect(() => {
        gamesList.games && gamesList.games.map(game => (
            router.asPath === `/games/${game.alias}`
             ? setCurrentGame(game) 
             : null
          ))
          setSliderCounter(0)
    }, [gamesList])


    const onClickButtonRight = () => {
        if(sliderCounter >= currentGame.photos.cardImageListSmall.length) {
            setSliderCounter(0)
        } else {
            setSliderCounter(sliderCounter + 1)
        }
        
    }

    const onClickButtonLeft = () => {
        if(sliderCounter === 0) {
            setSliderCounter( currentGame.photos.cardImageListSmall.length)
        } else {
            setSliderCounter(sliderCounter - 1)
        }
    }

    return (
        <div className={styles.GameComponent} {...props}>
            {
                currentGame
                ? 
                <>
                    <h3>{currentGame.name}</h3>

                    <Slider photos={currentGame} num={sliderCounter}/>
                    <div key={currentGame.alias} className={styles.SmellSliderWrapper}>
                        <div className={styles.SmallSliderButtonLeft}><Button type='small_slider_left' onClick={() => onClickButtonLeft()}></Button></div>
                        <SliderSmall photos={currentGame} setNum={setSliderCounter}  num={sliderCounter}/>
                        <div className={styles.SmallSliderButtonRight}><Button type='small_slider_right' onClick={() => onClickButtonRight()}></Button></div>
                    </div>                    
                    <GameInfo game={currentGame} />
                    <Price game={currentGame}/>
                    <GameDescritption game={currentGame}/>
                    <GameSetting game={currentGame}/>
                </>
                : null
            }
        </div>
    )
}