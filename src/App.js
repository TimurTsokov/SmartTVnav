import React, {PureComponent, Fragment} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import SignUpContainer from './Containers/SignUpContainer/SignUpContainer';
import SearchPageContainer from './Containers/SearchPageContainer/SearchPageContainer';
import MainPageContainer from './Containers/MainPageContainer/MainPageContainer';
import NewCinemaPageContainer from './Containers/NewCinemaPageContainer/NewCinemaPageContainer';
import TVPageContainer from './Containers/TVPageContainer/TVPageContainer';
import CinemaPageContainer from './Containers/CinemaPageContainer/CinemaPageContainer';
import NavBar from "./Containers/NavBar/NavBar";
import CinemaGenres from './Containers/CinemaGenres/CinemaGenres';
import * as cnst from './modules/Services/Constants';

class App extends PureComponent {

    constructor() {
        super();
        this.state = {
            currentPage: cnst.SIGN_UP
        }
    };

    _setState = (currentPage, navBarVisible) => {
        this.setState({
            ...this.state,
            [currentPage]: true,
            currentPage: currentPage
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
            <Fragment>
                {navBar && <NavBar _setState={this._setState} currentPage={currentPage}/>}
                {currentPage === cnst.SIGN_UP && <SignUpContainer _setState={this._setState}/>}
                {this.state[cnst.SEARCH] && <SearchPageContainer visible={currentPage === cnst.SEARCH}/>}
                {this.state[cnst.MAIN_PAGE] && <MainPageContainer _setState={this._setState} visible={currentPage === cnst.MAIN_PAGE}/>}
                {this.state[cnst.NEW_CINEMA] && <NewCinemaPageContainer visible={currentPage === cnst.NEW_CINEMA}/>}
                {this.state[cnst.CHANNELS] && <TVPageContainer visible={currentPage === cnst.CHANNELS}/>}
                {this.state[cnst.CINEMA] && <CinemaGenres visible={currentPage === cnst.CINEMA}/>}
            </Fragment>
        );
    }
}

export default App;
