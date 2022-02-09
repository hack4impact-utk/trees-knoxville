import { GetStaticPropsContext, NextPage } from "next";
import React, { useRef } from "react";
import { Tree } from "utils/types";
import urls from "utils/urls";
import SingleTree from "../SingleTree";
import styles from "src/components/TreeTable.module.css"

interface Props {
    trees: Tree[];
}

const TreeTable: NextPage<Props> = ({ trees }) => {
    return (
        <div>
            {trees && trees.map((tree: Tree) => {
            return (
                <div key={tree._id} >
                    <SingleTree tree={tree}  />
                    {/*<button type="button" onClick={() => onClick(tree._id!)}>Edit</button>*/}
                    <hr className={styles.line}/>
                </div>
            )
        })}
        </div>
    );
}



export default TreeTable;