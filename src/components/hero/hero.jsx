import { Link } from 'react-router-dom';
import styles from './Hero.module.scss'

const Hero = () => {

    return (
        <div className={styles.wrap}>
            <p className={styles.wrap__intro}>All in one learning management system</p>
            <h1 className={styles.wrap__title}>Manage your Teaching and Learning activities all in one place</h1>
            <p className={styles.wrap__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic et, voluptates totam modi tempora nobis fugiat molestiae eos illo doloremque ducimus magni mollitia explicabo aspernatur velit vitae sed rem eius!</p>
            <div className={styles.wrap__cta}>
                <button className={styles.wrap__cta__primaryBtn}>
                    <Link to='/'>Get started for Free</Link>
                </button>
                <button className={styles.wrap__cta__secondBtn}>
                    <Link to='/'>Request a Demo</Link>
                </button>
            </div>
        </div>
    )
}
export default Hero;