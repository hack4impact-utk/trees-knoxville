import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";
import {BsTree} from "react-icons/bs";

const AdminLayout: React.FC = ({children}) => {
    return(
        <main className={styles.container}>
            <nav className={styles.navigation}>
                <img src="/tklogo.png" alt="Trees Knoxville Logo" className={styles.tkLogo} />
                <Link href="/admin">
                    <a href="/admin">
                        <span>
                            <span>Dashboard</span>
                        </span>
                    </a>
                </Link>
                <Link href="#">
                    <a href="#">
                        <span>
                            <span>My Trees</span>
                        </span>
                    </a>
                </Link>
                <Link href="#">
                    <a href="#">
                        <span>
                            <BsTree />
                            <span>Adopted Trees</span>
                        </span>
                    </a>
                </Link>
                <Link href="/admin/trees">
                    <a href="/admin/trees">
                        <span>
                            <span>Planted Trees</span>
                        </span>
                    </a>
                </Link>
                <Link href="/admin/users">
                    <a href="/admin/users">
                        <span>
                            <span>Manage Users</span>
                        </span>
                    </a>
                </Link>
            </nav>
            <div className={styles.content}>
                {children}
            </div>
        </main>
    );
}
export default AdminLayout;