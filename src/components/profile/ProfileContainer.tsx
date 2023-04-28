import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { ProfileTypeProps, getProfile } from "../../redux/profile-reducer";
import { RootState } from "../../redux/redux-store";
import { Redirect, RouteComponentProps, withRouter } from "react-router-dom";

type mapStateToProps = {
    profile: ProfileTypeProps | null;
    isAuth: boolean
};

export type PropsType = {
    profile: ProfileTypeProps | null;
    isAuth: boolean
    getProfile: (userId: string) => void
};

export type PathParamsType = {
    userId: string
}

class ProfileContainer extends React.Component<PropsType & RouteComponentProps<PathParamsType>> {

    componentDidMount(): void {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = '3'
        }
        this.props.getProfile(userId)
    }
    render() {
        if(!this.props.isAuth) {
            return <Redirect to={'/login'}/>
        }
        return (
            <div>
                <Profile {...this.props } profile={this.props.profile}/>
            </div>
        );
    };
};

let mapStateToProps = (state: RootState): mapStateToProps => ({
    profile: state.profileReducer.profile,
    isAuth: state.authReducer.isAuth
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { getProfile })(WithUrlDataContainerComponent); 

