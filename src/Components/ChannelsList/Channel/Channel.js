import React from 'react';
import {withRouter} from 'react-router-dom';

const channel = (props) => {
  return (
    <article>
      <h1>{props.title}</h1>
    </article>
  );
};

export default withRouter(channel);
