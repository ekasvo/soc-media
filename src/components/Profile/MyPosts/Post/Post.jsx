import React from "react";
import styles from "./Post.module.css";



const Post = (props) => {
    return (
        <div className={styles.post}>
            <div className={styles.post_content}>
                <img src={props.avatar} className={styles.post_avatar}/>
                <p>{props.message}</p>
            </div>
            <p className={styles.like}>
                {props.likeCount}
                <span className={`material-symbols-outlined like_coffee ${styles.like_coffee}`}>
                    coffee
                </span>
            </p>
        </div>
    )
}

export default Post;
