import {HeaderProps} from './Header.props'
import styles from './Header.module.css'
import { MenuHeaderComponent, MenuToggle } from '../../components'
import Steam from './icon/steam.svg'
import cn from 'classnames'
import { useEffect, useState } from 'react'


export const Header = ({...props}: HeaderProps): JSX.Element => {

    const [scrollTop, setScrollTop] = useState<number>(0)

    useEffect(() => {
        document.addEventListener("scroll", onScroll)
        return function () {
            document.removeEventListener('scroll', onScroll)
        }
    }, [scrollTop])


    const onScroll = (e) => {
        setScrollTop(e.target.documentElement.scrollTop)
    }

    return (
        <div 
        {...props}
        className={styles.Header}
        >
            <MenuToggle type="open"/>
            <div className={cn(styles.Steam, {
                [styles.headHide]: scrollTop > 100 
            })}>
                <span><Steam/></span> 
                <h3>GAMER</h3>
            </div>
            <MenuHeaderComponent/>
        </div>
    )
}

