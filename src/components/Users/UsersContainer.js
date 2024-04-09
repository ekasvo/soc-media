import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {
    follow,
    getUsers,
    unfollow
} from "../../redux/usersReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.users.currentPage, this.props.users.pageSize);
    }

    onPageChanged = (page) => {
        this.props.getUsers(page, this.props.users.pageSize);
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
                           followingProgress={this.props.users.followingProgress}
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
        followingProgress: state.followingProgress,
    }
}

export default withAuthRedirect(connect(mapStateToProps, {follow, unfollow, getUsers})(UsersContainer))
