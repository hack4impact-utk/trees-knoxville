import React from 'react'
import styles from "./HeaderBar.module.scss"
import Image from 'next/image'
import AuthComponent from "src/components/Auth"; 
import logo from "public/tklogo.png"
import menu from "public/menu-icon.svg"

class HeaderBar extends React.Component {
  render() {
    return(
      <div className = {styles.Content}>
        {/* <AuthComponent/> */}
        <Image src={logo} alt="logo" width={80} height={35} />
        
        <div className = {styles.SearchContainer}>
          
          <input type="text" alt="search box" placeholder="Search here" className={styles.SearchBox}/>
          <div className={styles.Profile} />
          
        </div>
        <Image src={menu} alt="menu icon" height={27} width={27} />
      </div>
    )
  }
}

export default HeaderBar;