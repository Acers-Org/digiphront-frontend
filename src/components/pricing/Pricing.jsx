import styles from './Pricing.module.scss'
import { BsArrowRight } from 'react-icons/bs'
import { RiSkullLine } from 'react-icons/ri'
import rocket from '../../assets/rocket.png'

const Pricing = () => {

    return (
        <div className={styles.price}>
            <div className={styles.price__cards}>
                <div className={styles.price__cards__cardR}>
                    <p className={styles.price__cards__cardR__title}>Save More<br/>
                        <span>With Goodplans.</span>
                    </p>
                    <div className={styles.price__cards__cardR__con}>
                        <p className={styles.price__cards__cardR__con__text}>Choose a plan and get onboard in minutes. Then get $100 credits for your next payment.</p>
                    </div>
                    <div className={styles.price__cards__cardR__icon}>
                        <BsArrowRight className={styles.price__cards__cardR__icon}/>
                    </div>
                    <img src={rocket} alt='Rocket' className={styles.price__cards__cardR__img}/>
                </div>
                <div className={styles.price__cards__card}>
                    <div className={styles.price__cards__card__topic}>
                        <RiSkullLine className={styles.price__cards__card__topic__icon}/>
                        <h1>Free</h1>
                    </div>
                </div>
                <div className={styles.price__cards__card}>
                    <div className={styles.price__cards__card__topic}>
                        <RiSkullLine className={styles.price__cards__card__topic__icon}/>
                        <h1>Premium</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Pricing;