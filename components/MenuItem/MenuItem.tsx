import { MenuItemProps } from "./MenuItem.props"
import styles from './MenuItem.module.css'
import { useRef, useState } from "react"
import Arrow from './icon/arrow2.svg'
import cn from 'classnames'
import Link from "next/link"
import { motion } from 'framer-motion'
import { useDispatch } from "react-redux"
import { MenuAction } from "../../redux/types/menuType"

export const MenuItem = ({list, ...props}: MenuItemProps): JSX.Element => {

    const [active, setActive] = useState<boolean>(false)
    const dispatch = useDispatch()

    const variants = {
        visible: {
            transition: {
                staggerChildren: 0.1,
                marginBottom: 10,
            },
            height: 'auto' ,
            backgroundColor: 'hsl(214, 32%, 15%)'
       
        },
        hidden: {
            marginBottom: 0,
            height: 0,
        }
    }


    const onClick = () => {
        setActive(!active)
    }

    const link = () => {
        if(list.name.toUpperCase() === 'ЖАНРЫ') {
            return '/genre/'
        }
        if(list.name.toUpperCase() === 'НОВОЕ И ПРИМЕЧАТЕЛЬНОЕ') {
            return '/popular/'
        }
        if(list.name.toUpperCase() === 'РЕГИСТРАЦИЯ' || list.name.toUpperCase() === 'ВАШ МАГАЗИН') {
            return '/'
        }
    }



    return (

        <>
        <li 
        onClick={() => onClick()} 
        className={cn(styles.HeadComponent, {
            [styles.active]: active,
            [styles.disactive]: !active
        })}
       
       
        > <span>{list.name.toUpperCase()}</span>
        <Arrow className={cn(styles.Arrow, {
            [styles.up]: active,
            [styles.down]: !active,
        })} />
        
        </li>

        <motion.div
            className={styles.MenuComponent}
            layout
            variants={variants}
            initial={'hidden'}
            animate={active ? "visible" : 'hidden'}
        >
        {   
            list.block.map((item, i) => (
                <Link 
                key={item.alias} 
                href={`${link()}${item.alias}`}
                >
                    <li 
                        onClick={() => dispatch({type: MenuAction.HIDE_MENU})}
                        className={cn(styles.listItem, {
                            [styles.active]: active,
                            [styles.disactive]: !active
                        })}
                    >{item.name}
                    </li>
                </Link>
                
            ))
         
        }  
        </motion.div> 
    </>

       
    )
}