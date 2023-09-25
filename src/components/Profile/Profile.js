import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.module.css";
import avatarMonica from '../../images/avatarMonica.jpg';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../redux/state";

const Profile = ({profilePageState, addPost, updateNewPostText}) => {
    return (
        <div className={styles.profile}>
            <ProfileInfo image={avatarMonica}/>
            <MyPosts profilePageState={profilePageState} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </div>
    )
}

export default Profile;
