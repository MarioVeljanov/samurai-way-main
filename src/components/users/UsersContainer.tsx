import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "../../redux/redux-store";
import { changeFollowClick, intitialStateType, setCurrentPage, setToatalUsersCount, setUsers, toogleIsFetching, userPropsType, userType } from "../../redux/user-reducer";
import { Users } from "./Users";
import preloader from '../../assets/img/loader.gif'
import s from "./Users.module.css";
import { Loader } from "../preloader/Loader";

type MapStatePropsType = {
    users: intitialStateType
} 

type MapDispathPropsType = {
    changeFollowClick: (userId: number) => void;
    setUsers: (users: any) => void;
    setCurrentPage: (pageNumber: number) => void;
    setToatalUsersCount: (totalCount: number) => void;
    toogleIsFetching: (isFetching: boolean) => void
};

export type PropsType = {
    users: intitialStateType;
    changeFollowClick: (userId: number) => void;
    setUsers: (users: userType[]) => void;
    setCurrentPage: (pageNumber: number) => void;
    setToatalUsersCount: (totalCount: number) => void;
    toogleIsFetching: (isFetching: boolean) => void;
};

class UsersAPIComponent extends React.Component<PropsType, {}> {
    componentDidMount(): void {
        this.props.toogleIsFetching(true)
        axios.get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.users.currentPage}&count=${this.props.users.pageSize}`
            )
            .then((res) => {
                this.props.setUsers(res.data.items);
                this.props.setToatalUsersCount(res.data.totalCount);
                this.props.toogleIsFetching(false);
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toogleIsFetching(true);
        axios.get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.users.pageSize}`
            )
            .then((res) => {
                this.props.setUsers(res.data.items);
                this.props.toogleIsFetching(false);
            });
    };

    render() {
        return (
            <>
                {this.props.users.isFetching ? <Loader/> : null}
                <Users
                    totalCount={this.props.users.totalCount}
                    pageSize={this.props.users.pageSize}
                    currentPage={this.props.users.currentPage}
                    items={this.props.users.items}
                    changeFollowClick={this.props.changeFollowClick}
                    onPageChanged={this.onPageChanged}
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

// let mapDispatchToProps = (dispath: Dispatch): MapDispathPropsType => {
//     return {
//         changeFollowClick: (userId: number) => {
//             dispath(changeFollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispath(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispath(setCurrentPageAC(pageNumber));
//         },
//         setToatalUsersCount: (totalCount) => {
//             dispath(setToatalUsersCountAC(totalCount));
//         },
//         toogleIsFetching: (isFetching) => {
//             dispath(setIsFetchingtAC(isFetching));
//         }
//     };
// };


export const UsersConatainer = connect(mapStateToProps, {
    changeFollowClick,
    setUsers,
    setCurrentPage,
    setToatalUsersCount,
    toogleIsFetching
})(UsersAPIComponent);

