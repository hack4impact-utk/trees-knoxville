import React, { Dispatch, SetStateAction } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
interface Props {
    open?: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>
}
const MobileNavMenu: React.FC<Props> = ({open, setOpen}) => {
    return (
        <>
        <nav className={styles.navigation}
        style={open ? {right: "-30%"} : {right: "-100%"}}>
            <Link href="#">Tree Map</Link>
            <Link href="#">Tree Statistics</Link>
            <Link href="#">Want to adopt?</Link>
        </nav>
        <div className={styles.overlay} onClick={() => setOpen(!open)} style={open ? {opacity: 1, visibility: "visible"} : {opacity: 0, visibility: "hidden"}}></div>
    </>
    );
}

export default MobileNavMenu;