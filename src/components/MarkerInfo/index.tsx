import React from "react";
import styles from "./markerInfo.module.scss"
import { FunctionComponent } from "react";
import { Tree } from "utils/types";
import Map from "src/components/Map"

interface props {
    onClick(): void;
    tree: Tree;
    showInfo: boolean;
    lat: number;
    lng: number;
  }

const MarkerInfo: FunctionComponent<props> = ({tree}) => {
    return (
        <div>
            <div className={styles.body}>
                <button className={styles.btn}>Adopt</button>
                <div className={styles.text}>Common Name:</div>
                <div className={styles.names}>Oak</div>
                <div className={styles.text}>Scienfific Name:</div>
                <div className={styles.names}>Acer saccharum</div>
            </div>
        </div>
    )
}

export default MarkerInfo;
