import cn from 'classnames'
import styles from './Sidebar.module.css'
import { useDispatch } from 'react-redux'
import { SidebarProps } from './Sidebar.props'
import { MenuToggle } from '../../components'
import { MenuAction } from '../../redux/types/menuType'
import { useSelectorHook } from '../../hooks/useSelectorHook'
import { MenuItem } from '../../components'
import { motion } from 'framer-motion'


export const Sidebar = ({...props}: SidebarProps): JSX.Element => {
    const {menuToggle, menuList} = useSelectorHook(state => state)
    const dispatch = useDispatch()


    const variants = {
        show: {
            x: 0,
        },
        hide: {
            x: -500
        }

    }

    const blackBlock = () => <div onClick={() => dispatch({type: MenuAction.HIDE_MENU})} className={styles.BlackBlock}></div>

    return (
        <>
            <motion.div 
                className={styles.Sidebar}
                initial={"hide"}
                variants={variants}
                animate={ menuToggle.toggleMenu ? "show" : "hide"}
            >
                <MenuToggle type='close'/>
                <ul className={styles.MainList}>
                    {
                        menuList.menuList && menuList.menuList.map(menuItem => (
                            <MenuItem key={menuItem.name} list={menuItem}/> 
                        ))
                    }   
                </ul>
            </motion.div>
            {
                menuToggle.toggleMenu
                ? blackBlock()
                : null
            }
           
        </>
       
    )
}