const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_STATE = 'SET-STATE';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'


let initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
};

const usersReducer = (state = initialState, action) => {
        switch (action.type) {
            case FOLLOW:
                return {
                    ...state,
                    users:
                        state.users.map(user => {
                            if (user.id === action.userId) {
                                return {...user, followed: true};
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
                                return {...user, followed: false};
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
            case TOGGLE_IS_FETCHING:
                return {...state, isFetching: action.isFetching}
            default:
                return state;
        }
    }
export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_STATE, users});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalUsersCount = (total) => ({type: SET_TOTAL_USERS_COUNT, total});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default usersReducer;
