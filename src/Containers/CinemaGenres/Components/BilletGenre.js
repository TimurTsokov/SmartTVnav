import React from 'react';
import './BilletGenre.scss';

const BilletGenre = (props) => {
    return (
        <li
            onClick={() => props.inputText(props.children)}
            nv-el nv-el-current={props.children === '1'}
            className="genres__list_item">
            {props.children}
        </li>
    );
};

export default BilletGenre;