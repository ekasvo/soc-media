const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_STATE = 'SET-STATE';

let initialState = {
    users: []
};

const
    usersReducer = (state = initialState, action) => {
        switch (action.type) {
            case FOLLOW:
                return {
                    ...state,
                    users:
                        state.users.map(user => {
                            if (user.id === action.userId) {
                                return {...user, following: true};
                            }
                            return user
                        })
                }
            case UNFOLLOW:
                return {
                    ...state,
                    users:
                        state.users.map(user => {
                            if (user.id === action.userId) {
                                return {...user, following: false};
                            }
                            return user
                        })
                }
            case SET_STATE:
                return {...state, users: [ ...state.users, ...action.users ]}
            default:
                return state;
        }
    }
export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_STATE, users});

export default usersReducer;
