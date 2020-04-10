import React from 'react';
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="App">
        <Header/>

        <div className="app-row">
            <Sidebar/>
            <Profile/>
        </div>
    </div>
  );
}

export default App;

