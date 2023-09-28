import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import chatsReducer from "./chatsReducer";
import sideBarReducer from "./sideBarReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    chatsPage: chatsReducer,
    sideBar: sideBarReducer,
})

let store = createStore(reducers)

export default store;