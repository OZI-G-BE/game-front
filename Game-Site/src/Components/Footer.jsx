import styles from './Footer.module.css';

function Footer(){
    return(
        <footer>
            <div className={styles.footerContainer}>
                <div className={styles.details}>
                    <h3 className={styles.footHead}>Contact Info</h3>
                    <ul className={styles.footList}>
                        <li>Email: Game-Info@gmail.com</li>
                        <li>Phone: 08126210413</li>
                        <li>Address: 1234 Game Street, Lagos, Nigeria</li>
                    </ul>
                </div>
                <div className={styles.details}>
                    <h3 className={styles.footHead}>Navigation</h3>
                    <ul className={styles.footList}>
                        <li><a href="">Home</a></li>
                        <li>About Us</li>
                    </ul>
                </div>
                <div className={styles.details}>
                    <h1 className={styles.footnote}>FIGHT <br /> ON!</h1>
                </div>
            </div>
        </footer>
    );
}

export default Footer