import styles from './Footer.module.scss'
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__copy}>
                <p>Copyright &copy; 2022 EduClan.</p>
            </div>
            <nav className={styles.wrapper__navbar}>
                <ul className={styles.wrapper__navbar__links}>
                    <li className={styles.wrapper__navbar__links__link}>
                        <Link to='/'>FAQ</Link>
                    </li>
                    <li className={styles.wrapper__navbar__links__link}>
                        <Link to='/'>Privacy Policy</Link>
                    </li>
                    <li className={styles.wrapper__navbar__links__link}>
                        <Link to='/'>Terms &amp; Conditions</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Footer;