import React, {Component} from 'react';
import {Route, NavLink, Switch} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import ChannelsList from '../ChannelsList/ChannelsList'

class Navigation extends Component {

stateGo = () => (
  this.props.history.push({pathname: '/channels'})
)

  render() {
    return (<div>
      <header className={classes.Header}>
        <nav>
          <ul>
            <li>
              <NavLink to="/channels">Главная</NavLink>
            </li>
            <li onClick={this.stateGo}>
            Телевидение
            </li>
            <li>
              <a href="/">Кинозал</a>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route path="/channels" exact component={ChannelsList}/>
      </Switch>
    </div>)
  }
}

export default withRouter(Navigation);
