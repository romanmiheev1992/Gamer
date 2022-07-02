
import styles from './MenuToggle.module.css'
import Menu from './icons/menu.svg'
import Close from './icons/close.svg'
import { MenuToggleProps } from './MenuToggle.props'
import { useSelectorHook } from '../../hooks/useSelectorHook'
import { useDispatch } from 'react-redux'
import { MenuAction } from '../../redux/types/menuType'


export const MenuToggle = ({type, ...props}: MenuToggleProps): JSX.Element => {
    const {menuToggle} = useSelectorHook(state => state)
    const dispatch = useDispatch()

    const onClick = () => {
        if(menuToggle.toggleMenu) {
            dispatch({type: MenuAction.HIDE_MENU})
        } else {
            dispatch({type:  MenuAction.SHOW_MENU})
        }
    }

    return (
        <div 
            {...props}
            className={styles.MenuToggle}
            onClick={onClick}
        >
           {
                type === 'open'
                ? <Menu/>
                : <Close/>      
           }
        </div>
    )
}