import { Button } from "../Button/Button"
import { Input } from "../Input/Input"
import { FormProps } from "./Form.props"
import styles from './Form.module.css'
import { useSelectorHook } from "../../hooks/useSelectorHook"
import { useDispatch } from "react-redux"
import { FormAction } from "../../redux/types/formType"
import { ChangeEvent, FocusEventHandler, FormEvent, useEffect, useState } from "react"
import Eye from './icon/eye.svg'
import cn from 'classnames'
import { motion } from 'framer-motion'
import { GameBasketAction } from "../../redux/types/gameBasketType"
import { StatusAction } from "../../redux/types/statusType"


export const Form = ({toggle, ...props}: FormProps): JSX.Element => {
    const dispatch = useDispatch()
    const {form, status, formToggle} = useSelectorHook(state => state)
    const [passwordToggle, setPasswordToggle] = useState<boolean>(false)
    const [emailTouched, setEmailTouched] = useState<boolean>(false)
    const [passwordTouched, setPasswordTouched] = useState<boolean>(false)
    const [emailError, setEmailError] = useState<string>('Поле не может быть пустым')
    const [passwordError, setPasswordError] = useState<string>('Поле не может быть пустым')
    
    useEffect(() => {
        dispatch({type: FormAction.INPUT_EMAIL, payload: '' })
        dispatch({type: FormAction.INPUT_PASSWORD, payload: '' })
    }, [status])


    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch({type: GameBasketAction.DELETE_ALL_GAMES})
        
        if(emailTouched && passwordTouched && emailError === '' && passwordError === '' && !formToggle.formToggle && form.email && form.password) {
            dispatch({type: FormAction.FORM_SUBMIT})
            dispatch({type: StatusAction.DELETE_STATUS})
        } else if(emailTouched && passwordTouched && emailError === '' && passwordError === '' && formToggle.formToggle && form.email && form.password) {
            dispatch({type: FormAction.FORM_SIGN_UP})
            dispatch({type: StatusAction.DELETE_STATUS})
        } else if(form.email === '' || form.password === ''){
            setEmailError('Заполните данные корректно')
            setPasswordError('Заполните данные корректно')
        } 
    }

    const onBlur = (e) => {
        switch(e.target.name) {
            case "email":
                setEmailTouched(true)
                break;
            case "password":
                setPasswordTouched(true)
                break;
        }
    }

    const inputEmail = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({type: FormAction.INPUT_EMAIL, payload: e.target.value })
        const emailVal = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(emailVal.test(String(form.email).toLowerCase()) ) {
            setEmailError('')
        } else {
            setEmailError('Введен некорректный email')
        }
    }

    const inputPassword = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({type: FormAction.INPUT_PASSWORD, payload: e.target.value })
        if(form.password.length < 6) {
            setPasswordError('Паполь не менее 6 символов')
        } else {
            setPasswordError('')
        }
    }

    const variants = {
        reg: {
            x: 40,
            y: -150,
        },
        in: {
            x: -280,
            y: -150,
        }
    }


    return (
        <motion.form 
            variants={variants}
            initial={'in'}
            animate={!formToggle.formToggle ? 'in' :'reg'}
            className={styles.Form}
            onSubmit={(e) => onSubmit(e)}
        >
            <Input value={form.email} onBlur={(e) => onBlur(e)} name='email' error={emailTouched && `${emailError}`} onChange={inputEmail} placeholder="Email"/>
            <Input value={form.password} onBlur={(e) => onBlur(e)} name='password' error={passwordTouched && `${passwordError }`} onChange={inputPassword} type={passwordToggle ? 'text' : 'password'} placeholder="Пароль"><Eye onClick={() => setPasswordToggle(!passwordToggle)} className={cn({[styles.hide]: !passwordToggle})}/></Input>
            <Button type="submit">{!formToggle.formToggle ? `Зарегистрироваться` : 'Войти'}</Button>
        </motion.form>
    )
}