import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import AuthContainer from './Containers/AuthContainer/AuthContainer';
import Navigation from 'react-key-navigation'
import SignUpContainer from "./Containers/SignUpContainer/SignUpContainer";
import Keyboard from "./Components/Keyboard/Keyboard";

class App extends Component {
    render() {
        return (
            <Navigation>
                <BrowserRouter>
                <div>
                    <AuthContainer/>
                </div>
            </BrowserRouter>
            </Navigation>);
    }
}

export default App;
