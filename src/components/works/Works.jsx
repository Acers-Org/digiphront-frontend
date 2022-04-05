import styles from './Works.module.scss'
import { BsPlay } from 'react-icons/bs'
const Works = () => {

    return (
        <div className={styles.works}>
            {/* <div className={styles.works__wave}></div> */}
            <h1 className={styles.works__title}>How it Works</h1>
            <div className={styles.works__top}>
                <div className={styles.works__top__info}>
                    <h2 className={styles.works__top__info__title}>Gain more insight into how people use our product</h2>
                    <p className={styles.works__top__info__text}>With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage your business in one secure platform.</p>
                </div>
                <div className={styles.works__top__imageBg}>
                    <div className={styles.works__top__imageBg__pic}>
                        <div className={styles.works__top__imageBg__pic__play}>
                            <BsPlay className={styles.works__top__imageBg__pic__play__icon}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.works__bottom}>
                <div className={styles.works__bottom__feature}>
                    <div className={styles.works__bottom__feature__num}>1</div>
                    <h2>Measure your performance</h2>
                    <p>Stay connected with your team and make quick decisions wherever you are.</p>
                </div>
                <div className={styles.works__bottom__feature}>
                    <div className={styles.works__bottom__feature__num}>2</div>
                    <h2>Custom analytics</h2>
                    <p>Get a complete sales dashboard in the cloud. See activity, revenue and social metrics all in one place.</p>
                </div>                
                <div className={styles.works__bottom__feature}>
                    <div className={styles.works__bottom__feature__num}>3</div>
                    <h2>Measure your performance</h2>
                    <p>Stay connected with your team and make quick decisions wherever you are.</p>
                </div>                
                <div className={styles.works__bottom__feature}>
                    <div className={styles.works__bottom__feature__num}>4</div>
                    <h2>Team performance</h2>
                    <p>Our calendar lets you know what is happening with customer and projects so you</p>
                </div>                
                <div className={styles.works__bottom__feature}>
                    <div className={styles.works__bottom__feature__num}>5</div>
                    <h2>Measure your performance</h2>
                    <p>Stay connected with your team and make quick decisions wherever you are.</p>
                </div>                
                <div className={styles.works__bottom__feature}>
                    <div className={styles.works__bottom__feature__num}>6</div>
                    <h2>Measure your performance</h2>
                    <p>Stay connected with your team and make quick decisions wherever you are.</p>
                </div>                

            </div>
        </div>
    )
}

export default Works;