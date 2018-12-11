import React, {Component} from 'react';
import  './HeaderItem.scss'
import Nav from 'react-navtree';

const HeaderItem = (props) => {

    // constructor(props) {
    //     super(props)
    //     this.state = {tab: 'main'}
    // }
        return (
            <Nav
                className={"menu__item active"}
                func = {(key) => { if (key === 'enter')  props.keyPress(this.props.children)}}>
                {props.children}
            </Nav>
        );
};
export default HeaderItem;
