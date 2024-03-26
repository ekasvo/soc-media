import React from "react";
import styles from "./Header.module.css";
import logo from "../../images/logo.png";
import friendsCover from "../../images/friends-cover.jpg";
import {NavLink} from "react-router-dom";

const Header = ({isAuth, username}) => {
    return (
        <header className={styles.header}>
            <img src={logo} className={styles.logo}/>
            <img src={friendsCover} className={styles.six}/>
            <div className={styles.auth}>
                {isAuth ?
                    <p>{username}</p>
                    :
                    <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;
