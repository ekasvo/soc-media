import React from "react";
import Circle from "../Circle/Circle";
import styles from './Users.module.css';
import Button from "../Button/Button";
import avatarRachel from "../../images/avatarRachel.jpg";
import avatarChandler from "../../images/avatarChandler.jpg";
import avatarRoss from "../../images/avatarRoss.jpg";
import avatarPhoebe from "../../images/avatarPhoebe.jpg";
import avatarJoye from "../../images/avatarJoye.jpg";


const Users = ({usersPage, follow, unfollow, setUsers}) => {
    if (usersPage.users.length === 0) {
        setUsers([
            {
                id: 1,
                fullName: 'Rachel',
                avatarImage: avatarRachel,
                status: "I wasn’t supposed to put beef in the trifle!",
                location: {country: 'USA', city: 'New-York'},
                following: true,
            }, {
                id: 2,
                fullName: 'Chandler',
                avatarImage: avatarChandler,
                status: "Hi, I’m Chandler. I make jokes when I’m uncomfortable.",
                location: {country: 'USA', city: 'New-York'},
                following: false,
            }, {
                id: 3,
                fullName: 'Ross',
                avatarImage: avatarRoss,
                status: "Pivot!",
                location: {country: 'USA', city: 'New-York'},
                following: true,
            }, {
                id: 4,
                fullName: 'Phoebe',
                avatarImage: avatarPhoebe,
                status: "I don’t even have a ‘pla-.’",
                location: {country: 'USA', city: 'New-York'},
                following: true,
            }, {
                id: 5,
                fullName: 'Joye',
                avatarImage: avatarJoye,
                status: "How You Doin'?",
                location: {country: 'USA', city: 'New-York'},
                following: true,
            }]
        )
    }

    return (
        <>
            <h3>Users</h3>
            {usersPage.users && usersPage.users.map(user => {
                return (
                    <div key={user.id} className={styles.user_container}>
                        <div className={styles.avatar_image}>
                            <Circle img={user.avatarImage}></Circle>
                            {user.following
                                ? <Button className='secondary' onClick={() => unfollow(user.id)}>Unfollow</Button>
                                : <Button className='primary' onClick={() => follow(user.id)}>Follow</Button>
                            }
                        </div>
                        <div className={styles.avatar_info}>
                            <h4>{user.fullName}</h4>
                            <p>{user.status}</p>
                            <h4>{user.location.country}, {user.location.city}</h4>
                        </div>
                    </div>
                )
            })
            }
        </>
    )
}

export default Users;
