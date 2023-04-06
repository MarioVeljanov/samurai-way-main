import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { ProfileTypeProps, setUserProfile } from "../../redux/profile-reducer";
import { RootState } from "../../redux/redux-store";
import { RouteComponentProps, withRouter } from "react-router-dom";



export type PropsType = {
    profile: ProfileTypeProps | null;
    setUserProfile: (profile: ProfileTypeProps) => void;
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
        axios.get(
                `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
            )
            .then((res) => {
                this.props.setUserProfile(res.data);
            });
    }
    render() {
        return (
            <div>
                <Profile {...this.props } profile={this.props.profile}/>
            </div>
        );
    };
};

let mapStateToProps = (state: RootState): {profile: ProfileTypeProps | null} => ({
    profile: state.profileReducer.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent); 

