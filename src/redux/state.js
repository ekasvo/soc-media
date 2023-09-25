import avatarMonica from "../images/avatarMonica.jpg";
import avatarRachel from "../images/avatarRachel.jpg";
import avatarChandler from "../images/avatarChandler.jpg";
import avatarRoss from "../images/avatarRoss.jpg";
import avatarPhoebe from "../images/avatarPhoebe.jpg";
import avatarJoye from "../images/avatarJoye.jpg";


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
            chatsWithUsers: [{id: 1, name: 'Rachel', avatarImage: avatarRachel}, {
                id: 2,
                name: 'Chandler',
                avatarImage: avatarChandler
            }, {id: 3, name: 'Ross', avatarImage: avatarRoss}, {id: 4, name: 'Phoebe', avatarImage: avatarPhoebe}, {
                id: 5,
                name: 'Joye',
                avatarImage: avatarJoye
            },],
            chats: [{id: 1, message: 'Hey! How are you doing?'}, {
                id: 2,
                message: 'Hey! I am good, what about you?'
            }, {id: 3, message: 'Same'}],
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
    getState(){
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },
    addPost(postMessage) {
        let newPost = {
            id: 5, avatar: avatarMonica, message: postMessage, likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

