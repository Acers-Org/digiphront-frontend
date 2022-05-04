import { NavLink, Link, useLocation } from 'react-router-dom';
import { Logo } from '../logo/logo';
import styles from './Navbar.module.scss'
import style from '../hero/Hero.module.scss'
import { useState } from 'react';
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const location = useLocation()
  const [isMobile, setIsMobile] = useState(false);
  const [active, setActive] = useState(location.pathname);
  const handleActive = (menu) => {
    setActive(menu);
  };

    return (
        <div className={styles.wrapper}>
            <Logo/>
            <nav className={isMobile ? styles.wrapper__navbar : styles.wrapper__close}>
                <ul className={isMobile ? styles.wrapper__navbar__links : styles.wrapper__navbar__close}>
                    <li className={styles.wrapper__navbar__links__link}>
                        <NavLink to='/features'>Features</NavLink>
                    </li>
                    <li className={styles.wrapper__navbar__links__link}>
                        <NavLink to='/about'>About us</NavLink>
                    </li>
                    <li className={styles.wrapper__navbar__links__link}>
                        <NavLink to='/pricing'>Pricing</NavLink>
                    </li>
                    <li className={styles.wrapper__navbar__links__link}>
                        <NavLink to='/faq'>FAQ</NavLink>
                    </li>
                    <li className={styles.wrapper__navbar__links__link}>
                        <NavLink to='/contact'>Contact us</NavLink>
                    </li>
                    <li>
                        <button className={style.wrap__cta__menuBtn}>
                            <Link to='/request'>Request a Demo</Link>
                        </button>
                    </li>
                </ul>
            </nav>
            <button className={`${styles.mobile_menu_icon}`} onClick={()=>setIsMobile(!isMobile)}>
                {isMobile ? (
                <FaTimes className={`${styles.mobile_icon}`}/>) : (
                <HiOutlineMenuAlt1 className={`${styles.mobile_icon}`}/>)}
            </button>
        </div>
    )
}
export default Navbar;