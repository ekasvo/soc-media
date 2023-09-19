import React from "react";
import Post from "./Post/Post";
import styles from "./MyPosts.module.css";


const MyPosts = ({posts}) => {
    return (
        <>
            <div className={styles.create_post}>
                <textarea placeholder="What's up?"></textarea>
                <button>Add Post</button>
            </div>
            <h4> Posts </h4>
            <div className={styles.posts}>
                {posts && posts.map(post => {
                    return (
                        <Post avatar={post.avatar} id={post.id} message={post.message} likeCount={post.likeCount}/>
                    )
                })}
            </div>
        </>
    )
}

export default MyPosts;
