import React from 'react';
import './CountryCodesList.scss';
let Selected = '';
let visible = '';

const CountryCodesList = (props) => {
    props.selected ? Selected = " selected" : Selected = '';
    props.codeListVisible ? visible = "visible" : visible = '';
    console.log('classes.selected ', Selected);
    return (
        <li id={props.id}
            className={"code-item" + [Selected, visible].join(' ')}
            focusPath={props.focusPath}
            selected={props.selected}
            codeListVisible={props.codeListVisible}
            //onClick={props.showFullCodeList()}
            value={props.children}
            onFocus={() => props.scrollIntoView(props.id)}
            scrollIntoView={props.scrollIntoView}
            onEnterPress={() => props.showFullCodeList(props.id)}>
            +{props.children}
        </li>
    );
};

export default CountryCodesList;
