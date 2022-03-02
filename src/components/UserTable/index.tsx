import React from "react";
import { NextPage } from "next";
import styles from "src/components/UserTable/UserTable.module.scss"


interface Props {
    users: [];
}

const UserTable: NextPage<Props> = ({ users }) => {
    return (
        <div>
            <div className={styles.headerRow}>
                <div className={styles.placeholderDiv}></div>
                <span className={styles.headerItem}>Date</span><br/>
                <span className={styles.headerItem}>Location</span><br/>
                <span className={styles.headerItem}>Type of Tree</span><br/>
            </div>
            <div className={styles.line} />
            <span></span>
        
        </div>
    );
    
}

export default UserTable;