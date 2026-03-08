import styles from './Sidebar.module.css'

function Sidebar() {
    return (
        <>
            <div className = {styles.container}>
                <div className = {styles.chatOptions}>
                    <button className = {styles.chatButtons}>New Chat</button>
                    <button className = {styles.chatButtons}>About Us</button>
                    <button className = {styles.chatButtons}>Report an Issue</button>
                </div>
            </div>
        </>
    );
}

export default Sidebar;