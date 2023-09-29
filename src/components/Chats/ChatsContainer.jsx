import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/chatsReducer";
import Chats from "./Chats";

const ChatsContainer = ({store}) => {
    let state = store.getState();

    let onSendMessageClick = () => {
        store.dispatch(sendMessageCreator());
    }
    let newMessageChange = (newMessage) => {
        store.dispatch(updateNewMessageBodyCreator(newMessage));
    }

    return (
        <Chats chatsWithUsers={state.chatsPage.chatsWithUsers}
               chats={state.chatsPage.chats}
               newMessageBody={state.chatsPage.newMessageBody}
               onSendMessageClick={onSendMessageClick}
               newMessageChange={newMessageChange}
        />
    )
}

export default ChatsContainer;
