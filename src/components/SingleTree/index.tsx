import { NextPage } from "next";
import React, { useRef, useEffect } from "react";
import { Tree } from "utils/types";
import styles from "src/components/SingleTree.module.scss"

interface Props {
    tree: Tree,
}

const SingleTree: NextPage<Props> = ({ tree }) => {

    function GetFormattedDate(date: Date) {

        // in case the tree does not have a date
        if (!date) return "";

        // YYYY-MM-DD format
        const dateString = date.toString().split("T")[0];

        const [year, month, day] = dateString.split('-');

        // MM/DD/YYYY format
        const formattedDate = [month, day, year].join('/');

        return formattedDate;
    }

    return (
    <div className={styles.container}>
        <div className={styles.placeholderImage}></div>
        <div className={styles.row}>   
            <div className={`${styles.info} ${styles.mobileInfo2}`}>
                <span className={`${styles.hiddenText}`}>{`${tree.datePlanted ? "Planted on" : ""}`}&nbsp;</span>
                <span>{GetFormattedDate(tree.datePlanted!)}</span>
            </div>
            <span className={`${styles.info} ${styles.mobileInfo3}`}>{tree.coordinates?.latitude}, {tree.coordinates?.longitude}</span>
            <span className={`${styles.info} ${styles.mobileInfo1}`}>{tree.species}</span>
        </div>
    </div>
    );
}

export default SingleTree