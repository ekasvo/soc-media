import React from "react";
import styles from "./Profile.module.css";
import avatarMonica from '../../images/avatarMonica.jpg';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({store}) => {
    return (
        <div className={styles.profile}>
            <ProfileInfo image={avatarMonica}/>
            <MyPostsContainer store={store}/>
        </div>
    )
}

export default Profile;
