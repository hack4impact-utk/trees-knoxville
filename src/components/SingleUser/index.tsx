import { NextPage } from "next";
import React, { useRef, useEffect } from "react";
import { User } from "utils/types";
import styles from "src/components/SingleTree/SingleTree.module.scss"

interface Props {
    user: User,
}

const SingleUser: NextPage<Props> = ({ user }) => {

    return (
    <div className={styles.row}>
        <span className={styles.info}>{user.name || "NO NAME"}</span>
        <span className={styles.info}>{user.email || "NO EMAIL"}</span>
        <span className={styles.info}>{user.phone || "NO PHONE"}</span>            
    </div>
    );
}

export default SingleUser;