import React from 'react';
import './App.css';
import {  Route } from 'react-router-dom';
import Nav from './components/navbar/Nav';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/settings/Settings';
import {  ActionsTypes, MessagesDateType, ProfileType, SideType } from './redux/state';
import { SuperDialogsConatainer } from './components/dialogs/DialogsContainer';
import { UsersConatainer } from './components/users/UsersContainer';
import ProfileContainer from './components/profile/ProfileContainer';
import HeaderContainer from './components/header/HeaderContainer';
import { Login } from './components/login/Login';


type AppStateType = {
    dialogsReducer: MessagesDateType;
    profileReducer: ProfileType;
    sidebarReducer: SideType[]
};


type AppType = {
    appState: AppStateType;
    dispath: (action: ActionsTypes) => void;
};

  

function App(props: AppType) {
  return (
      <>
          <div className="app-wrapper">
              <HeaderContainer />
              <Nav friends={props.appState.sidebarReducer} />
              <div className="app-wrapper-container">
                  <Route
                      path="/dialogs"
                      render={() => <SuperDialogsConatainer />}
                  />

                  <Route
                      path="/profile/:userId?"
                      render={() => <ProfileContainer />}
                  />
                  <Route
                      path="/login"
                      render={() => <Login />}
                  />

                  <Route path="/users" render={() => <UsersConatainer />} />
                  <Route path="/news" component={News} />
                  <Route path="/music" component={Music} />
                  <Route path="/settings" component={Settings} />
              </div>
          </div>
      </>
  );
}

export default App;
