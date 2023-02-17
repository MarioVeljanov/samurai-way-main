import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import store from "./redux/state";


const rerenderEntireThree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                appState={store.getState()}
                dispath={store.dispath.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById("root")
    );
};



rerenderEntireThree()

store.subccribe(rerenderEntireThree);

