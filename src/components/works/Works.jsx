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
                    <p className={styles.works__top__info__text}>With EduClan you can manage your school activities from anywhere in the world and effectively teach students regardless of their location.</p>
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
                    <h2>Improve Staff Productivity</h2>
                    <p>With EduClan your staff can focus on teaching and manage students effectively</p>
                </div>
                <div className={styles.works__bottom__feature}>
                    <div className={styles.works__bottom__feature__num}>2</div>
                    <h2>Dashboard Analytics</h2>
                    <p>View the details of your school at a glance.</p>
                </div>                
                <div className={styles.works__bottom__feature}>
                    <div className={styles.works__bottom__feature__num}>3</div>
                    <h2>Resource Management</h2>
                    <p>Store, Edit and share school documents and resources seamlessly</p>
                </div>                
                <div className={styles.works__bottom__feature}>
                    <div className={styles.works__bottom__feature__num}>4</div>
                    <h2>User-friendly Interface</h2>
                    <p>Easy to navigate</p>
                </div>                
                <div className={styles.works__bottom__feature}>
                    <div className={styles.works__bottom__feature__num}>5</div>
                    <h2>Affrodable Pricing</h2>
                    <p>We offer different pricing packages suited to your needs and pocket.</p>
                </div>                
                <div className={styles.works__bottom__feature}>
                    <div className={styles.works__bottom__feature__num}>6</div>
                    <h2>Product Support</h2>
                    <p>We offer product support to customers even after installation.</p>
                </div>                

            </div>
        </div>
    )
}

export default Works;