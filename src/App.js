import React, {PureComponent, Fragment} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import SignUpContainer from "./Containers/SignUpContainer/SignUpContainer";
import MainPageContainer from "./Containers/MainPageContainer/MainPageContainer";

class App extends PureComponent {

    constructor() {
        super();
        this.state = {
            signUpContainer: true,
            mainPageContainer: false
        }
    }

    _setState = (prevContainer, nextContainer) => {
        this.setState({
            ...this.state,
            signUpContainer: false,
            mainPageContainer: true
        })
    };

    render() {
        return (
            <Router>
                <Fragment>
                    {this.state.signUpContainer ? <SignUpContainer _setState={this._setState}/> : null}
                    {this.state.mainPageContainer ? <MainPageContainer/> : null}
                </Fragment>
            </Router>
        );
    }
}

export default App;
