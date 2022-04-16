import styles from './Works.module.scss'

const Messages = ({ messages }) => {

    return (
        <div className={styles.message}>
            <p>{messages}</p>
        </div>
    )
}

export default Messages;