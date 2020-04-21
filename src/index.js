import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import store from './redux/reduxStore';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter basename="/">
            <React.StrictMode>
                <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe( () => {
    rerenderEntireTree(store.getState());
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
