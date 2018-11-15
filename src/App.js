import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import AuthContainer from './Containers/AuthContainer/AuthContainer';

class App extends Component {
  render() {
    return (<BrowserRouter>
      <div>
        <AuthContainer/>
      </div>
    </BrowserRouter>);
  }
}

export default App;
