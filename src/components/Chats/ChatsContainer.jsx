import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/chatsReducer";
import Chats from "./Chats";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        chatsPage: state.chatsPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: () => {
            dispatch(sendMessageCreator());
        },
        newMessageChange: (newMessage) => {
            dispatch(updateNewMessageBodyCreator(newMessage));
        },
    }
}

const ChatsContainer = connect(mapStateToProps, mapDispatchToProps)(Chats)
export default ChatsContainer;
