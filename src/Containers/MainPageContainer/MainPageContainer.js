import React, {Component} from 'react';
import {Focusable} from 'react-key-navigation';


class MainPageContainer extends Component {


    render() {
        return (
            <div>
                <Focusable>Button-1</Focusable>
                <Focusable>Button-2</Focusable>
            </div>
        );
    }
}


export default MainPageContainer;
