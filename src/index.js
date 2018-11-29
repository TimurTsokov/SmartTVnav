import React from 'react';
import ReactDOM from 'react-dom';
import ReactTV from 'react-tv';
import {withNavigation} from 'react-tv-navigation';
import './index.scss';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import AuthReducer from './store/reducers/AuthReducer'
import SignUpReducer from './store/reducers/SignUpReducer'
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    auth: AuthReducer,
    signUp: SignUpReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
const NavigableApp = withNavigation(App);


ReactTV.render(<Provider store={store}><NavigableApp/></Provider>, document.getElementById('root'));
registerServiceWorker();
