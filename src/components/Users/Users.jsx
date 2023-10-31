import React from "react";
import Circle from "../Circle/Circle";
import styles from './Users.module.css';
import Button from "../Button/Button";
import avatarRachel from "../../images/avatarRachel.jpg";
import axios from "axios";


class Users extends React.Component {
    constructor() {
        super();
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return (
            <>
                <h3>Users</h3>
                {this.props.usersPage.users && this.props.usersPage.users.map(user => {
                    return (
                        <div key={user.id} className={styles.user_container}>
                            <div className={styles.avatar_image}>
                                <Circle img={user.photos.small ?? avatarRachel}></Circle>
                                {user.following
                                    ? <Button className='secondary'
                                              onClick={() => this.props.unfollow(user.id)}>Unfollow</Button>
                                    : <Button className='primary'
                                              onClick={() => this.props.follow(user.id)}>Follow</Button>
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
}

export default Users;
