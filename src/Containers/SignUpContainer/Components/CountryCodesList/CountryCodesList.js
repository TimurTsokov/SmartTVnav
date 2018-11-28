import React from 'react';
import classes from './CountryCodesList.scss';
import {withFocusable} from 'react-tv-navigation';

let Selected = '';
let visible = '';

const Item = (props) => {
    props.selected ? Selected = classes.selected : Selected = '';
    props.codeListVisible ? visible = classes.visible : visible = '';
    return (
        <li id={props.id}
            className={[classes["code-item"], Selected, visible].join(' ')}
            onFocus={() => props.scrollIntoView(props.id)}>
            +{props.value}
        </li>
    );
};

const FocusableItem = withFocusable(Item);

const CountryCodesList = (props) => {
    return (
        <FocusableItem id={props.id}
                       scrollIntoView={props.scrollIntoView}
                       focusPath={props.focusPath}
                       selected={props.selected}
                       codeListVisible={props.codeListVisible}
                       value={props.children}
                       onEnterPress={() => props.showFullCodeList(props.id, props.children)}/>
    );
};

export default CountryCodesList;
