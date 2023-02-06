import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {addPost, StateType, updateNewPostDate} from './redux/state';


export const rerenderEntireThree = (state: StateType) => {
    ReactDOM.render(
        <App appState={state} addPost={addPost}  updateNewPostDate={updateNewPostDate}/>,
        document.getElementById("root")
    );
};



