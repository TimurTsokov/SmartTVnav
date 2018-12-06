import React from 'react';
import './BilletGenre.scss';
import { Focusable } from 'react-key-navigation';

class BilletGenre extends React.Component {
    constructor() {
        super();

        this.state = {
            active: false
        }
    }
    render() {
        return (
            //<li
            //onClick={() => props.inputText(props.children)}
           // nv-el nv-el-current={props.children === '1'}
           // className="genres__list_item">
           // {props.children}
      //  </li>
            <Focusable onFocus={() => this.setState({active: true})}
                       onBlur={() => this.setState({active: false})}>
                <li class={'genres__list_item ' + (this.state.active ? 'focus' : '')}></li>
            </Focusable>
        );
    }

}

export default BilletGenre;