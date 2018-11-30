import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import AuthContainer from './Containers/AuthContainer/AuthContainer';

class App extends Component {
    render() {
        return (

            <Router>
                    <div>
                        <AuthContainer/>
                    </div>
            </Router>
        );
    }
}

export default App;
