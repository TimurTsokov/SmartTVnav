import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import AuthReducer from './store/reducers/AuthReducer';
import SignUpReducer from './store/reducers/SignUpReducer';
import GenresReducer from './store/reducers/GenresReducer';
import ChannelsReducer from './store/reducers/ChannelsReducer';
import registerServiceWorker from './registerServiceWorker';
import Nav, {NavTree} from 'react-navtree';
import thunk from 'redux-thunk';
import axios from "axios";

let navTree = new NavTree();

axios.defaults.headers.post['Content-Type'] = 'application/json';

window.document.addEventListener('keydown', (e) => {
    let key;
    switch (e.keyCode) {
        case 40:
            key = 'down';
            break;
        case 38:
            key = 'up';
            break;
        case 37:
            key = 'left';
            break;
        case 39:
            key = 'right';
            break;
        case 13:
            key = 'enter';
            break;
        case 8:
            key = 'backspace';
            break;
        default:
    }
    if (key) {
        navTree.resolve(key);
    }
}, false);

const rootReducer = combineReducers({
    auth: AuthReducer,
    signUp: SignUpReducer,
    movieGenres: GenresReducer,
    signUp: SignUpReducer,
    tv: ChannelsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
ReactDOM.render(<Nav className="container" tree={navTree}><Provider store={store}><App/></Provider></Nav>, document.getElementById('root'));
registerServiceWorker();
