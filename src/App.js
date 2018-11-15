import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import AuthContainer from './Containers/AuthContainer/AuthContainer';
import SignUpContainer from "./Containers/SignUpContainer/SignUpContainer";

class App extends Component {
  render() {
    return (<BrowserRouter>
      <div>
        <SignUpContainer/>
      </div>
    </BrowserRouter>);
  }
}

export default App;
