import React, {Component} from 'react';
import './Keyboard.scss';
import KeyboardKey from './Components/KeyboardKey/KeyboardKey'

export default class Keyboard extends Component {
    render() {
        return (
            <div className="keyboard">
                    <KeyboardKey>1</KeyboardKey>
                    <KeyboardKey>2</KeyboardKey>
                    <KeyboardKey>3</KeyboardKey>
                    <KeyboardKey>4</KeyboardKey>
                    <KeyboardKey>5</KeyboardKey>
                    <KeyboardKey>6</KeyboardKey>
                    <KeyboardKey>7</KeyboardKey>
                    <KeyboardKey>8</KeyboardKey>
                    <KeyboardKey>9</KeyboardKey>
                    <KeyboardKey>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                             viewBox="128 -114.5 512 512">
                            <path
                                d="M596.7-31.1H301.1L132,132.9c-2.5,2.5-4,5.8-4,9.4l0,0c0,3.4,1.4,6.8,3.8,9.2l162,163.4h302.9c23.9,0,43.3-19.5,43.3-43.7V12.6C640-11.6,620.6-31.1,596.7-31.1z M543.9,200.5c3,3.1,4.8,7.3,4.8,11.6s-1.8,8.6-4.8,11.5l-9.7,9.6c-3,3.1-7.2,4.9-11.5,4.9c-3.5,0-6.8-1.2-9.5-3.2l-64.2-63.6l-64.2,63.7c-2.8,2-6.1,3.1-9.5,3.1c-4.4,0-8.6-1.8-11.6-4.9l-9.5-9.6c-3.1-3.1-4.9-7.2-4.9-11.5s1.8-8.6,4.9-11.6l58.6-58.6l-58.7-58.6c-3-3.1-4.8-7.3-4.8-11.6c0-4.4,1.8-8.6,4.8-11.5l9.7-9.6c3-3.1,7.2-4.9,11.5-4.9c3.5,0,6.8,1.2,9.5,3.2l64.2,63.6l64.2-63.7c2.8-2,6.1-3.1,9.5-3.1c4.4,0,8.6,1.8,11.6,4.9l9.5,9.6c3.1,3.1,4.9,7.2,4.9,11.5c0,4.4-1.8,8.6-4.9,11.6l-58.6,58.6L543.9,200.5z"/>
                        </svg>
                    </KeyboardKey>
                    <KeyboardKey>0</KeyboardKey>
                    <KeyboardKey>OK</KeyboardKey>
            </div>

        );
    }
}



