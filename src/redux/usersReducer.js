const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_STATE = 'SET-STATE';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';


let initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
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
                return {...state, users: [...action.users]}
            case SET_CURRENT_PAGE:
                return {...state, currentPage: action.page}
            case SET_TOTAL_USERS_COUNT:
                return {...state, totalUserCount: action.total}
            default:
                return state;
        }
    }
export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_STATE, users});
export const setCurrentPageAC = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalUsersCountAC = (total) => ({type: SET_TOTAL_USERS_COUNT, total});

export default usersReducer;
