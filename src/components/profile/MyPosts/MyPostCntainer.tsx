
import React, { ChangeEvent} from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addPostActionCreater, ProfileType, updateNewPostTextActionCreater } from "../../../redux/profile-reducer";
import { RootState } from "../../../redux/redux-store";
import MyPost from "./MyPost";



type MapStatePropsType = {
    posts: ProfileType;
};

type MapDispathPropsType = {
    addPosts: () => void;
    updateNewPostText: (text: string) => void;
};

let mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        posts: state.profileReducer
    };
};

let mapDispatchToProps = (dispath: Dispatch): MapDispathPropsType => {
    return {
        addPosts: () => {
            dispath(addPostActionCreater());
        },
        updateNewPostText: (text: string) => {
            dispath(updateNewPostTextActionCreater(text));
        },
    };
};

export const SuperPostConatainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyPost);