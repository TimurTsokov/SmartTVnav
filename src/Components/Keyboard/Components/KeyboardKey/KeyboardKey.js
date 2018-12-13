import React from 'react';
import './KeyboardKey.scss';
import Nav from 'react-navtree';
import {resolveNavEvent} from "../../../../modules/Services/NavService";

const KeyboardKey = React.memo((props) => {
    return (
        <Nav
            onClick={() => props.inputText(props.children)}
            func={resolveNavEvent}
            className="key nav">
            {props.children}
        </Nav>
    );
});

export default KeyboardKey;
