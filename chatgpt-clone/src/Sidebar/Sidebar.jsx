import styles from './Sidebar.module.css'
import logo from '../assets/shamo-logo-for-chatbot.png'
function Sidebar() {
    return (
        <>
            <div className = {styles.container}>
                <div className = {styles.chatOptions}>
                    <button className = {styles.chatButtons}>New Chat</button>
                    <button className = {styles.chatButtons}>About Us</button>
                    <button className = {styles.chatButtons}>Report an Issue</button>
                </div>

                <div className = {styles.profileContainer}>
                    <div className = {styles.profile}>
                        <img src = {logo} className = {styles.logo}></img>
                        <p>Shamit Gupta</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;