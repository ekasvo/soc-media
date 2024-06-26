import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_STATE = 'SET-STATE';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FETCHING_PROGRESS'


let initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: [],
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
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingProgress: action.isFetching ?
                    [...state.followingProgress, action.id]
                    : state.followingProgress.filter(id => id === action.id)
            }
        default:
            return state;
    }
}
export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_STATE, users});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalUsersCount = (total) => ({type: SET_TOTAL_USERS_COUNT, total});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, id) => ({type: TOGGLE_FOLLOWING_PROGRESS, isFetching, id});

export const getUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(setCurrentPage(currentPage));
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
}

export const follow = (id) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, id));
    usersAPI.followApi(id)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(id));
            }
           dispatch(toggleFollowingProgress(false, id));
        });
}

export const unfollow = (id) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, id));
    usersAPI.unfollowApi(id)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(id));
            }
           dispatch(toggleFollowingProgress(false, id));
        });
}

export default usersReducer;
