import { FormComponentProps } from "./FormComponent.props"
import styles from './FormComponent.module.css'
import { Form } from "../Form/Form"
import { MessageBlock } from "../MessageBlock/MessageBlock"
import { useSelectorHook } from "../../hooks/useSelectorHook"
import { useDispatch } from "react-redux"
import { FromToggleAction } from "../../redux/types/formToggleType"
import { Button } from "../Button/Button"
import { PersonalArea } from "../PersonalArea/PersonalArea"
import { FormAction } from "../../redux/types/formType"
import { motion } from 'framer-motion'
import { useState } from "react"


export const FormComponent = ({...props}: FormComponentProps): JSX.Element => {

    const {formToggle, userData} = useSelectorHook(state => state)
    const [adopToggle, setAdopToggle] = useState<boolean>(formToggle.formToggle)
    const dispatch = useDispatch()

    const variants = {
        reg: {
            x: -20,
            y: -200,
        },
        in: {
            x: -350,
            y: -200,
        }
    }

    const toggleForm = () => {
            dispatch({type: FromToggleAction.TOGGLE_FORM})
            dispatch({type:  FormAction.INPUT_EMAIL, payload: ''}) 
            dispatch({type:  FormAction.INPUT_PASSWORD, payload: ''}) 
    }

   

 
    return (
        <div className={styles.FormComponent} {...props}>
           
            {
                userData.status
                ? <PersonalArea/>
                : 
                <>
                    <motion.div
                        className={styles.imgBlock}
                        variants={variants}
                        initial={'reg'}
                        animate={formToggle.formToggle ? 'in' :'reg'}
                    >
                        <img src="https://store.akamai.steamstatic.com/public/shared/images/login/join_pc.png?v=1"></img>
                        <p>{!formToggle.formToggle ? 'Если вы уже зарегистрировалить, то для входа нажми эту кнопку' : 'Прежде чем войти с начала надо зарегистрироваться'}</p>
                        <Button type="primary" onClick={() => toggleForm()}>{!formToggle.formToggle ? 'Войти' : 'Зарегистрироваться'}</Button>
                    </motion.div>
                    <Form toggle={adopToggle}/>
                    <div className={styles.AdopButton}>
                    <Button type='primary' onClick={toggleForm}>{!formToggle.formToggle ? 'Войти' : 'Зарегистрироваться'}</Button>
                    </div>
                </>

                
            }
            <MessageBlock/>
        </div>
    )
}