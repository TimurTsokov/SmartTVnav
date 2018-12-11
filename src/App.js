import React, {PureComponent} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import SignUpContainer from "./Containers/SignUpContainer/SignUpContainer";

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

        })
    };

    render() {
        return (
            <Router>
                {this.state.signUpContainer ? <SignUpContainer _setState={this._setState}/> : null}
            </Router>
        );
    }
}

export default App;
