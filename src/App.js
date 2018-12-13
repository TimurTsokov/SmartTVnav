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
            header: true,
            signUp: false,
            initApp: true,
            menuPath: false
        }
    };

    componentDidMount() {
        document.body.addEventListener('nv-enter', function (event) {
            event.target.click();
        });
    };

    changePath = (tab) => {
        this.setState({
            ...this.state,
            menuPath: tab,
            signUp: false
        });
    };

    render() {
        const {header, signUp, initApp, menuPath} = this.state;
        return (
            <Fragment>
                { header === true ? <HeaderContainer changePath = { this.changePath }  selectedItem='main'/> : ""}
                { signUp === true ? <SignUpContainer changePath = { this.changePath } /> : ""}
                { initApp === true ?
                    <Fragment>
                        { menuPath === 'search' ? <SearchPageContainer /> : ""}
                        { menuPath === 'main' ? <MainPageContainer /> : ""}
                        { menuPath === 'newcinema' ? <NewCinemaPageContainer /> : ""}
                        { menuPath === 'tv' ? <TVPageContainer /> : ""}
                        { menuPath === 'cinema' ? <CinemaGenres/> : ""}
                    </Fragment>
                    : ''
                }
            </Fragment>
        );
    }
}

export default App;
