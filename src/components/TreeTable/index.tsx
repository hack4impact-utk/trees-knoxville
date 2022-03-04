import { GetStaticPropsContext, NextPage } from "next";
import React, { useRef } from "react";
import { Tree } from "utils/types";
import urls from "utils/urls";
import SingleTree from "../SingleTree";
import styles from "src/components/TreeTable/TreeTable.module.scss"


interface Props {
    trees: Tree[];
}

const TreeTable: NextPage<Props> = ({ trees }) => {

    // reroutes to specific tree page
    const onClick = (treeId: string) => {
        window.location.replace(urls.pages.updateTree(treeId));
    };

    return (
        <div>
            <div className={styles.headerRow}>
                <div className={styles.placeholderDiv}></div>
                <span className={styles.headerItem}>Date</span><br/>
                <span className={styles.headerItem}>Location</span><br/>
                <span className={styles.headerItem}>Type of Tree</span><br/>
            </div>
            <div className={styles.firstLine} />
            {trees && trees.map((tree: Tree) => {
            return (
                <div key={tree._id} className={styles.treeRow} onClick={() => onClick(tree._id!)}>
                    <SingleTree tree={tree} />
                    <div className={styles.line} />
                </div>
            )
        })}
        </div>
    );
}



export default TreeTable;