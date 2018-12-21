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

    constructor(props) {
        super(props);
        this.state = {
            currentPage: cnst.SIGN_UP,
            prevPage: cnst.SIGN_UP
        }
    };

    _setState = (currentPage, navBarVisible) => {
        this.setState({
            ...this.state,
            [currentPage]: true,
            currentPage: currentPage || this.state.prevPage,
            prevPage: this.state.currentPage
        });
    };

  /*  changePath = (tab) => {
        this.setState({
            ...this.state,
            prevPath: this.state.menuPath || cnst.MAIN_PAGE,
            menuPath: tab || this.state.prevPath,
        });
    };*/

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
                        {navBar && <NavBar _setState={this._setState} currentPage={currentPage}/>}
                        {currentPage === cnst.SIGN_UP && <SignUpContainer _setState={this._setState}/>}
                        {this.state[cnst.SEARCH] && <SearchPageContainer visible={currentPage === cnst.SEARCH}/>}
                        {this.state[cnst.MAIN_PAGE] && <MainPageContainer _setState={this._setState} visible={currentPage === cnst.MAIN_PAGE}/>}
                        {this.state[cnst.NEW_CINEMA] && <NewCinemaPageContainer visible={currentPage === cnst.NEW_CINEMA}/>}
                        {this.state[cnst.CHANNELS] && <TVPageContainer visible={currentPage === cnst.CHANNELS}/>}
                        {this.state[cnst.CINEMA] && <CinemaGenres visible={currentPage === cnst.CINEMA}/>}
                        {this.state[cnst.EXIT] && <ExitFromApp _setState={this._setState} visible={currentPage === cnst.EXIT}/>}
                    </Fragment>
                </Router>

        );
    }
}

export default App;
