import React from 'react'
import Header from './Header'
import axios from 'axios'
import { connect } from 'react-redux';
import { RootState } from '../../redux/redux-store';
import { AuthDataType, setAuthUserData } from '../../redux/auth-reducer';
import { userAPI } from '../../api/api';

type HeaderContainerType = {
    setAuthUserData: (id: string, email: string, login: string) => void;
    isAuth: boolean
    login: string | null
};

class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        userAPI.authUsers().then(res => {
            if(res.resultCode === 0) {
                let { id, email, login } = res.data;
                this.props.setAuthUserData(id, email, login)
            }
        });
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
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)
