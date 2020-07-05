import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/reduxStore";

const GamesPage = () => {
    return (
        <p>
            <iframe src="https://scratch.mit.edu/projects/149636497/embed" allowTransparency="true" width="485" height="402"
                    frameBorder="0" scrolling="no" allowFullScreen></iframe>
        </p>
    )
}

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if ( !this.props.initialized ) {
            return <Preloader/>
        }

        return (
            <div className="App">
                <HeaderContainer/>
                <div className="app-row">
                    <Sidebar/>

                    <Route path='/games' render={() => <GamesPage/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/users/' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <LoginPage/>}/>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

let AppContainer = compose(
    withRouter,
    connect( mapStateToProps, {initializeApp})
) (App);

const SamuraiJSApp = (props) => {
    return <BrowserRouter basename="/">
            <Provider store={store}>
                <AppContainer />
            </Provider>
    </BrowserRouter>
}
export default SamuraiJSApp;
