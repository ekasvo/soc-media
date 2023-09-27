import React, {createRef} from "react";
import Post from "./Post/Post";
import styles from "./MyPosts.module.css";
import Button from "../../Button/Button";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";


const MyPosts = ({profilePageState, dispatch}) => {
    let postData = createRef()
    let handleAddPost = () => {
        dispatch(addPostActionCreator());
    }
    let onPostChange = () => {
        let text = postData.current.value;
        let action = updateNewPostTextActionCreator(text)
        dispatch(action);
    }

    return (
        <>
            <div className={styles.create_post}>
                <textarea
                    placeholder="What's up"
                    onChange={onPostChange}
                    ref={postData}
                    value={profilePageState.newPostText}
                />
                <Button className='primary'
                        onClick={handleAddPost}
                >
                    Add Post
                </Button>
            </div>
            <h4> Posts </h4>
            <div className={styles.posts}>
                {profilePageState.posts && profilePageState.posts.map(post => {
                    return (
                        <Post avatar={post.avatar} id={post.id} message={post.message} likeCount={post.likeCount}/>
                    )
                })}
            </div>
        </>
    )
}

export default MyPosts;
