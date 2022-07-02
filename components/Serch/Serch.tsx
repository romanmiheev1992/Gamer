import { useSelectorHook } from "../../hooks/useSelectorHook";
import { SearchProps } from "./Serch.props";
import styles from './Serch.module.css'
import { useState } from "react";
import Link from "next/link";
import { addWatched } from "../../helpers/functions";
import { motion } from 'framer-motion'

export const Search  = ({...props}: SearchProps): JSX.Element => {
    const [serachValue, useSearchValue] = useState<string>('')
    const {gamesList} = useSelectorHook(state => state)
    const searchList = gamesList.games&& gamesList.games.filter(game => {
        return game.name.toLowerCase().includes(serachValue.toLowerCase())
    })

    const onChange = (e) => {
        useSearchValue(e.target.value)
    }

    const variants = {
        show: {
            opacity: 1,
            height: 'auto',
            transition: {
                duration: 0.4,
            }
        },
        hide: {
            transition: {
                duration: 1,
            },
            height: 0,
            opacity: 0,
        }
    }


    return (
        <div 
        {...props}
        className={styles.Search}
        >
            <input 
                placeholder="поиск игр..." 
                onChange={onChange}
            />
            <motion.div 
                                variants={variants}
                                initial={'hide'}
                                animate={serachValue ? 'show' : 'hide'}
                                 className={styles.SeachResult}>
                 {
                    serachValue && searchList.map((game, i) => (
                        i < 10
                        ?
                        <Link key={game.alias} href={`/games/${game.alias}`}>
                            <motion.div
                                layout
                                className={styles.GameBlock}
                                onClick={() => addWatched(game)}
                            >
                                <img src={game.photos.smallCard} />
                                <div>
                                    <span>{game.name}</span> 
                                    <span>{game.price} руб.</span> 
                                </div>

                            </motion.div>
                        </Link>
                        : null
                    ))
                }
            </motion.div>
           
        </div>
    )
}