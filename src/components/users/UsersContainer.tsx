import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "../../redux/redux-store";
import { changeFollowClick, intitialStateType, setCurrentPage, setToatalUsersCount, setUsers, toogleIsFetching, toogleFollowingProgres, userType } from "../../redux/user-reducer";
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
    changeFollowClick: (userId: number) => void;
    setUsers: (users: userType[]) => void;
    setCurrentPage: (pageNumber: number) => void;
    setToatalUsersCount: (totalCount: number) => void;
    toogleIsFetching: (isFetching: boolean) => void;
    toogleFollowingProgres:(isFetching: boolean, userId: number) => void
};

class UsersAPIComponent extends React.Component<PropsType, {}> {
    componentDidMount(): void {
        this.props.toogleIsFetching(true)
        userAPI.getUsers(this.props.users.currentPage, this.props.users.pageSize).then((data) => {
            this.props.setUsers(data.items);
            this.props.setToatalUsersCount(data.totalCount);
            this.props.toogleIsFetching(false);
        });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toogleIsFetching(true);
        userAPI.getUsers(pageNumber, this.props.users.pageSize).then((data) => {
            this.props.setUsers(data.items);
            this.props.toogleIsFetching(false);
        });
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
                    changeFollowClick={this.props.changeFollowClick}
                    onPageChanged={this.onPageChanged}
                    toogleFollowingProgres={this.props.toogleFollowingProgres}
                    followingIsProgres={this.props.users.followingIsProgres}
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
    changeFollowClick,
    setUsers,
    setCurrentPage,
    setToatalUsersCount,
    toogleIsFetching,
    toogleFollowingProgres
})(UsersAPIComponent);

