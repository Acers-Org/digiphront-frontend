import { Link } from 'react-router-dom';
import styles from './Hero.module.scss'
import soft from '../../assets/soft.png'

const Hero = () => {

    return (
        <div className={styles.wrap}>
            <p className={styles.wrap__intro}>All in one learning management system</p>
            <h1 className={styles.wrap__title}>Manage your Teaching and Learning activities all in one place</h1>
            <p className={styles.wrap__text}>DigiPhront is a product designed to meet the technological needs of schools thus providing an easy process of learning and management activities.  We promote smarter, bigger and effective school clans.</p>
            <div className={styles.wrap__cta}>
                {/* <button className={styles.wrap__cta__primaryBtn}>
                    <Link to='/'>Get started for Free</Link>
                </button> */}
                <button className={styles.wrap__cta__secondBtn}>
                    <Link to='/'>Request a Demo</Link>
                </button>
            </div>
        </div>
    )
}
export default Hero;

export const Soft = () => {

    return (
        <div className={styles.soft}>
            <img alt='Soft messaging' src={soft} className={styles.soft__image}/>
        </div>
    )
}