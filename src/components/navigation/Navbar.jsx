import { Link } from 'react-router-dom';
import { Logo } from '../logo/logo';
import styles from './Navbar.module.scss'

const Navbar = () => {

    return (
        <div className={styles.wrapper}>
            <Logo/>
            <nav className={styles.wrapper__navbar}>
                <ul className={styles.wrapper__navbar__links}>
                    <li className={styles.wrapper__navbar__links__link}>
                        <Link to='/'>Features</Link>
                    </li>
                    <li className={styles.wrapper__navbar__links__link}>
                        <Link to='/'>About us</Link>
                    </li>
                    <li className={styles.wrapper__navbar__links__link}>
                        <Link to='/'>Pricing</Link>
                    </li>
                    <li className={styles.wrapper__navbar__links__link}>
                        <Link to='/'>FAQ</Link>
                    </li>
                    <li className={styles.wrapper__navbar__links__link}>
                        <Link to='/'>Contact us</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar;