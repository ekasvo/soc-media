import React from "react";
import ChatItem from "./Chat/ChatItem";
import Message from "./Chat/Message";
import styles from "./Chats.module.css";

const Chats = ({chatsPageState}) => {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h3>Chats</h3>
            </div>
            <div className={styles.friend}>
                {chatsPageState.chatsWithUsers && chatsPageState.chatsWithUsers.map(userChat => {
                    return (
                        <ChatItem name={userChat.name} id={userChat.id} avatarImage={userChat.avatarImage}/>
                    )
                })}
            </div>
            <div className={styles.chat}>
                {chatsPageState.chats && chatsPageState.chats.map(chat => {
                    return (
                        <Message message={chat.message} id={chat.id}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Chats;
