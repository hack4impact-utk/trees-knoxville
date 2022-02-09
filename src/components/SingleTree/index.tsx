import { NextPage } from "next";
import React, { useRef, useEffect } from "react";
import { Tree } from "utils/types";
import styles from "src/components/SingleTree.module.scss"

interface Props {
    tree: Tree,
}

const SingleTree: NextPage<Props> = ({ tree }) => {

    

    return (
        
        <div className={styles.row}>
            <span className={styles.info}>{tree.datePlanted?.toString().split("T")[0]}</span><br/>
            <span className={styles.info}>TREE_NAME</span>
            <span className={styles.info}>FORESTER</span>
            <span className={styles.info}>{tree.coordinates?.latitude}, {tree.coordinates?.longitude}</span><br/>
            <span className={styles.info}>NUMBER?</span>
            <span className={styles.info}>{tree.species}</span><br/>
        </div>
  
    );
}

export default SingleTree