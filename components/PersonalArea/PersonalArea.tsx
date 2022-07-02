import { PersonalAreaProps } from "./PersonalArea.props"
import styles from './PersonalArea.module.css'
import { useSelectorHook } from "../../hooks/useSelectorHook"
import { CalcBlock } from "../CalcBlock/CalcBlock"
import { Button } from "../Button/Button"
import { useRouter } from "next/dist/client/router"
import { useDispatch } from "react-redux"
import { GameBasketAction } from "../../redux/types/gameBasketType"
import { UserDataAction } from "../../redux/types/userDataType"
import { motion } from 'framer-motion'
import Sad from './icon/sad.svg'


export const PersonalArea = ({...props}: PersonalAreaProps): JSX.Element => {
    const {userData, gameBasket} = useSelectorHook(state => state)
    const router = useRouter()
    const dispatch = useDispatch()

    

    const deleteGame = (alias: string) => {
        dispatch({type: GameBasketAction.FILTER_GAMES, payload: alias})
    }

    const exit = () => {
        dispatch({type: UserDataAction.CLEAR_USER})
        localStorage.removeItem('name')
        dispatch({type: GameBasketAction.DELETE_ALL_GAMES})
        router.push('/')
    }

 

  

    return (
        <motion.div layout className={styles.PersonalArea}>
            
            <div className={styles.PersonalAreaButton}>
                <h3>Личный кабинет</h3>
                <Button type='primary' onClick={() => exit()}>Выход</Button>
            </div>
            <p>Пользователь: {userData.email}</p>
            <h4>Корзина</h4>
            
               
           
            <div className={styles.PersonalAreaBlocks}>
                <div>
                    {   gameBasket.games.length
                        ?
                        gameBasket.games && gameBasket.games.map(game => (

                            <motion.div 
                                layout
                                key={game.alias}
                                className={styles.GameBasketBlock}
                            >

                                <img src={game.photos.smallCard}/>
                                <p> {game.name}</p>
                                <p>{game.price} руб.</p>
                              
                                <Button onClick={() => deleteGame(game.alias)} type='primary'>Удалить</Button>

                                
                            </motion.div>
                           
                        ))
                        : <div className={styles.Enpty}>
                            <Sad/>
                            <p>Корзина пуста</p>
                            </div> 
                    }
                     
                </div>
                <CalcBlock/>    
            </div>
        </motion.div>
    )
}