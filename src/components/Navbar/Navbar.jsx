import React from "react";
import {NavLink} from "react-router-dom";
import Circle from "../Circle/Circle";
import styles from './Navbar.module.css';

const Navbar = ({avatars}) => {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li><NavLink
                    to='/profile'
                    className={navData => navData.isActive ? styles.active : ''}>
                    Profile
                </NavLink></li>
                <li><NavLink
                    to='/chats'
                    className={navData => navData.isActive ? styles.active : ''}>
                    Chats
                </NavLink></li>
                <li><NavLink
                    to='/news'
                    className={navData => navData.isActive ? styles.active : ''}>
                    News
                </NavLink></li>
                <li><NavLink
                    to='/music'
                    className={navData => navData.isActive ? styles.active : ''}>
                    Music
                </NavLink></li>
                <br/>
                <li><NavLink
                    to='/settings'
                    className={navData => navData.isActive ? styles.active : ''}>
                    Settings
                </NavLink></li>
            </ul>

            <h3>Friends</h3>
            <div className={styles.best_friends}>
                {avatars && avatars.map(avatar =>
                    <Circle img={avatar.avatarImage}/>
                )}
            </div>
        </nav>)
}

export default Navbar;
