import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/chatsReducer";
import Chats from "./Chats";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
    return {
        chatsPage: state.chatsPage,
    }
}

let authRedirectComponent = withAuthRedirect(Chats)

const ChatsContainer = connect(mapStateToProps, {
    onSendMessageClick: sendMessageCreator,
    newMessageChange: updateNewMessageBodyCreator
})(authRedirectComponent)
export default ChatsContainer;


// const mapDispatchToProps = (dispatch) => {
//     return {
//         onSendMessageClick: () => {
//             dispatch(sendMessageCreator());
//         },
//         newMessageChange: (newMessage) => {
//             dispatch(updateNewMessageBodyCreator(newMessage));
//         },
//     }
// }
