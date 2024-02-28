import React from "react";
import styles from "./ProfileInfo.module.css";


const ProfileInfo = ({profile}) => {
    return (
        <div className={styles.avatar_info}>
            <img className={styles.avatar} src={profile.photos.large}/>
            <div>
                <h4>{profile.fullName}</h4>
                <p>{profile.aboutMe}</p>
                <br/>
                <h5>Date of birth: March 1969</h5>
                <h5>City: New York</h5>
            </div>
        </div>
    )
}

export default ProfileInfo;
