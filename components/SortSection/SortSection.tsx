import { SortSectionProps } from "./SortSection.props"
import styles from './SortSection.module.css'
import { ChangeEvent } from "react"


export const SortSection = ({activeGenre, sort = '', ...props}: SortSectionProps): JSX.Element => {
    
    const onChangeGenre = (e: ChangeEvent<HTMLSelectElement>) => {
        activeGenre(e.target.value)
    }

    const onSort = (e: ChangeEvent<HTMLSelectElement>) => {
        sort(e.target.value)
    }

    return(
        <div className={styles.SortSection} {...props}>
            <span>Сортировка</span>
            {
                activeGenre ?
                <div>
                <select onChange={(e) => onChangeGenre(e)}>
                    <option value={'Экшен'}>Экшен</option>
                    <option value={'Приключения'}>Приключения</option>
                    <option value={'Ролевые'}>Ролевые</option>
                    <option value={'Симулятор'}>Симулятор</option>
                    <option value={'Стратегия'}>Стратегия</option>
                </select> 
                </div>
                : null
            }
            

            <div>
                <select onChange={(e) => onSort(e)}>
                    <option value='price'>по цене</option>
                    <option value='name'>по имени</option>
                </select>
            </div>
        </div>
    )
}