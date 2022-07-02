import { GameInfoProps } from "./GameInfo.props"
import styles from './GameInfo.module.css'

export const GameInfo = ({game, ...props}: GameInfoProps) => {

    return (
        <div className={styles.GameInfo} {...props}>
            <img src={game.photos.cardLabel} />
            <div className={styles.GameInfoDescription}>
                {`${game.discription.text.slice(0, 200)}...`}
            </div>
            <div className={styles.InfoBlock}>
                <div className={styles.InfoText}>
                    <p>Дата выхода:</p>
                    <p>Разработчик:</p>
                    <p>Издатель:</p>
                </div> 
                <div className={styles.Info}>
                    <p>{game.date.day} {

                    game.date.month === 1
                        ? ' янв '
                        : game.date.month === 2
                        ? ' фев. '
                        : game.date.month === 3
                        ? ' мар. '
                        : game.date.month === 4
                        ? ' апр. '
                        : game.date.month === 5
                        ? ' май. '
                        : game.date.month === 6
                        ? ' июн. '
                        : game.date.month === 7
                        ? ' июл. '
                        : game.date.month === 8
                        ? ' авг. '
                        : game.date.month === 9
                        ? ' сен. '
                        : game.date.month === 10
                        ? ' окт. '
                        : game.date.month === 11
                        ? ' ноя. '
                        : game.date.month === 12
                        ? ' дек. '
                        : null

                    }{game.date.year}</p>
                    <p>{game.developer}</p>
                    <p>{game.publisher.map(g => g)}</p>
                </div> 
            </div>
           
        </div>
    )
}