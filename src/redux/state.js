import avatarMonica from "../images/avatarMonica.jpg";
import avatarRachel from "../images/avatarRachel.jpg";
import avatarChandler from "../images/avatarChandler.jpg";
import avatarRoss from "../images/avatarRoss.jpg";
import avatarPhoebe from "../images/avatarPhoebe.jpg";
import avatarJoye from "../images/avatarJoye.jpg";


let state = {
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
    },
    profilePage: {
        posts: [
            {
                id: 1,
                avatar: avatarMonica,
                message: "'Phoebe and Gary think they're the hotter couple. So, to prove them wrong, we have to go and have a ton of sex.'",
                likeCount: 3,
            }, {
                id: 2,
                avatar: avatarMonica,
                message: "'If you're too afraid to be in a relationship, then don't be in one.'",
                likeCount: 33,
            },
        ]
    },
    sideBar: {
        friendsList:[
            {id: 1, name: 'Rachel', avatarImage: avatarRachel},
            {id: 2, name: 'Chandler', avatarImage: avatarChandler},
            {id: 3, name: 'Ross', avatarImage: avatarRoss},
            {id: 4, name: 'Phoebe', avatarImage: avatarPhoebe},
            {id: 5, name: 'Joye', avatarImage: avatarJoye},
        ]
    }
}

export default state;
