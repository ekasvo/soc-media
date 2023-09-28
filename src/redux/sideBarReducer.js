import avatarRachel from "../images/avatarRachel.jpg";
import avatarChandler from "../images/avatarChandler.jpg";
import avatarRoss from "../images/avatarRoss.jpg";
import avatarPhoebe from "../images/avatarPhoebe.jpg";
import avatarJoye from "../images/avatarJoye.jpg";

let initialState = {
    friendsList: [
        {id: 1, name: 'Rachel', avatarImage: avatarRachel},
        {id: 2, name: 'Chandler', avatarImage: avatarChandler},
        {id: 3, name: 'Ross', avatarImage: avatarRoss},
        {id: 4, name: 'Phoebe', avatarImage: avatarPhoebe},
        {id: 5, name: 'Joye', avatarImage: avatarJoye}
    ]
}

const sideBarReducer = (state = initialState, action) => {
    return state;
}

export default sideBarReducer;