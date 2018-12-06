import React, {Component} from 'react';
import  './HeaderItem.scss'
import Nav from 'react-navtree';

export default class HeaderItem extends Component {

    constructor(props) {
        super(props)
        this.state = {tab: 'main'}
    }

    render() {
        return (
            <Nav
                navId={this.props.children}
                className={"menu__item" + (this.state.tab === this.props.children ? 'active' : '')}
                onEnterPress = {this.props.keyPress("/" + this.props.children)} >
            </Nav>
        );
    }
};
