import React from 'react';
import './NavBarItem.scss'
import Nav from 'react-navtree';

const NavBarItem = React.memo((props) => {
    return (
        <Nav
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