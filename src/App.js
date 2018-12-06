import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import AuthContainer from './Containers/AuthContainer/AuthContainer';
import GenresList from './Containers/CinemaGenres/GenresList'

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

                <GenresList/>
        );
    }
}

export default App;
