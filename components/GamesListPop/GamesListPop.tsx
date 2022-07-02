import { useRouter } from "next/dist/client/router"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useSelectorHook } from "../../hooks/useSelectorHook"
import { Games } from "../../interfaces/dataInterfase"
import { GamesListProps } from "./GamesListPop.props"
import styles from './GamesListPop.module.css'
import { GamesItem } from "../GamesItem/GamesItem"
import { SortSection } from "../SortSection/SortSection"

export const GamesListPop = ({...props}: GamesListProps): JSX.Element => {

    const {gamesList} = useSelectorHook(state => state) 
    const router = useRouter()
    const [activeGenre, setActiveGenre] = useState<string>()
    const [sortSet, setSortSet] = useState<boolean>(false)
    const [currentList, setCurrentList] = useState<Games[]>([])

    const [sort, setSort] = useState('')

    useEffect(() => {
        currentSort()
        setSortSet(!sortSet)
    }, [sort])
    
    useEffect(() => {
        currentPage()
    }, [router])

    const currentSort = () => {
        if(sort === 'price') {
            setCurrentList(currentList.sort((a, b) => a.price - b.price))
        }
        if(sort === 'name') {
            setCurrentList(currentList.sort((a, b) => {
                const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
                    if (nameA < nameB) 
                    return -1
                    if (nameA > nameB)
                    return 1
                    return 0
            }))
        }
    }


    const currentPage = () => {
        if(router.asPath.split('/')[router.asPath.split('/').length -1] === 'bestsaler') {
            setCurrentList(gamesList.games.filter(game => game.bestSeller))
            setActiveGenre("Лидеры продаж")
        } 
        if(router.asPath.split('/')[router.asPath.split('/').length -1] === 'popular&new') {
            setCurrentList(gamesList.games.filter(game => game.new))
            setActiveGenre("Популярные новинки")
        }
    }

    return (
        <div className={styles.GameList} {...props}>
            <SortSection sort={setSort}/>
            <h3>{activeGenre}</h3>
            {
                 currentList && currentList.map((game: Games, i: number) => (
                        <GamesItem 
                        key={game.alias} 
                        game={game}
                        />
                   
                ))
            }
        </div>
    )
}