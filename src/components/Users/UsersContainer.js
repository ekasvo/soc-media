import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../common/Preloader";

import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unfollowAC
} from "../../redux/usersReducer";
import axios from "axios";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.users.currentPage}&count=${this.props.users.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.users.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return (
            <>
                {this.props.isFetching ?
                    <div style={{backgroundColor: '#856073'}} >
                        <Preloader/>
                    </div>
                    :
                    <Users totalUserCount={this.props.users.totalUserCount}
                           pageSize={this.props.users.pageSize}
                           onPageChanged={this.onPageChanged}
                           currentPage={this.props.users.currentPage}
                           users={this.props.users.users}
                           follow={this.props.follow}
                           unfollow={this.props.unfollow}

                    />
                }

            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        pageSize: state.pageSize,
        totalUserCount: state.totalUserCount,
        currentPage: state.currentPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followAC(userId)),
        unfollow: (userId) => dispatch(unfollowAC(userId)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        setCurrentPage: (page) => dispatch(setCurrentPageAC(page)),
        setTotalUsersCount: (total) => dispatch(setTotalUsersCountAC(total)),
        toggleIsFetching: (isFetching) => dispatch(toggleIsFetchingAC(isFetching))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
