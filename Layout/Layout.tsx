import {Sidebar} from './Sidebar/Sidebar'
import { Header } from './Header/Header'
import {LayoutProps} from './Layout.props'
import { FunctionComponent } from 'react'
import styles from './Layout.module.css'
import { Provider } from 'react-redux'
import { store } from '../redux/store/store'

export const Layout = ({children}: LayoutProps): JSX.Element => {

    return (
        <div className={styles.Layout}>
            <Header/>
            <Sidebar/>
            <div>
                {children}
            </div>
        </div>
    )
}

export const withLayout = <T extends Record<string, unknown>> (Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return(
            <Provider store={store}>
                <Layout>
                    <Component {...props} />
                </Layout>
            </Provider>
            
        )
    }
}