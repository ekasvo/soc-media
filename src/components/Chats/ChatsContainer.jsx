import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/chatsReducer";
import Chats from "./Chats";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        chatsPage: state.chatsPage,
    }
}

export default compose(connect(mapStateToProps, {
    onSendMessageClick: sendMessageCreator,
    newMessageChange: updateNewMessageBodyCreator
}), withAuthRedirect)(Chats);


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
