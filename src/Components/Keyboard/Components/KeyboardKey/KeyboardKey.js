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

    componentDidMount() {
        console.log(Focusable);
    }

    onBlur() {
        this.setState({active: false});
    }

    onFocus() {
        this.setState({active: true});
    }

    onEnterDown(event, navigation) {
        console.log(event, navigation);
        // navigation.forceFocus('sidebar');
    }

    render() {
        return (
            <Focusable onFocus={() => this.onFocus()}
                       onEnterDown={(e, n) => this.onEnterDown(e, n)}
                       onBlur={() => this.onBlur()}
            >
                <div className={this.state.active ? [classes.focus, classes.key].join(' ') : classes.key}>
                    {this.props.children}
                </div>
            </Focusable>
        );
    }
}

export default class KeyboardKey extends Component {
    render() {
        return (
                <ToogleItem>{this.props.children}</ToogleItem>
        );
    }
}