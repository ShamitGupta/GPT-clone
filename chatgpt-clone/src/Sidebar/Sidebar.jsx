import styles from './Sidebar.module.css'
import logo from '../assets/shamo-logo-for-chatbot.png'

function Sidebar() {
    return (
        <aside className={styles.container}>
            <div className={styles.upperSection}>
                <div className={styles.chatOptions}>
                    <button className={styles.chatButtons}>New Chat</button>
                    <button className={styles.chatButtons}>About Us</button>
                    <button className={styles.chatButtons}>Report an Issue</button>
                </div>
            </div>

            <div className={styles.profileContainer}>
                <div className={styles.profile}>
                    <img src={logo} alt="User Logo" className={styles.logo} />
                    <p className={styles.userName}>Shamit Gupta</p>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;