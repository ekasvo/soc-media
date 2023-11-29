import React from "react";
import ChatItem from "./Chat/ChatItem";
import Message from "./Chat/Message";
import styles from "./Chats.module.css";
import Button from "../Button/Button";

const Chats = ({chatsPage, onSendMessageClick, newMessageChange}) => {
    let onNewMessageChange = (e) => {
        let newMessage = e.target.value;
        newMessageChange(newMessage);
    }

    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h3>Chats</h3>
            </div>
            <div className={styles.friend}>
                {chatsPage.chatsWithUsers && chatsPage.chatsWithUsers.map(userChat => {
                    return (
                        <ChatItem key={userChat.id} name={userChat.name} id={userChat.id} avatarImage={userChat.avatarImage}/>
                    )
                })}
            </div>
            <div className={styles.chat}>
                <div className={styles.chats_body}>
                    {chatsPage.chats && chatsPage.chats.map(chat => {
                        return (
                            <Message key={chat.id} message={chat.message} id={chat.id}/>
                        )
                    })}
                </div>
                <div className={styles.send_new_message}>
                    <textarea onChange={onNewMessageChange}
                              value={chatsPage.newMessageBody}
                              placeholder="Hey! What's up"
                    ></textarea>
                    <Button onClick={onSendMessageClick} className='primary'>Send</Button>
                </div>
            </div>
        </div>
    )
}

export default Chats;
