import React from 'react';
import classes from './CountryCodesList.scss';
import {withFocusable} from 'react-tv-navigation';

const Item = ({focused, setFocus, focusPath, value}) => {
    // focused = (focused) ? 'focused' : 'unfocused';
    return (
        <li className={classes["code-item"]} onClick={() => { setFocus('code-item-4') }} >
            +{value}
        </li>
    )
};

const FocusableItem = withFocusable(Item);

const CountryCodesList = (props) => {
    return (
        <FocusableItem focusPath={props.focusPath} value={props.children}/>
    );
};

export default CountryCodesList;