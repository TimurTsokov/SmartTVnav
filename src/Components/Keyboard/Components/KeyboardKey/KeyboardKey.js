import React from 'react';
import './KeyboardKey.scss';

const KeyboardKey = (props) => {
    return (
        <div onClick={() => props.inputText(props.children)} nv-el className="key">
            {props.children}
        </div>
    );
};

export default KeyboardKey;
