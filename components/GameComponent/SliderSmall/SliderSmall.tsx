import { SliderSmallProps } from "./SliderSmall.props";
import styles from './SliderSmall.module.css'
import cn from 'classnames'
import Play from './icon/play.svg'
import { motion } from 'framer-motion'


export const SliderSmall = ({photos, setNum, num, ...props}: SliderSmallProps): JSX.Element => {

    return (
        <div 
        className={styles.SliderSmall} 
        {...props}
        
        >

            <div 
            onClick={() => setNum(0)}
            className={cn(styles.SliderSmallTrailer, {
                [styles.active]: num === 0
            })}>
            
                <img src={photos.photos.cardLabel}></img> 
                <Play/>
            </div>
                
            {
                photos.photos.cardImageListSmall && photos.photos.cardImageListSmall.map((photo, i) => (
                    <img 
                    className={cn({
                        [styles.active]: num === i+1
                    })}

                    key={photo}
                    src={photo} 
                    onClick={() => setNum(i+1 )}
                    />
                ))
            }    

        </div>
    )
}