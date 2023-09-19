import React from "react";
import styles from "./Header.module.css";
import logo from "../../images/logo.png";
import friendsCover from "../../images/friends-cover.jpg";

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logo} className={styles.logo}/>
            <img src={friendsCover} className={styles.six}/>
        </header>
    )
}

export default Header;
