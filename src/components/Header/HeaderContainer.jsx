import React from "react";
import Header from "./Header";
import {setAuthUserData} from "../../redux/authReducer";
import {connect} from "react-redux";
import {profileAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        profileAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    this.props.setAuthUserData(id, email, login)
                }
            });
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    username: state.auth.login
})
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
