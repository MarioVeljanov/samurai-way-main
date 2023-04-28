import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "../../redux/redux-store";
import { intitialStateType, setCurrentPage, setToatalUsersCount, setUsers, toogleIsFetching, toogleFollowingProgres, userType, getUsers, followUnfollow } from "../../redux/user-reducer";
import { Users } from "./Users";
import preloader from '../../assets/img/loader.gif'
import s from "./Users.module.css";
import { Loader } from "../preloader/Loader";
import { userAPI } from "../../api/api";

type MapStatePropsType = {
    users: intitialStateType
} 

export type PropsType = {
    users: intitialStateType;
    setCurrentPage: (pageNumber: number) => void;
    getUsers: (currentPage: number, pageSize: number) => void;
    followUnfollow: (userId: number) => void
};

class UsersAPIComponent extends React.Component<PropsType, {}> {
    componentDidMount(): void {
        this.props.getUsers(this.props.users.currentPage, this.props.users.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(this.props.users.currentPage, this.props.users.pageSize)
    };

    render() {
        return (
            <>
                {this.props.users.isFetching ? <Loader /> : null}
                <Users
                    totalCount={this.props.users.totalCount}
                    pageSize={this.props.users.pageSize}
                    currentPage={this.props.users.currentPage}
                    items={this.props.users.items}
                    onPageChanged={this.onPageChanged}
                    followingIsProgres={this.props.users.followingIsProgres}
                    followUnfollow={this.props.followUnfollow}
                />
            </>
        );
    }
}


let mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        users: state.usersReducer
    };
};


export const UsersConatainer = connect(mapStateToProps, {
    setCurrentPage,
    getUsers,
    followUnfollow
})(UsersAPIComponent);

