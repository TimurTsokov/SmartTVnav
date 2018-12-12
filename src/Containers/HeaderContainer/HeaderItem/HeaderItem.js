import React from 'react';
import  './HeaderItem.scss'
import Nav from 'react-navtree';

const HeaderItem = (props) => {
    let classNames = "menu__item";
    return (
        <Nav
            defaultFocused = {props.menuItem === "main" ? true : false}
            className = {classNames + (props.currentItem === props.menuItem ? ' active' : '')}
            navId = {props.menuItem}
            func={(key) => {
                if (key === 'enter') {
                    props.menuActive(props.menuItem);
                    props.changeMenuItem(props.menuItem);
                    }
                }
            }>
            {props.children}
        </Nav>
    );
};
export default HeaderItem;
// this.props.changePath(tab)