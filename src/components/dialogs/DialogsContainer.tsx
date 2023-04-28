import React from "react";
import {  MessagesDateType } from "../../redux/state";
import {
    addMessagesTextActionCreater,
    updateMessagesTextActionCreater,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { RootState } from "../../redux/redux-store";
import { Dispatch } from "redux";




type MapStatePropsType = {
    dialogsPage: MessagesDateType;
    isAuth: boolean
};

type MapDispathPropsType = {
    onNewMessagesClick: (text: string) => void;
    onSendMessagesClick: () => void
};


let mapStateToProps = (state: RootState): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsReducer,
        isAuth: state.authReducer.isAuth
    };
};

let mapDispatchToProps = (dispath: Dispatch): MapDispathPropsType => {
    return {
        onNewMessagesClick: (text: string) => {
            dispath(updateMessagesTextActionCreater(text));
        },
        onSendMessagesClick: () => {
            dispath(addMessagesTextActionCreater());
        },
    };
};


export const SuperDialogsConatainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);