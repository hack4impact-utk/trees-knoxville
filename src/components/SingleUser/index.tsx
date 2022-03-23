import { NextPage } from "next";
import React, { useRef, useEffect } from "react";
import { User } from "utils/types";
import styles from "src/components/SingleUser/SingleUser.module.scss"

interface Props {
    user: User,
}

const SingleUser: NextPage<Props> = ({ user }) => {

    return (
    <div>
        <div className={styles.row}>
            <span className={`${styles.info} ${styles.mobileInfo1}`}>{user.name || "NO NAME"}</span>
            <span className={`${styles.info} ${styles.mobileInfo3}`}>{user.email || "NO EMAIL"}</span>
            <span className={`${styles.info} ${styles.mobileInfo2}`}>{user.user_metadata!.phone || "NO PHONE"}</span>            
        </div>
    </div>
    );
}

export default SingleUser;