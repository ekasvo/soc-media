import avatarRachel from "../images/avatarRachel.jpg";
import avatarChandler from "../images/avatarChandler.jpg";
import avatarRoss from "../images/avatarRoss.jpg";
import avatarPhoebe from "../images/avatarPhoebe.jpg";
import avatarJoye from "../images/avatarJoye.jpg";

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
    chatsWithUsers: [
        {id: 1, name: 'Rachel', avatarImage: avatarRachel},
        {id: 2, name: 'Chandler', avatarImage: avatarChandler},
        {id: 3, name: 'Ross', avatarImage: avatarRoss},
        {id: 4, name: 'Phoebe', avatarImage: avatarPhoebe},
        {id: 5, name: 'Joye', avatarImage: avatarJoye},
    ],
    chats: [
        {id: 1, message: 'Hey! How are you doing?'},
        {id: 2, message: 'Hey! I am good, what about you?'},
        {id: 3, message: 'Same'}
    ],
    newMessageBody: '',
}

const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:{
            let stateCopy = {...state};
            let messageBody = state.newMessageBody;
            stateCopy.chats.push({id: 6, message: messageBody});
            stateCopy.newMessageBody = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_BODY:{
            let stateCopy = {...state};
            stateCopy.newMessageBody = action.newMessage;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, newMessage: body});
export default chatsReducer;
