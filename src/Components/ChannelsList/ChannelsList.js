import React, {Component} from 'react';
import Channel from './Channel/Channel';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class ChannelsList extends Component {
  state = {
    channels: []
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
      this.setState({channels: response.data});
    })
  };

  render() {
    const channels = this.state.channels.map(channel => {
      return (<Channel key={channel.id} title={channel.title}/>)
    });

    return (
      <div>{channels}</div>
    )
  }
};

export default withRouter(ChannelsList);
