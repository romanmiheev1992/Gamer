import axios from "axios"
import { GetStaticPaths, GetStaticProps } from "next"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { GameComponent} from "../../components"
import { links } from "../../helpers/links"
import { Games, Menu } from "../../interfaces/dataInterfase"
import { withLayout } from "../../Layout/Layout"
import { GameActions } from "../../redux/types/gamesType"
import { MenuListAction } from "../../redux/types/menuListType"

const Game = ({games, menu}: GamesProps): JSX.Element => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: GameActions.GET_GAMES_CONTENT, payload: games})
        dispatch({type: MenuListAction.ADD_MENU_LIST, payload: menu})
    }, [])

    return (
        <>
            <GameComponent/>
        </>
    )
}

export default withLayout(Game)

export const getStaticPaths: GetStaticPaths = async () => {
    
    const paths: string[] = []

    const {data: games} = await axios.get<Games[]>(links.games)

    games.map(game => {
        return paths.push(`/games/${game.alias}`)
    })

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async () => {
    const {data: menu} = await axios.get<Menu[]>(links.menu)
    const {data: games} = await axios.get<Games[]>(links.games)
    return {
        props: {
            menu,
            games
        }
    }
}

export interface GamesProps extends Record<string, unknown> {
    menu: Menu[],
    games: Games[]
}