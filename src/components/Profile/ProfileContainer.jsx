import React from "react";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profileReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.id;
        if (!userId) (userId = 30168);
        this.props.getProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

let authRedirectComponent = withAuthRedirect(ProfileContainer)

export default connect(mapStateToProps, {getProfile})(withRouter(authRedirectComponent));
