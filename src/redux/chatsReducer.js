const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const chatsReducer = (state, action) => {
    if (action.type === SEND_MESSAGE) {
        let messageBody = state.newMessageBody
        state.chats.push({id: 6, message: messageBody});
        state.newMessageBody = '';
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.newMessage;
    }
    return state;
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, newMessage: body});
export default chatsReducer;