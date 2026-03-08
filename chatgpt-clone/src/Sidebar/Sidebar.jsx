import styles from './Sidebar.module.css'
function Sidebar(){
    return(
        <div className = {styles.sidebarContainer}>
            <div className = {styles.sidebar}>
                <button className = {styles.newChat}>New Chat!</button>

                <div className = {styles.bottomSidebar}>
                    <div className={styles.bottomSidebarContent}></div>
                    
                </div> 
            </div>         
        </div>
    );
}

export default Sidebar