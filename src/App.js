import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AuthContainer from './Containers/AuthContainer/AuthContainer';
import HeaderContainer from './Containers/HeaderContainer/HeaderContainer';
import MainPageContainer from './Containers/MainPageContainer/MainPageContainer';
import NewCinemaPageContainer from './Containers/NewCinemaPageContainer/NewCinemaPageContainer';
import TVPageContainer from './Containers/TVPageContainer/TVPageContainer';
import CinemaPageContainer from './Containers/CinemaPageContainer/CinemaPageContainer';

class App extends Component {
    componentDidMount() {
        document.body.addEventListener('nv-enter', function (event) {
            event.target.click();
        });
    };

    render() {
        return (
            <Router>
                <React.Fragment>
                    <AuthContainer/>
                    <Route path="/main" component={MainPageContainer}/>
                    <Route path="/newcinema" component={NewCinemaPageContainer}/>
                    <Route path="/tv" component={TVPageContainer}/>
                    <Route path="/cinema" component={CinemaPageContainer}/>
                </React.Fragment>
            </Router>
        );
    }
}

export default App;
