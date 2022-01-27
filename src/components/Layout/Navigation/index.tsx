import { FC } from "react";
import styles from "./styles.module.scss";
const Navigation: FC = () => {
    return (
    <nav className={styles.navigation}>
        <img src='tklogo.png' alt="Trees Knoxville Logo" />
    </nav>
    );
};


export default Navigation;
