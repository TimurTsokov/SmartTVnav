import React from 'react';
import './KeyboardKey.scss';

const KeyboardKey = React.memo((props) => {
    return (
        <div
            onClick={() => props.inputText(props.children)}
            className="key">
            {props.children}
        </div>
    );
});

export default KeyboardKey;
