import styles from './Pricing.module.scss'
import { BsArrowRight } from 'react-icons/bs'
import { RiSkullLine } from 'react-icons/ri'
import { HiCheckCircle } from 'react-icons/hi'
import rocket from '../../assets/rocket.png'
import { useState } from 'react'

const Pricing = () => {
    const [plan, setPlan] = useState('Basic')

    return (
        <div className={styles.price}>
            <h1>Pricing</h1>
            <div className={styles.price__cards}>
                <div className={plan === 'Plan' ? styles.price__cards__active1 : styles.price__cards__cardR} onMouseOver={()=>{setPlan('Plan')}}>
                    <p className={styles.price__cards__cardR__title}>Save More<br/>
                        <span>With Annual plans.</span>
                    </p>
                    <div className={styles.price__cards__cardR__con}>
                        <p className={styles.price__cards__cardR__con__text}>Annual subsrciption provides two months for free</p>
                    </div>
                    <div className={styles.price__cards__cardR__cta}>
                        <p>Choose a plan</p>
                        <div className={styles.price__cards__cardR__icon}>
                            <BsArrowRight className={styles.price__cards__cardR__icon}/>
                        </div>
                    </div>
                    <img src={rocket} alt='Rocket' className={styles.price__cards__cardR__img}/>
                </div>
                <div className={plan === 'Basic' ? styles.price__cards__active : styles.price__cards__card} onMouseOver={()=>{setPlan('Basic')}}>
                    <div className={styles.price__cards__card__topic}>
                        <RiSkullLine className={styles.price__cards__card__topic__icon}/>
                        <h1>Basic</h1>
                    </div>
                    <div className={styles.price__cards__card__items}>
                        <p className={styles.price__cards__card__title}>What You’ll Get</p>
                        <div className={styles.price__cards__card__items__div}>
                            <div className={styles.price__cards__card__items__div__item}>
                                <HiCheckCircle className={styles.price__cards__card__items__div__item__icon}/>
                                <span>50 Maximum Students</span>
                            </div>
                            <div className={styles.price__cards__card__items__div__item}>
                                <HiCheckCircle className={styles.price__cards__card__items__div__item__icon}/>
                                <span>25 GB Storage</span>
                            </div>
                            <div className={styles.price__cards__card__items__div__item}>
                                <HiCheckCircle className={styles.price__cards__card__items__div__item__icon}/>
                                <span>1 Administrator Account</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.price__cards__card__divider}></div>
                    <h2>&#8358;10,000<span>/month</span></h2>
                    <h2>&#8358;100,000<span>/year</span></h2>
                    <button type='button'>Get Started</button>
                </div>
                <div className={plan === 'Premium' ? styles.price__cards__active : styles.price__cards__card} onMouseOver={()=>{setPlan('Premium')}}>
                    <div className={styles.price__cards__card__topic}>
                        <RiSkullLine className={styles.price__cards__card__topic__icon}/>
                        <h1>Premium</h1>
                    </div>
                    <div className={styles.price__cards__card__items}>
                        <p className={styles.price__cards__card__title}>What You’ll Get</p>
                        <div className={styles.price__cards__card__items__div}>
                            <div className={styles.price__cards__card__items__div__item}>
                                <HiCheckCircle className={styles.price__cards__card__items__div__item__icon}/>
                                <span>250 Maxium Students</span>
                            </div>
                            <div className={styles.price__cards__card__items__div__item}>
                                <HiCheckCircle className={styles.price__cards__card__items__div__item__icon}/>
                                <span>Unlimited Storage</span>
                            </div>
                            <div className={styles.price__cards__card__items__div__item}>
                                <HiCheckCircle className={styles.price__cards__card__items__div__item__icon}/>
                                <span>3 Administrator Accounts</span>
                            </div>
                            <div className={styles.price__cards__card__items__div__item}>
                                <HiCheckCircle className={styles.price__cards__card__items__div__item__icon}/>
                                <span>Fully Customized Homepage</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.price__cards__card__divider}></div>
                    <h2>&#8358;40,000<span>/month</span></h2>
                    <h2>&#8358;400,000<span>/year</span></h2>
                    <button type='button'>Get Started</button>
                </div>
            </div>
        </div>
    )
}
export default Pricing;