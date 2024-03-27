import React from "react";
import styles from "./Users.module.css";
import Circle from "../Circle/Circle";
import avatarRachel from "../../images/avatarRachel.jpg";
import Button from "../Button/Button";
import {NavLink} from "react-router-dom";
import axios from "axios";

let Users = ({totalUserCount, pageSize, onPageChanged, currentPage, users, follow, unfollow}) => {

    let pagesCount = Math.ceil(totalUserCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const followApi = (id) => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
            withCredentials: true,
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    follow(id)
                }
            });
    }

    const unfollowApi = (id) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
            withCredentials: true,
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    unfollow(id)
                }
            });
    }

    return (
        <>
            <h3>Users</h3>
            <div>
                {pages.map(p => {
                    return (
                        <span className={currentPage === p && styles.selected_page}
                              onClick={() => onPageChanged(p)}
                        >
                            {p}
                        </span>
                    )
                })}
            </div>
            {users && users.map(user => {
                return (
                    <div key={user.id} className={styles.user_container}>
                        <div className={styles.avatar_image}>
                            <NavLink to={`/profile/${user.id}`}>
                                <Circle img={user.photos.small ?? avatarRachel}></Circle>
                            </NavLink>
                            {user.followed
                                ? <Button className='secondary'
                                          onClick={() => unfollowApi(user.id)}>Unfollow</Button>
                                : <Button className='primary'
                                          onClick={() => followApi(user.id)}>Follow</Button>
                            }
                        </div>
                        <div className={styles.avatar_info}>
                            <h4>{user.name}</h4>
                            <p>{user.status}</p>
                            {/*<h4>{user.location.country}, {user.location.city}</h4>*/}
                        </div>
                    </div>
                )
            })
            }
        </>
    )
}

export default Users;
