import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {usersAPI} from "../../api/api";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/usersReducer";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.users.currentPage, this.props.users.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount)
            });
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(page, this.props.users.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            });
    }

    render() {
        return (
            <>
                {this.props.isFetching ?
                    <div style={{backgroundColor: '#856073'}}>
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

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => dispatch(followAC(userId)),
//         unfollow: (userId) => dispatch(unfollowAC(userId)),
//         setUsers: (users) => dispatch(setUsersAC(users)),
//         setCurrentPage: (page) => dispatch(setCurrentPageAC(page)),
//         setTotalUsersCount: (total) => dispatch(setTotalUsersCountAC(total)),
//         toggleIsFetching: (isFetching) => dispatch(toggleIsFetchingAC(isFetching))
//     }
// }

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching
})(UsersContainer)
