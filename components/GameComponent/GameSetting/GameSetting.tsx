import { GameSettingProps } from "./GameSetting.props"
import Gamepad from './icon/gamepad.svg'
import Star from './icon/star.svg'
import Card from './icon/photo.svg'
import Cube from './icon/winner.svg'
import Single from './icon/single.svg'
import Coopirative from './icon/coopirative.svg'
import PVP from './icon/PVP.svg'
import styles from './GameSetting.module.css'

export const GameSetting = ({game, ...props}: GameSettingProps): JSX.Element => {


    const singlePlayer = () => {
        return (
            <div>
                <Single/>
                <p>Для одного игрока</p>
            </div>
        )
    }

    const multiplayerPlayer = () => {
        return (
            <div>
                <PVP/>
                <p>Против игроков (по сети)</p>
            </div>
        )
    }

    const cooperativePlayer = () => {
        return (
            <div>
                <Coopirative/>
                <p>Кооператив (по сети)</p>
            </div>
        )
    }

    const ahivement = () => {
        return (
            <div>
                <Cube/>
                <p>Достижения Steam </p>
            </div>
        )
    }

    const gamepad = () => {
        return (
            <div>
                <Gamepad/>
                <p>Контроллер (полностью)</p>
            </div>
        )
    }

    const cards = () => {
        return (
            <div>
                <Card/>
                <p>Коллекционные карточки</p>
            </div>
        )
    }

    


    return (
        <div className={styles.GameSetting} {...props}>
            {
                game.settings.singleplayer
                ? singlePlayer()
                : null
            }
            {
                game.settings.multiplayer
                ? multiplayerPlayer()
                : null
            }
            {
                game.settings.cooperative
                ? cooperativePlayer()
                : null
            }
            {
                game.settings.steamAchievements
                ? ahivement()
                : null
            }
            {
                game.settings.controller
                ? gamepad()
                : null
            }
             {
                game.settings.steamCards
                ? cards()
                : null
            }
        </div>
    )
}