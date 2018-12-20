import React from 'react';

const ChannelListItem = React.memo((props) => (
    <div onClick={() => props._playChannel(props.id)}>{props.children}</div>
));

export default ChannelListItem;