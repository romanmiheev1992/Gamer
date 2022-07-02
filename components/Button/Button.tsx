import { ButtonProps } from "./Button.props";
import cn from 'classnames'
import Arrow from './icons/arrow.svg'
import styles from './Button.module.css'

export const Button = ({type, children, ...props}: ButtonProps): JSX.Element => {
    
    return (
        <button 
        {...props}
        className={cn(styles.Button, {
            [styles.SliderRightButton]: type === 'slider_right',
            [styles.SliderLeftButton]: type === 'slider_left',
            [styles.SmallSliderRightButton]: type === 'small_slider_right',
            [styles.SmallSliderLeftButton]: type === 'small_slider_left',
            [styles.PrimaryButton]: type === 'primary',
            [styles.SubmitButton]: type === 'submit',
        })}
        >
            {
                type === 'slider_right' || type === 'slider_left' || type === 'small_slider_right' || type === 'small_slider_left'
                ?<Arrow/>
                : children 
            }
           
        </button>
    )
}