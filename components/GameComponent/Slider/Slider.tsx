import { SliderProps } from "./Slider.props";
import styles from './Slider.module.css'

export const Slider = ({photos, className, num, ...props}: SliderProps): JSX.Element => {

    return (
        <div 
        {...props}
        className={styles.Slider}
        >
            {
                num === 0
                ? <video autoPlay muted controls src={photos.video}/> 
                :
                 photos.photos.cardImageListBig.map((photo, i) => (
                    num === i+ 1 ? 
                    <img
                     src={photo}
                     key={photo}
                     />
                     :null
                ))
            }
            
        </div>
    )
}