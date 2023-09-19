import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./../Chats.module.css";
import Circle from "../../Circle/Circle";

const ChatItem = ({id, avatarImage, name}) => {
    return (
        <NavLink className={navData => navData.isActive ? styles.active : ''} to={`/chats/${id}`}>
            <Circle img={avatarImage}/>
            {name}
        </NavLink>
    )
}

export default ChatItem;
