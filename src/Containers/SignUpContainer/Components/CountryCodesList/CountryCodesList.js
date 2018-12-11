import React from 'react';
import './CountryCodesList.scss';
import Nav from 'react-navtree';

const CountryCodesList = React.memo((props) => {
    return (
        <Nav id={props.id}
             component={'li'}
             tabIndex="-1"
             func={(key, navTree) => {props.resolveNav(key, navTree, props.id)}}
             className={"code-item nav" + (props.selected ? " selected" : "")
             + (props.codeListVisible ? " visible" : "")}
             onClick={() => props.showFullCodeList(props.id)}>
            +{props.children}
        </Nav>
    );
});

export default CountryCodesList;
