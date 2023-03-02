import React from 'react';
import './App.css';
import {  Route } from 'react-router-dom';
import Profile from './components/profile/Profile';
import Header from './components/header/Header';
import Nav from './components/navbar/Nav';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/settings/Settings';
import {  ActionsTypes, MessagesDateType, ProfileType, SideType } from './redux/state';
import { SuperDialogsConatainer } from './components/dialogs/DialogsContainer';


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
   
          <div className="app-wrapper">
              <Header />
              <Nav friends={props.appState.sidebarReducer} />
              <div className="app-wrapper-container">
                  <Route
                      path="/dialogs"
                      render={() => (
                          <SuperDialogsConatainer
                          />
                      )}
                  />

                  <Route
                      path="/profile"
                      render={() => (
                          <Profile
                          />
                      )}
                  />

                  <Route path="/news" component={News} />
                  <Route path="/music" component={Music} />
                  <Route path="/settings" component={Settings} />
              </div>
          </div>

  );
}

export default App;
