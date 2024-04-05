import avatarMonica from "../images/avatarMonica.jpg";
import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

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
    profile: null,
};

const profileReducer = (state = initialState, action) => {
        switch (action.type) {
            case ADD_POST:
                let newPostText = {
                    id: 5,
                    avatar: avatarMonica,
                    message: state.newPostText,
                    likesCount: 0
                }
                return {
                    ...state,
                    newPostText: '',
                    posts: [
                        ...state.posts,
                        newPostText,
                    ]
                }
            case UPDATE_NEW_POST_TEXT:
                return {
                    ...state,
                    newPostText: action.newPostText,
                }
            case SET_USER_PROFILE:
                return {
                    ...state,
                    profile: action.profile,
                }
            default:
                return state;
        }
    }
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newPostText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getProfile = (userId) => (dispatch) =>{
    profileAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data));
        });
}

export default profileReducer;
