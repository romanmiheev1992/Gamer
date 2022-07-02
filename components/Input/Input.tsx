import { InputProps } from "./Input.props"
import styles from './Input.module.css'

export const Input = ({error, name, value, type,  children, ...props}: InputProps): JSX.Element => {

    return (
        <div className={styles.Input}>
            <input value={value} name={name} {...props} type={type}/>
           {<span> {error && error}</span>}
           {children}
        </div>
    )
}