import React, {createRef} from "react";
import Post from "./Post/Post";
import styles from "./MyPosts.module.css";
import Button from "../../Button/Button";


const MyPosts = ({profilePageState, addPost, updateNewPostText}) => {
    let postData = createRef()
    let handleAddPost = () => {
        let text = postData.current.value;
        addPost(text);
        postData.current.value = '';
    }
    let onPostChange = () => {
        let text = postData.current.value;
        updateNewPostText(text);
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
