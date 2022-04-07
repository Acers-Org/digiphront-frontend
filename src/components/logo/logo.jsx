import styles from './Logo.module.scss'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

export const Logo = () => {

    return (
        <div className={styles.wrap}>
            <Link to='/'>  
                <img src={logo} alt='EduClan Logo' className={styles.wrap__logo}/>
            </Link>
        </div>
    )
}