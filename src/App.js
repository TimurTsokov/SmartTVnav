import React, {PureComponent, Fragment} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import SignUpContainer from './Containers/SignUpContainer/SignUpContainer';
import SearchPageContainer from './Containers/SearchPageContainer/SearchPageContainer';
import MainPageContainer from './Containers/MainPageContainer/MainPageContainer';
import NewCinemaPageContainer from './Containers/NewCinemaPageContainer/NewCinemaPageContainer';
import TVPageContainer from './Containers/TVPageContainer/TVPageContainer';
import CinemaPageContainer from './Containers/CinemaPageContainer/CinemaPageContainer';
import HeaderContainer from "./Containers/HeaderContainer/HeaderContainer";
import CinemaGenres from './Containers/CinemaGenres/CinemaGenres'

class App extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            SignUpContainer: true,
            menuPath: false,
            isVisible: {
                Header: true,
            }
        }
    };

    _setState = (tab) => {
        this.setState({
            ...this.state,
            menuPath: tab,
            signUp: false
        });
    };

    render() {
        const {
            Header,
            SignUpContainer,
            menuPath
        } = this.state;

        return (
            <Fragment>
                {Header === true ? <HeaderContainer _setState={this._setState} selectedItem='main'/> : ""}
                {SignUpContainer === true ? <SignUpContainer _setState={this._setState}/> : ""}
                <Fragment>
                    {menuPath === 'search' ? <SearchPageContainer/> : ""}
                    {menuPath === 'main' ? <MainPageContainer/> : ""}
                    {menuPath === 'newcinema' ? <NewCinemaPageContainer/> : ""}
                    {menuPath === 'tv' ? <TVPageContainer/> : ""}
                    {menuPath === 'cinema' ? <CinemaGenres/> : ""}
                </Fragment>
            </Fragment>
        );
    }
}

export default App;
