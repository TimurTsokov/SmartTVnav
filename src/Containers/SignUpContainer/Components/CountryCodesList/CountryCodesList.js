import React from 'react';
import classes from './CountryCodesList.scss';
import {withFocusable} from 'react-tv-navigation';
import { Platform } from 'react-tv';

console.log('webOS',Platform('webos')) // true
console.log('tizen',Platform('tizen')) // false
console.log('orsay',Platform('orsay')) // false

let Selected = '';
let visible = '';

const Item = ({focused, setFocus, focusPath, value, scrollIntoView, id, selected, fullCodeList}) => {
    selected ? Selected = classes.selected : Selected = '';
    fullCodeList ? visible = classes.visible : visible = '';
    return (
        <li id={id}
            className={[classes["code-item"], Selected, visible].join(' ')}
            onFocus={() => scrollIntoView(id)}>
            +{value}
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
                       fullCodeList={props.fullCodeList}
                       showFullCodeList={props.showFullCodeList}
                       value={props.children}
                       onEnterPress={() => props.showFullCodeList(props.id)}/>
    );
};

export default CountryCodesList;
