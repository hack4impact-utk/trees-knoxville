import React from "react";
import { NextPage } from "next";
import styles from "src/components/UserTable/UserTable.module.scss"
import { User } from "utils/types";
import SingleUser from "src/components/SingleUser";
import urls from "utils/urls";


interface Props {
    users: User[];
}

const UserTable: NextPage<Props> = ({ users }) => {
  
    // reroutes to specific user page
    const onClick = (userId: string) => {
        window.location.replace(urls.pages.user(userId));
    };

    return (
        <div>
            <div className={styles.headerRow}>
                <span className={styles.headerItem}>Name</span><br/>
                <span className={styles.headerItem}>Email</span><br/>
                <span className={styles.headerItem}>Phone Number</span><br/>
            </div>
            <div className={styles.firstLine} />
            {users && users.map((user: User) => {
            return (
                <div key={user.user_id} className={styles.userRow} onClick={() => onClick(user.user_id!)}>
                    <SingleUser user={user} />
                    <div className={styles.line} />
                </div>
            )
        })}
        </div>
    );
    
}

export default UserTable;