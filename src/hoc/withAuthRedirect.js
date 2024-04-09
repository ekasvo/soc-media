import {Navigate} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

const mapStateToPropsRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        if (!props.isAuth) return <Navigate to="/login"/>;
        return <Component {...props}/>
    }
    let connectedAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent);

    return connectedAuthRedirectComponent
}
