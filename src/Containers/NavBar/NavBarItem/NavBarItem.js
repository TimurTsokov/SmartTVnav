import React from 'react';
import './NavBarItem.scss'
import Nav from 'react-navtree';

const NavBarItem = React.memo((props) => {
    console.log(props.currentPage === props.itemName);
    return (
        <Nav onClick={() => props._setState(props.itemName)}
             defaultFocused={props.currentPage === props.itemName}
            className={"menu__item" + (props.currentPage === props.itemName ? ' active' : '')}
            func={(key) => {
                if (key === 'enter') {
                    props._setState(props.itemName);
                }
            }
            }>
            {props.children}
        </Nav>
    );
});

export default NavBarItem;