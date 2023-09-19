import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.module.css";
import avatarMonica from '../../images/avatarMonica.jpg';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({profilePageState}) => {
    return (
        <div className={styles.profile}>
            <ProfileInfo image={avatarMonica}/>
            <MyPosts posts={profilePageState.posts}/>
        </div>
    )
}

export default Profile;
