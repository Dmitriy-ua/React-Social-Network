import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/reduxStore";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

const GamesPage = () => {
    return (
        <p>
            <iframe src="https://scratch.mit.edu/projects/149636497/embed" allowTransparency="true" width="485" height="402"
                    frameBorder="0" scrolling="no" allowFullScreen></iframe>
        </p>
    )
}

class App extends React.Component {
    // catchAllUnhandledErrors = (promiseRejectionEvent) => {
    //     alert(promiseRejectionEvent);
    // }

    componentDidMount() {
        this.props.initializeApp();
        // window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors );
    }

    // componentWillUnmount() {
    //     window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors );
    // }

    render() {

        if ( !this.props.initialized ) {
            return <Preloader/>
        }

        return (
            <div className="App">
                <HeaderContainer/>
                <div className="app-row">
                    <Sidebar/>
                    <div className="app-main">
                        <Switch>

                            <Route exact path='/' render={ () => <Redirect to={'/profile'} /> }/>

                            <Route path='/dialogs' render={() => {
                                return <React.Suspense fallback={<Preloader/>}>
                                    <DialogsContainer/>
                                </React.Suspense>
                            }}/>
                            {/*Same action with my hoc*/}
                            <Route path='/profile/:userId?' render={ withSuspense(ProfileContainer) }/>
                            {/*<Route path='/profile/:userId?' render={ () => <ProfileContainer/> }/>*/}

                            <Route path='/users/' render={() => <UsersContainer/>}/>

                            <Route path='/login' render={() => <LoginPage/>}/>

                            <Route path='/games' render={() => <GamesPage/>}/>

                            <Route path='*' render={() => <div>404 Page not found!</div>}/>
                        </Switch>
                    </div>

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
    return <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <AppContainer />
            </Provider>
    </BrowserRouter>
}
export default SamuraiJSApp;
