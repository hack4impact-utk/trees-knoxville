import React from "react";
import { NextPage } from "next";
import styles from "src/components/UserTable/UserTable.module.scss"
import { User } from "utils/types";
import SingleUser from "src/components/SingleUser";
import urls from "utils/urls";


interface Props {
    users: [];
}

const UserTable: NextPage<Props> = ({ users }) => {
    const newUser: User = {
        id: "123",
        name: "testName",
    };

    const newUser2: User = {
        id: "456",
        name: "testName2",
        phone: "123-456-7989"
    }

    const userArray: User[] = [newUser, newUser2];

    // reroutes to specific tree page
    const onClick = (userId: string) => {
        
    };

    return (
        <div>
            <div className={styles.headerRow}>
                <span className={styles.headerItem}>Name</span><br/>
                <span className={styles.headerItem}>Email</span><br/>
                <span className={styles.headerItem}>Phone Number</span><br/>
            </div>
            <div className={styles.line} />
            {userArray && userArray.map((user: User) => {
            return (
                <div key={user.id} className={styles.userRow} onClick={() => onClick(user.id!)}>
                    <SingleUser user={user} />
                    <div className={styles.line} />
                </div>
            )
        })}
            
        
        </div>
    );
    
}

export default UserTable;