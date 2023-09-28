import React from "react";
import ChatItem from "./Chat/ChatItem";
import Message from "./Chat/Message";
import styles from "./Chats.module.css";
import Button from "../Button/Button";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/chatsReducer";

const Chats = ({chatsPageState, dispatch}) => {
    let onSendMessageClick = () => {
        dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e) => {
        let newMessage = e.target.value;
        dispatch(updateNewMessageBodyCreator(newMessage));
    }

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
                <div className={styles.chats_bodyody}>
                    {chatsPageState.chats && chatsPageState.chats.map(chat => {
                        return (
                            <Message message={chat.message} id={chat.id}/>
                        )
                    })}
                </div>
                <div className={styles.send_new_message}>
                    <textarea onChange={onNewMessageChange}
                              value={chatsPageState.newMessageBody}
                              placeholder="Hey! What's up"
                    ></textarea>
                    <Button onClick={onSendMessageClick} className='primary'>Sent</Button>
                </div>
            </div>
        </div>
    )
}

export default Chats;
