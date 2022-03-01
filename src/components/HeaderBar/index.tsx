import React from 'react'
import styles from "./HeaderBar.module.scss"
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNavMenu from 'src/components/MobileNavMenu';
import Link from 'next/link';


const HeaderBar: React.FC = () => { 
  const [open, setOpen] = React.useState(false);
  return(
    <div className={styles.container}>
      <div className = {styles.content}>
        <img src="/tklogo.png" className={styles.logo} />
        <div className={styles.desktopLinks}>
          <Link href="#">Tree Map</Link>
          <Link href="#">Tree Statistics</Link>
          <Link href="#">Want to Adopt?</Link>
        </div> 
        <div className = {styles.searchContainer}> 
          <input type="text" alt="search box" placeholder="Search here" className={styles.SearchBox}/>
          <div className={styles.profile} /> 
        </div>
        <GiHamburgerMenu className={styles.menuBtn} onClick={() => setOpen(!open)} />
      </div>
      <MobileNavMenu open={open} />
    </div>
  )
}

export default HeaderBar;