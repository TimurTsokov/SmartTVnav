import React from 'react';
import './CountryCodesList.scss';

const CountryCodesList = React.memo((props) => {
    return (
        <li id={props.id}
            className={"code-item" + (props.selected ? " selected" : "")
            + (props.codeListVisible ? " visible" : "")}
            nv-el="true"
            onClick={() => props.showFullCodeList(props.id)}>
            +{props.children}
        </li>
        // <FocusableItem id={props.id}
    );
});

export default CountryCodesList;
