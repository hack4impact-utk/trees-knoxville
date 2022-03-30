import React, { Dispatch, SetStateAction } from "react";
import { Tree } from "utils/types";
import styles from "./styles.module.scss";
interface Props {
    tree: Tree | undefined;
    displayingTree: boolean;
    setDisplayingTree: Dispatch<SetStateAction<boolean>>;
}
const TreeInfoComponent: React.FC<Props> = ({tree, displayingTree, setDisplayingTree}) => {
    const date = tree && new Date(tree.datePlanted as Date).toLocaleString("en-US", {
        timeZone: "UTC",
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    return (
        <div className={`${styles.treeInfo} ${displayingTree ? styles.open : styles.closed}`}>
            <button className={styles.closeButton} onClick={() => setDisplayingTree(false)}>Close Window</button>
            <img src={tree && tree.image ? tree.image.url : "/defaultTreeImage.png"} alt={tree && tree.species} className={styles.treeImage} />
            <div className={styles.treeText}>
                <h3>Coordinates</h3>
                <p>{tree && tree.coordinates?.latitude}, {tree && tree.coordinates?.longitude}</p>
                <h3>Date Planted</h3>
                <p>{tree && date}</p>
                <h3>Species</h3>
                <p>{tree && tree.species}</p>  
                <h3>Age</h3>
                <p>{tree && tree.age}</p>
            </div>
        </div>
    );
}
export default TreeInfoComponent;
