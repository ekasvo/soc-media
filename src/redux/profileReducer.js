import avatarMonica from "../images/avatarMonica.jpg";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
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
};

const
    profileReducer = (state = initialState, action) => {
        switch (action.type) {
            case ADD_POST: {
                let newPost = {
                    id: 5,
                    avatar: avatarMonica,
                    message: state.newPostText,
                    likesCount: 0
                };
                let stateCopy = {...state};
                stateCopy.posts.push(newPost);
                stateCopy.newPostText = '';
                return stateCopy;
            }
            case UPDATE_NEW_POST_TEXT:{
                let stateCopy = {...state};
                stateCopy.newPostText = action.newPostText;
                return stateCopy;
            }
            default:
                return state;
        }
    }
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newPostText: text});

export default profileReducer;
