import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App  from "./App";
import "./index.css";
import store from "./redux/redux-store";
import { StoreType } from "./redux/state";
import { StoreContext } from "./StoreContext";


// const rerenderEntireThree = (store:any) => {
//     debugger;
//     ReactDOM.render(
//         <BrowserRouter>
//             <StoreContext.Provider value={store}>
//                 <App />
//             </StoreContext.Provider>
//         </BrowserRouter>,
//         document.getElementById("root")
//     );
// };



// rerenderEntireThree(store.getState())

// store.subscribe(() => {
//     rerenderEntireThree(store.getState())
// });


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App
                appState={store.getState()}
                dispath={store.dispatch.bind(store)}
            />
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
);



