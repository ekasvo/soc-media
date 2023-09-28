import avatarMonica from "../images/avatarMonica.jpg";
import avatarRachel from "../images/avatarRachel.jpg";
import avatarChandler from "../images/avatarChandler.jpg";
import avatarRoss from "../images/avatarRoss.jpg";
import avatarPhoebe from "../images/avatarPhoebe.jpg";
import avatarJoye from "../images/avatarJoye.jpg";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sideBarReducer";
import chatsReducer from "./chatsReducer";

export let store = {
    _state: {
        profilePage: {
            posts: [{
                id: 1,
                avatar: avatarMonica,
                message: "'Phoebe and Gary think they're the hotter couple. So, to prove them wrong, we have to go and have a ton of sex.'",
                likeCount: 3,
            }, {
                id: 2,
                avatar: avatarMonica,
                message: "'If you're too afraid to be in a relationship, then don't be in one.'",
                likeCount: 33,
            },],
            newPostText: 'Friends!!',
        },
        chatsPage: {
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
        },
        sideBar: {
            friendsList: [{id: 1, name: 'Rachel', avatarImage: avatarRachel}, {
                id: 2,
                name: 'Chandler',
                avatarImage: avatarChandler
            }, {id: 3, name: 'Ross', avatarImage: avatarRoss}, {id: 4, name: 'Phoebe', avatarImage: avatarPhoebe}, {
                id: 5,
                name: 'Joye',
                avatarImage: avatarJoye
            },]
        },
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.chatsPage = chatsReducer(this._state.chatsPage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);

        this._callSubscriber();
    },
};

window.store = store;
