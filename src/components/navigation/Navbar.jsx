import { NavLink, Link } from "react-router-dom";
import { Logo } from "../logo/logo";
import styles from "./Navbar.module.scss";
import style from "../hero/Hero.module.scss";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <Logo />
      <nav className={styles.wrapper__navbar}>
        <ul className={styles.wrapper__navbar__links}>
          <li className={styles.wrapper__navbar__links__link}>
            <NavLink to="/">Features</NavLink>
          </li>
          <li className={styles.wrapper__navbar__links__link}>
            <NavLink to="/about">About us</NavLink>
          </li>
          <li className={styles.wrapper__navbar__links__link}>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li className={styles.wrapper__navbar__links__link}>
            <NavLink to="/faq">FAQ</NavLink>
          </li>
          <li className={styles.wrapper__navbar__links__link}>
            <NavLink to="/contact">Contact us</NavLink>
          </li>
          <li className={styles.wrapper__navbar__links__link}>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <button className={style.wrap__cta__menuBtn}>
              <Link to="/request">Request a Demo</Link>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
