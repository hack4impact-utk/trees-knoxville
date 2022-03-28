import React, { Dispatch, SetStateAction } from "react";
import { Tree } from "utils/types";
import styles from "./styles.module.scss";
interface Props {
    tree: Tree | undefined;
    displayingTree: boolean;
    setDisplayingTree: Dispatch<SetStateAction<boolean>>;
}
const TreeInfoComponent: React.FC<Props> = ({tree, displayingTree, setDisplayingTree}) => {
    console.log(tree);
    const date = tree && new Date(tree.datePlanted as Date).toLocaleString("en-US", {
        timeZone: "UTC",
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    return (
        <div className={`${styles.treeInfo} ${displayingTree ? styles.open : styles.closed}`}>
            <button onClick={() => setDisplayingTree(false)}>Close Window</button>
            <p>Tree id: {tree && tree._id}</p>
            <p>Tree age: {tree && tree.age}</p>
            <p>Tree adopted status: {tree && tree.adopted ? "true": "false"}</p>
            <p>Date planted: {tree && date}</p>
            <p>Species: {tree && tree.species}</p>
        </div>
    );
}
export default TreeInfoComponent;