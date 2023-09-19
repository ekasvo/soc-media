import React from "react";
import styles from "./ProfileInfo.module.css";


const ProfileInfo = (props) => {
    return (
        <div className={styles.avatar_info}>
            <img className={styles.avatar} src={props.image}/>
            <div>
                <h4>Monica Geller</h4>
                <br/>
                <h5>Date of birth: March 1969</h5>
                <h5>City: New York</h5>
            </div>
        </div>
    )
}

export default ProfileInfo;
