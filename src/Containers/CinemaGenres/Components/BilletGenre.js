import React from 'react';
import './BilletGenre.scss';
// import { Focusable } from 'react-key-navigation';
import Nav from 'react-navtree';

// class BilletGenre extends React.Component {
//     constructor() {
//         super();
//
//         this.state = {
//             active: false
//         }
//     }
const BilletGenre = (props) => {

        return (
            <Nav defaultFocused={props.id === 1}
                 func={(key) => props.resolveFunc(key)}
                 className="genres__list_item nav">
                {props.children}
            </Nav>
        );

};
    // render() {
    //     return (
    //         <Nav defaultFocused={true}
    //              onClick={() => props.inputText(props.children)}
    //              nv-el nv-el-current={props.children === '1'}
    //              className="genres__list_item">
    //             {props.children}
    //         </Nav>
    //         //   <Focusable onFocus={() => this.setState({active: true})}
    //         //              onBlur={() => this.setState({active: false})}>
    //         //     <li class={'genres__list_item ' + (this.state.active ? 'focus' : '')}></li>
    //         //   </Focusable>
    //     );
    // }

export default BilletGenre;