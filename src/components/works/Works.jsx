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

            </div>
        </div>
    )
}

export default Works;