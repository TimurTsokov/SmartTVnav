import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import AuthContainer from './Containers/AuthContainer/AuthContainer';

class App extends Component {
    componentDidMount() {
        document.body.addEventListener('nv-enter', function (event) {
            event.target.click();
        });
    };

    render() {
        return (
            <Router>
                    <AuthContainer/>
            </Router>
        );
    }
}

export default App;
