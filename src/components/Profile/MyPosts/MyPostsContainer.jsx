import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = ({store}) => {
    let state = store.getState()
    let handleAddPost = () => {
        store.dispatch(addPostActionCreator());
    }
    let postChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        store.dispatch(action);
    }

    return (
        <MyPosts posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}
                 handleAddPost={handleAddPost}
                 postChange={postChange}
        />
    )
}

export default MyPostsContainer;
