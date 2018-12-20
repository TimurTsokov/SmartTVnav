import React, {PureComponent, Fragment} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import SignUpContainer from './Containers/SignUpContainer/SignUpContainer';
import SearchPageContainer from './Containers/SearchPageContainer/SearchPageContainer';
import MainPageContainer from './Containers/MainPageContainer/MainPageContainer';
import NewCinemaPageContainer from './Containers/NewCinemaPageContainer/NewCinemaPageContainer';
import TVPageContainer from './Containers/TVPageContainer/TVPageContainer';
import CinemaPageContainer from './Containers/CinemaPageContainer/CinemaPageContainer';
import NavBar from "./Containers/NavBar/NavBar";
import ExitFromApp from './Containers/NavBar/ExitFromApp/ExitFromApp';
import CinemaGenres from './Containers/CinemaGenres/CinemaGenres';
import * as cnst from './modules/Services/Constants';

class App extends PureComponent {

    constructor() {
        super();
        this.state = {
            currentPage: cnst.SIGN_UP,
            navBar: false
        }
    };

    _setState = (currentPage, navBarVisible) => {
        this.setState({
            ...this.state,
            currentPage: currentPage
            // navBar: navBarVisible || false
        });
    };

    render() {
        const {currentPage} = this.state;
        let navBar = false;

        switch (currentPage) {
            case cnst.SIGN_UP:
                navBar = false;
                break;
            default:
                navBar = true;
        }

        return (

                <Router>
                    <Fragment>
                    <NavBar _setState={this._setState}
                            currentPage={currentPage}
                            visible={navBar}/>
                    {currentPage === cnst.SIGN_UP && <SignUpContainer _setState={this._setState}/>}
                    {currentPage === cnst.SEARCH && <SearchPageContainer/>}
                    {currentPage === cnst.MAIN_PAGE && <MainPageContainer/>}
                    {currentPage === cnst.NEW_CINEMA && <NewCinemaPageContainer/>}
                    {currentPage === cnst.CHANNELS && <TVPageContainer/>}
                    {currentPage === cnst.CINEMA && <CinemaGenres/>}
                    {currentPage === cnst.EXIT && <ExitFromApp />}
                    </Fragment>
                </Router>

        );
    }
}

export default App;
