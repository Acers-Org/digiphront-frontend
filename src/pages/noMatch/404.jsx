import styles from './404.module.css'

const NoMatch = () => {

    return (
        <div className={styles.nomatch}>
            <h1>404 Error page</h1>
            <p>Sorry, but this page doesn't exit</p>
        </div>
    )
}

export default NoMatch;