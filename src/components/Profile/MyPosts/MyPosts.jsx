import React, {createRef} from "react";
import Post from "./Post/Post";
import styles from "./MyPosts.module.css";
import Button from "../../Button/Button";

const MyPosts = ({posts, newPostText, handleAddPost, postChange}) => {
    let postData = createRef();
    let onPostChange = () => {
        let text = postData.current.value;
        postChange(text);
    }

    return (
        <>
            <div className={styles.create_post}>
                <textarea
                    placeholder="What's up"
                    onChange={onPostChange}
                    ref={postData}
                    value={newPostText}
                />
                <Button className='primary'
                        onClick={handleAddPost}
                >
                    Add Post
                </Button>
            </div>
            <h4> Posts </h4>
            <div className={styles.posts}>
                {posts && posts.map(post => {
                    return (
                        <Post key={post.id} avatar={post.avatar} id={post.id} message={post.message} likeCount={post.likeCount}/>
                    )
                })}
            </div>
        </>
    )
}

export default MyPosts;
