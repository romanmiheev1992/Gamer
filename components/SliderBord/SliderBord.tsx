import { useState } from "react"
import { SliderBordProps } from "./SliderBord.props"
import cn from 'classnames'
import styles from './SliderBord.module.css'

export const SliderBord = ({lengthList, numClick, num ,...props}: SliderBordProps): JSX.Element => {
    
    return (
        <div 
        {...props}
        className={styles.SliderBord}
        >
            {
                lengthList.map((block: any, i: number): JSX.Element => (
                    <div
                        key={i}
                        className={cn(styles.SliderBordBlock, {
                            [styles.active] : i === num 
                        })}
                        onClick={() => numClick(i)}
                    ></div>
                ))
            }
        </div>
    )
}