import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const GamesPage = () => {
    return (
        <p>
            <iframe src="https://scratch.mit.edu/projects/149636497/embed" allowTransparency="true" width="485" height="402"
                    frameBorder="0" scrolling="no" allowFullScreen></iframe>
        </p>
    )
}

const App = (props) => {

    return (
        <div className="App">
            <Header/>
            <div className="app-row">
                <Sidebar/>
                <Route path='/games' render={ () => <GamesPage /> }/>
                <Route path='/dialogs' render={ () => <DialogsContainer /> }/>
                <Route path='/profile/:userId?' render={ () => <ProfileContainer /> }/>
                <Route path='/users/' render={ () =>  <UsersContainer /> } />
            </div>
        </div>

    );
}

export default App;

