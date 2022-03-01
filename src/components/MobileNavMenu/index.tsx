import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
interface Props {
    open?: boolean;
}
const MobileNavMenu: React.FC<Props> = ({open}) => {
    return (
        <nav className={styles.navigation}
        style={open ? {right: 0} : {right: "-100%"}}>
            <Link href="#">Tree Map</Link>
            <Link href="#">Tree Statistics</Link>
            <Link href="#">Want to adopt?</Link>
        </nav>
    );
}

export default MobileNavMenu;