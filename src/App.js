import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SignUpContainer from './Containers/SignUpContainer/SignUpContainer';
import SearchPageContainer from './Containers/SearchPageContainer/SearchPageContainer';
import MainPageContainer from './Containers/MainPageContainer/MainPageContainer';
import NewCinemaPageContainer from './Containers/NewCinemaPageContainer/NewCinemaPageContainer';
import TVPageContainer from './Containers/TVPageContainer/TVPageContainer';
import CinemaPageContainer from './Containers/CinemaPageContainer/CinemaPageContainer';
import ExitFromApp from './Containers/ExitFromApp/ExitFromApp';
import HeaderContainer from "./Containers/HeaderContainer/HeaderContainer";
import Device from "./modules/Device";
import CinemaGenres from './Containers/CinemaGenres/CinemaGenres'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            header: true,
            signUp: true,
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
        console.log('Device.getObject()', Device.getObject());
        return (
            <React.Fragment>
                { header == true ? <HeaderContainer changePath = { this.changePath }  selectedItem='main'/> : ""}
                { signUp == true ? <SignUpContainer /> : ""}
                { initApp == true ?
                    <React.Fragment>
                        { menuPath === 'search' ? <SearchPageContainer /> : ""}
                        { menuPath === 'main' ? <MainPageContainer /> : ""}
                        { menuPath === 'newcinema' ? <NewCinemaPageContainer /> : ""}
                        { menuPath === 'tv' ? <TVPageContainer /> : ""}
                        { menuPath === 'cinema' ? <CinemaGenres/> : ""}
                        { menuPath === 'exit' ? <ExitFromApp className="qwerty"/> : ""}
                    </React.Fragment>
                    : ''
                }
            </React.Fragment>
        );
    }
}

export default App;
