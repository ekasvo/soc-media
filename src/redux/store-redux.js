import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import chatsReducer from "./chatsReducer";
import sideBarReducer from "./sideBarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    chatsPage: chatsReducer,
    sideBar: sideBarReducer,
    users: usersReducer,
    auth: authReducer
})

let store = createStore(reducers)
window.store = store;
export default store;
