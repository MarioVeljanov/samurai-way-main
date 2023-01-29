import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Profile from './components/profile/Profile';
import Header from './components/header/Header';
import Nav from './components/navbar/Nav';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/settings/Settings';
import Dialogs from './components/dialogs/Dialogs';
import {  StateType } from './redux/state';




type AppType = {
  appState: StateType
}



function App(props: AppType) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-container">
          {/* <Route path="/dialogs" component={Dialogs} /> */}
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                state={props.appState.messagesPage}
              />
            )}
          />
          {/* <Route path="/profile" component={Profile} /> */}
          <Route
            path="/profile"
            render={() => <Profile posts={props.appState.profile} />}
          />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
