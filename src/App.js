import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import AuthContainer from './Containers/AuthContainer/AuthContainer';
import Navigation from 'react-key-navigation'
import SignUpContainer from "./Containers/SignUpContainer/SignUpContainer";
import Keyboard from "./Components/Keyboard/Keyboard";

class App extends Component {
    render() {
        return (<BrowserRouter>
            <Navigation>
                <div>
                    <AuthContainer/>
                </div>
            </Navigation>
        </BrowserRouter>);
    }
}

export default App;
