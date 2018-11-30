import React from 'react';
import ReactTV from 'react-tv';
import './index.scss';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import AuthReducer from './store/reducers/AuthReducer'
import SignUpReducer from './store/reducers/SignUpReducer'
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import "smarttv-navigation";

const rootReducer = combineReducers({
    auth: AuthReducer,
    signUp: SignUpReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


ReactTV.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
