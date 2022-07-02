import styles from './MenuComponent.module.css'
import { MenuComponentProps } from "./MenuComponent.props";

export const MenuComponent = ({toggle, list, ...props}: MenuComponentProps) => {
    return (
    <ul className={styles.MenuComponent}>
        {
            toggle.value === list.name.toUpperCase() && toggle.toggleList && list.block.map((item, i) => (
                <li 
                    key={item.name}
                    style={{animationDelay:`${i / 8}s`, transform: `translateX(${-350}px)`}}
                >{item.name}</li>
            ))
        }  
    </ul> 
    )
}