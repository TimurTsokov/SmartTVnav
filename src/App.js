import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import AuthContainer from './Containers/AuthContainer/AuthContainer';
import CinemaGenres from './Containers/CinemaGenres/CinemaGenres'

class App extends Component {

    componentDidMount() {
        document.body.addEventListener('nv-enter', function (event) {
            event.target.click();
        });
    };

       render() {
        return (
            // <Router>
            //   <React.Fragment>
            //      <AuthContainer/>

            //   </React.Fragment>
            //   </Router>

                <CinemaGenres/>
        );
    }
}

export default App;
