import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {

    return (
        <div className="App">
            <Header/>
            <div className="app-row">
                <Sidebar/>
                <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage} /> }/>
                <Route path='/profile'
                       render={ () => <Profile
                           state={props.state.profilePage}
                           addPost={props.addPost}
                           updateNewPostText={props.updateNewPostText}/> }/>
            </div>
        </div>

    );
}

export default App;

