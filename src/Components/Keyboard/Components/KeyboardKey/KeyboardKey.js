import React from 'react';
import './KeyboardKey.scss';

const KeyboardKey = (props) => {
    return (
        <div
            onClick={() => props.inputText(props.children)}
            nv-el nv-el-current={props.children === '1'}
            className="key">
            {props.children}
        </div>
    );
};

export default KeyboardKey;
