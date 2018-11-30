import React, {Component} from 'react';
import './KeyboardKey.scss';

export default class KeyboardKey extends Component {
    render() {
        return (
            <div nv-el className="key">
                {this.props.children}
            </div>
        );
    }
}