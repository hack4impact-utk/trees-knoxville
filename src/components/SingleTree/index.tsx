import { NextPage } from "next";
import React, { useRef, useEffect } from "react";
import { Tree } from "utils/types";
import styles from "src/components/SingleTree.module.scss"

interface Props {
    tree: Tree,
}

const SingleTree: NextPage<Props> = ({ tree }) => {

    

    return (
    <div className={styles.container}>
        <div className={styles.placeholderImage}></div>
        <div className={styles.row}>   
            <span className={`${styles.info} ${styles.mobileInfo1}`}>{tree.datePlanted?.toString().split("T")[0]}</span>
            <span className={`${styles.info} ${styles.mobileInfo2}`}>TREE_NAME</span>
            <span className={`${styles.info} ${styles.mobileInfo3}`}><span className={styles.hiddenText}>Volunteer Forester:&#160;</span>FORESTER</span>
            <span className={`${styles.info} ${styles.mobileInfo4}`}>{tree.coordinates?.latitude}, {tree.coordinates?.longitude}</span><br/>
            <span className={`${styles.info} ${styles.mobileInfo5}`}>NUMBER?</span>
            <span className={`${styles.info} ${styles.mobileInfo6}`}>{tree.species}</span>
        </div>
    </div>
    );
}

export default SingleTree