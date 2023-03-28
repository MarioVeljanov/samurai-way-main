import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "../../redux/redux-store";
import {  changeFollowAC, intitialStateType, setUsersAC } from "../../redux/user-reducer";
import Users from "./Users";
import UsersC from "./UsersC";

type MapStatePropsType = {
    users: intitialStateType
} 

type MapDispathPropsType = {
    changeFollowClick: (userId: number) => void;
    setUsers: (users: any) => void
};


let mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        users: state.usersReducer
    };
};

let mapDispatchToProps = (dispath: Dispatch): MapDispathPropsType => {
    return {
        changeFollowClick: (userId: number) => {
            dispath(changeFollowAC(userId));
        },
        setUsers: (users) => {
            dispath(setUsersAC(users))
        }
    };
};

export const UsersConatainer = connect(mapStateToProps, mapDispatchToProps)(UsersC);

