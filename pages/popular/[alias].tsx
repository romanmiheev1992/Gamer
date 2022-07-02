import axios from "axios"
import { GetStaticPaths, GetStaticProps } from "next"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { GamesListPop } from "../../components"
import { links } from "../../helpers/links"
import { Games, Menu } from "../../interfaces/dataInterfase"
import { withLayout } from "../../Layout/Layout"
import { GameActions } from "../../redux/types/gamesType"
import { MenuListAction } from "../../redux/types/menuListType"




const Popular = ({games, menu}: PopularProps): JSX.Element => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: GameActions.GET_GAMES_CONTENT, payload: games})
        dispatch({type: MenuListAction.ADD_MENU_LIST, payload: menu})
    }, [])


    return (
        <>
             <GamesListPop/>
        </>
    )
}

export default withLayout(Popular)

export const getStaticPaths: GetStaticPaths = async () => {

    const paths: string[] = []

    const {data: menu} = await axios.get<Menu[]>(links.menu)

    menu.map(item => {
        if(item.name === "Новое и примечательное") {
            item.block.map(item => {
               return paths.push(`/popular/${item.alias}`)
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

export interface PopularProps extends Record<string, unknown> {
    menu: Menu[],
    games: Games[]
}