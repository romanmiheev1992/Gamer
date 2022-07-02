import { WatchedComponentProps } from "./WatchedComponent.props"
import styles from './WatchedComponent.module.css'
import { useSelectorHook } from "../../hooks/useSelectorHook"
import { LastWatchedComponent } from "./LastWatchedComponent/LastWatchedComponent"
import { addGameBacket } from "../../helpers/functions"
import { useRouter } from "next/dist/client/router"
import { LateWatchedComponent } from "./LateWatchedComponent/LateWatchedComponent"
import { Games } from "../../interfaces/dataInterfase"


export const WatchedComponent = ({...props}: WatchedComponentProps): JSX.Element => {

    const {watchedList} = useSelectorHook(state => state)

    return (
        <div className={styles.WatchedComponent} {...props}>
            <h4>Недавно просмотренные</h4>
            <div className={styles.WatchedComponentBlock}>
                {   watchedList.watchedList.length > 0
                    ?   watchedList.watchedList && watchedList.watchedList.map((game, i) => (
                            i === 0
                            ? <LastWatchedComponent key={i} game={game}/>
                            : <LateWatchedComponent key={i} game={game}/>
                        ))
                    : <h4>Вы пока ничего не посмотрели</h4>
                }
            </div>
           
        </div>
    )
}