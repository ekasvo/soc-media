import React from "react";
import styles from "./Users.module.css";
import Circle from "../Circle/Circle";
import avatarRachel from "../../images/avatarRachel.jpg";
import Button from "../Button/Button";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

let Users = ({totalUserCount, pageSize, onPageChanged, currentPage, users, follow, unfollow}) => {

    let pagesCount = Math.ceil(totalUserCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const doFollow = (id) => {
        usersAPI.followApi(id)
            .then(data => {
                if (data.resultCode === 0) {
                    follow(id)
                }
            });
    }

    const doUnfollow = (id) => {
        usersAPI.unfollowApi(id)
            .then(data => {
                if (data.resultCode === 0) {
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
                                          onClick={() => doUnfollow(user.id)}>Unfollow</Button>
                                : <Button className='primary'
                                          onClick={() => doFollow(user.id)}>Follow</Button>
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
