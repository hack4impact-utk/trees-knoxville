import React from "react"
import styles from "./styles.module.scss";
import Link from "next/link";

const AdminNavigation: React.FC = ({children}) => {
    return (
        <main className={styles.container}>
            <nav className={styles.navigation}>
                <img src="/tklogo.png" className={styles.navLogo} />
                <hr className={styles.split}/>
                <div className={styles.navLinks}>
                    <Link href="/admin"><a href="/admin">Home</a></Link>
                    <Link href="/admin/trees"><a href="/admin/trees">Trees</a></Link>
                    <Link href="/admin/users"><a href="/admin/users">Users</a></Link>
                </div>
            </nav>
            <div className={styles.content}>
                {children}
            </div>
        </main>
    );
}
export default AdminNavigation;
