import React from 'react';
import classes from './CountryCodesList.scss';
import {withFocusable} from 'react-tv-navigation';

const Item = ({focused, setFocus, focusPath, value, scrollIntoView, id}) => {
    // focused = (focused) ? 'focused' : 'unfocused';
    return (
        <li id={id} className={classes["code-item"]} onFocus={() => scrollIntoView(id)}>
            +{value}
        </li>
    )
};

const FocusableItem = withFocusable(Item);

const CountryCodesList = (props) => {
    return (
        <FocusableItem id={props.id} scrollIntoView={props.scrollIntoView} focusPath={props.focusPath} value={props.children}/>
    );
};

export default CountryCodesList;
