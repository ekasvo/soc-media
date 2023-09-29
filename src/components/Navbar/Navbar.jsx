import React from "react";
import {NavLink} from "react-router-dom";
import Circle from "../Circle/Circle";
import styles from './Navbar.module.css';
import avatarRachel from "../../images/avatarRachel.jpg";
import avatarChandler from "../../images/avatarChandler.jpg";
import avatarRoss from "../../images/avatarRoss.jpg";
import avatarPhoebe from "../../images/avatarPhoebe.jpg";
import avatarJoye from "../../images/avatarJoye.jpg";

const friendsList = [
    {id: 1, name: 'Rachel', avatarImage: avatarRachel},
    {id: 2, name: 'Chandler', avatarImage: avatarChandler},
    {id: 3, name: 'Ross', avatarImage: avatarRoss},
    {id: 4, name: 'Phoebe', avatarImage: avatarPhoebe},
    {id: 5, name: 'Joye', avatarImage: avatarJoye}
]

const Navbar = () => {
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
                {friendsList && friendsList.map(avatar =>
                    <Circle img={avatar.avatarImage}/>
                )}
            </div>
        </nav>)
}

export default Navbar;
