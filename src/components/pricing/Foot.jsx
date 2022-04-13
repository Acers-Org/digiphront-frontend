import styles from './Faq.module.scss'
import foot from '../../assets/foot.png'
const Foot = () => {

    return (
        <div className={styles.foot}>
            <img src={foot} alt='Foot'/>
        </div>
    )
}
export default Foot;