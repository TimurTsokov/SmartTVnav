import React, {Component} from 'react';
import {Focusable} from 'react-key-navigation';
import classes from './KeyboardKey.scss';

class ToogleItem extends Component {
    constructor() {
        super();

        this.state = {
            active: false
        }
    }

    render() {
        return (
            <Focusable onFocus={() => this.setState({active: true})}
                       onBlur={() => this.setState({active: false})}>
                <div className={this.state.active ? classes.focus : null}>
                    {this.props.children}
                </div>
            </Focusable>
        );
    }
}

export default class KeyboardKey extends Component {
    render() {
        return (
            <ToogleItem/>
        );
    }
}