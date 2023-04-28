import React from 'react'
import Header from './Header'
import axios from 'axios'
import { connect } from 'react-redux';
import { RootState } from '../../redux/redux-store';
import { authUser } from '../../redux/auth-reducer';

type HeaderContainerType = {
    isAuth: boolean;
    login: string | null;
    authUser: () => void
};

class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        this.props.authUser()
    }
    render() {
        return (
            <>
                <Header {...this.props}/>
            </>
        )
    }
}
let mapStateToProps = (state: RootState) => ({
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login
})
export default connect(mapStateToProps, { authUser })(HeaderContainer);
