import React from "react";
import Circle from "../Circle/Circle";
import styles from './Users.module.css';
import Button from "../Button/Button";
import avatarRachel from "../../images/avatarRachel.jpg";
import axios from "axios";


const UsersF = ({usersPage, follow, unfollow, setUsers}) => {
    let getUsers = () =>
    {
        if (usersPage.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    setUsers(response.data.items);
                });
        }
    }

    return (
        <>
            <button onClick={getUsers}>Get users</button>
            <h3>Users</h3>
            {usersPage.users && usersPage.users.map(user => {
                return (
                    <div key={user.id} className={styles.user_container}>
                        <div className={styles.avatar_image}>
                            <Circle img={user.photos.small ?? avatarRachel}></Circle>
                            {user.following
                                ? <Button className='secondary' onClick={() => unfollow(user.id)}>Unfollow</Button>
                                : <Button className='primary' onClick={() => follow(user.id)}>Follow</Button>
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

export default UsersF;