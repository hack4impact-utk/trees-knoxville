import { GetStaticPropsContext, NextPage } from "next";
import React, { useRef } from "react";
import { Tree } from "utils/types";
import urls from "utils/urls";
import SingleTree from "../SingleTree";
import styles from "src/components/TreeTable.module.scss"


interface Props {
    trees: Tree[];
}

const TreeTable: NextPage<Props> = ({ trees }) => {

    // reroutes to specific tree page
    const onClick = (treeId: string) => {
        window.location.replace(urls.pages.updateTree(treeId));
    };

    return (
        <div className={styles.container}>
            <div className={styles.headerRow}>
                <span className={styles.headerItem}>Date</span><br/>
                <span className={styles.headerItem}>Location</span><br/>
                <span className={styles.headerItem}>Type of Tree</span><br/>
            </div>
            {trees && trees.map((tree: Tree) => {
            return (
                <div key={tree._id} style={{cursor: "pointer"}} onClick={() => onClick(tree._id!)}>
                    <SingleTree tree={tree} />
                    <div className={styles.line} />
                </div>
                
            )
        })}
        </div>
    );
}



export default TreeTable;