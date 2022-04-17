import styles from './Faq.module.scss'
import { HiOutlineMailOpen} from 'react-icons/hi'
import { FiPhoneCall} from 'react-icons/fi'
import {RiFacebookFill } from 'react-icons/ri'
import { BsGrid3X3, BsTwitter, BsInstagram, BsLinkedin} from 'react-icons/bs'

const Contact = () => {

    return (
        <div className={styles.contact}>
            <div className={styles.contact__email}>
                <div className={styles.contact__email__icons}>
                    <HiOutlineMailOpen className={styles.contact__email__icons__icon}/>
                </div>
                <h1>Email</h1>
                <p>Contact us via email:</p>
                <span>digiphront@gmail.com</span>
            </div>
            <div className={styles.contact__email}>
                <div className={styles.contact__email__icons}>
                    <FiPhoneCall className={styles.contact__email__icons__icon}/>
                </div>
                <h1>Phone</h1>
                <p>+234-905-400-7484</p>
                <span>+7-843-672-431</span>
            </div>
            <div className={styles.contact__email}>
                <div className={styles.contact__email__icons}>
                    <BsGrid3X3 className={styles.contact__email__icons__icon}/>
                </div>
                <h1>Socials</h1>
                <p>Connect with us via</p>
                <div className={styles.contact__email__socials}>
                    <RiFacebookFill className={styles.contact__email__socials__icon}/>
                    <BsTwitter className={styles.contact__email__socials__icon}/>
                    <BsInstagram className={styles.contact__email__socials__icon}/>
                    <BsLinkedin className={styles.contact__email__socials__icon}/>

                </div>
            </div>
        </div>
    )
}
export default Contact;