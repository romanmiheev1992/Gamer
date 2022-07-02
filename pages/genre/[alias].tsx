import axios from "axios"
import { GetStaticPaths, GetStaticProps } from "next"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { GamesList } from "../../components"
import { links } from "../../helpers/links"
import { Games, Menu } from "../../interfaces/dataInterfase"
import { withLayout } from "../../Layout/Layout"
import { GameActions } from "../../redux/types/gamesType"
import { MenuListAction } from "../../redux/types/menuListType"




const Genres = ({games, menu}: GenresProps): JSX.Element => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: GameActions.GET_GAMES_CONTENT, payload: games})
        dispatch({type: MenuListAction.ADD_MENU_LIST, payload: menu})
    }, [])


    return (
        <>
             <GamesList/>
        </>
    )
}

export default withLayout(Genres)

export const getStaticPaths: GetStaticPaths = async () => {

    const paths: string[] = []

    const {data: menu} = await axios.get<Menu[]>(links.menu)

    menu.map(item => {
        if(item.name === "Жанры") {
            item.block.map(item => {
               return paths.push(`/genre/${item.alias}`)
            })
        }
    })
    return {
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async () => {
    const {data: menu} = await axios.get<Menu[]>(links.menu)
    const {data: games} = await axios.get<Games>(links.games)
    return {
        props: {
            menu,
            games
        }
    }
}

export interface GenresProps extends Record<string, unknown> {
    menu: Menu[],
    games: Games[]
}