import { Search } from '../Serch/Serch';
import { MouseEventHandler, useEffect, useState } from 'react';
import styles from './MenuHeaderComponent.module.css'
import { useSelectorHook } from '../../hooks/useSelectorHook';
import { MenuHeaderComponentProps } from "./MenuHeaderComponent.props";
import { Games, Menu, MenuBlock } from "../../interfaces/dataInterfase"
import Link from 'next/link'
import cn from 'classnames'


export const MenuHeaderComponent = ({className, ...props}: MenuHeaderComponentProps) => {
    const [value, useValue] = useState<string>('')
    const {menuList, userData} = useSelectorHook(state => state)
    const [scrollTop, setScrollTop] = useState<number>(0)

    useEffect(() => {
        document.addEventListener("scroll", onScroll)
        return function () {
            document.removeEventListener('scroll', onScroll)
        }
    }, [scrollTop, menuList])

    const onScroll = (e) => {
        setScrollTop(e.target.documentElement.scrollTop)
    }

    const menuItemsComponets = (props: Menu) => {
        return (
            <ul className={styles.MenuItemsComponets}>
                {
                    props.name === 'Жанры'
                    ? props.block.map((item: MenuBlock)  => (
                    <Link key={item.alias} href={`/genre/${item.alias}`}><li key={item.name}>{item.name}</li></Link> 
                    ))
                    : null
                }
                {
                    props.name === 'Новое и примечательное'
                    ? props.block.map((item: MenuBlock)  => (
                        <Link key={item.alias} href={`/popular/${item.alias}`}><li key={item.name}>{item.name}</li></Link> 
                    ))
                    : null
                }
                {
                    props.name === 'Ваш магазин'
                    ? props.block.map((item: MenuBlock)  => (
                        <Link key={item.alias} href={`/${item.alias}`}><li key={item.name}>{item.name}</li></Link> 
                    ))
                    : null
                }
                {
                    props.name === 'Регистрация'
                    ? props.block.map((item: MenuBlock)  => (
                        <Link key={item.alias} href={`/${item.alias}`}><li key={item.name}>{userData.status ? "Личный кабинет" : item.name}</li></Link> 
                    ))
                    : null
                }
            </ul>
        )
    }

    const onMouseEnter = (e) => {
        useValue(e.target.outerText)
    }

    const onMouseleave = () => {
        useValue('')
    }

    return (
        <div 
        className={cn(styles.MenuHeaderComponent, {
            [styles.headerHide]: scrollTop > 100 
        })}
        {...props}
        >
            <ul>
                {
                  menuList.menuList && menuList.menuList.map((menuItem, i) => (
                        <li
                            key={i}
                            onMouseEnter={(e) => onMouseEnter(e)} 
                            onMouseLeave={onMouseleave} 
                        >{menuItem.name}
                            {
                                value === menuItem.name
                                ? menuItemsComponets(menuItem)
                                : null
                            }
                        </li>
                    ))
                }  
            </ul>
            <Search/>
        </div>
    )
}