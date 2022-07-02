import { GameDescritptionProps } from "./GameDescritption.props"
import styles from './GameDescritption.module.css'


export const GameDescritption = ({game, className, ...props}: GameDescritptionProps): JSX.Element => {

    return (
        <div className={styles.GameDescritption} {...props}>
            <p className={styles.GameHeader}>Об этой игре</p>
            {
                game.discription.gif
                ? <img src={game.discription.gif}/>
                : null
            }
            <p className={styles.GameText}>{game.discription.text}</p>
            <p className={styles.GameHeader}>Системные требования</p>
            <div className={styles.SistemRequirements}>
               <div>
                    <p>Минимальные:</p>
                    <div>
                       <p><span>ОС:</span>{game.systemRequirements.min.os}</p>
                       <p><span>Процессор:</span>{game.systemRequirements.min.prosessor}</p>
                       <p><span>Оперативная память:</span>{game.systemRequirements.min.videoCard}</p>
                       <p><span>Видеокарта:</span>{game.systemRequirements.min.directX}</p>
                       <p><span>DirectX:</span>{game.systemRequirements.min.hardDisk}</p>
                       <p><span>Звуковая карта:</span>{game.systemRequirements.min.soundCard}</p>
                    </div>
               </div>
               <div>
                    <p>Рекомендуемые:</p>
                    <div>
                       <p><span>ОС:</span>{game.systemRequirements.recomended.os}</p>
                       <p><span>Процессор:</span>{game.systemRequirements.recomended.prosessor}</p>
                       <p><span>Оперативная память:</span>{game.systemRequirements.recomended.videoCard}</p>
                       <p><span>Видеокарта:</span>{game.systemRequirements.recomended.directX}</p>
                       <p><span>DirectX:</span>{game.systemRequirements.recomended.hardDisk}</p>
                       <p><span>Звуковая карта:</span>{game.systemRequirements.recomended.soundCard}</p>
                    </div>
               </div>

            </div>
        </div>
    )
}