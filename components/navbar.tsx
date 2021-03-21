import styles from "./navbar.module.scss";


export default function Home() {
    
    return (
        <div className={styles.navbar}>
            <a href="#" className={styles.logo}>
                <img src="/logo.png" alt="Logo"/>
            </a>
            <div className={styles.menu}>
                <a href="#">Home</a>
                <a href="#">Projects</a>
            </div>
        </div>
    )
}
