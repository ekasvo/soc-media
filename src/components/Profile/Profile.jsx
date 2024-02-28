import React from "react";
import styles from "./Profile.module.css";
import avatarMonica from '../../images/avatarMonica.jpg';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader";

const Profile = ({profile}) => {

    return (
        !profile ?
            <Preloader/>
            :
            <div className={styles.profile}>
                <ProfileInfo profile={profile}/>
                <MyPostsContainer/>
            </div>
    )
}

export default Profile;
