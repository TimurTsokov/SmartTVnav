import React from 'react';
import {withFocusable} from 'react-tv-navigation';
import classes from './Keyboard.scss';


const Button = ({i, setFocus, focusPath}) => {
    return (
        <div className={classes.key} onClick={() => {
            console.log({i})
        }}>
            {i}
        </div>
    )
};
const ButtonBack = ({setFocus, focusPath}) => {
    return (
        <div className={[classes.key, classes.backspace].join(' ')} onClick={() => {
            console.log('Back')
        }}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="128 -114.5 512 512">
                <path
                    d="M596.7-31.1H301.1L132,132.9c-2.5,2.5-4,5.8-4,9.4l0,0c0,3.4,1.4,6.8,3.8,9.2l162,163.4h302.9c23.9,0,43.3-19.5,43.3-43.7V12.6C640-11.6,620.6-31.1,596.7-31.1z M543.9,200.5c3,3.1,4.8,7.3,4.8,11.6s-1.8,8.6-4.8,11.5l-9.7,9.6c-3,3.1-7.2,4.9-11.5,4.9c-3.5,0-6.8-1.2-9.5-3.2l-64.2-63.6l-64.2,63.7c-2.8,2-6.1,3.1-9.5,3.1c-4.4,0-8.6-1.8-11.6-4.9l-9.5-9.6c-3.1-3.1-4.9-7.2-4.9-11.5s1.8-8.6,4.9-11.6l58.6-58.6l-58.7-58.6c-3-3.1-4.8-7.3-4.8-11.6c0-4.4,1.8-8.6,4.8-11.5l9.7-9.6c3-3.1,7.2-4.9,11.5-4.9c3.5,0,6.8,1.2,9.5,3.2l64.2,63.6l64.2-63.7c2.8-2,6.1-3.1,9.5-3.1c4.4,0,8.6,1.8,11.6,4.9l9.5,9.6c3.1,3.1,4.9,7.2,4.9,11.5c0,4.4-1.8,8.6-4.9,11.6l-58.6,58.6L543.9,200.5z"/>
            </svg>
        </div>
    )
};
const FocusableButton = withFocusable(Button);
const FocusableButtonBack = withFocusable(ButtonBack);

const Keyboard = (props) => {
    return (
        <div className={classes.keyboard}>
            <FocusableButton
                focusPath='button1' i='1'
                onEnterPress={() => {
                    props.inputText(1)
                }}/>
            <FocusableButton
                focusPath='button2' i='2'
                onEnterPress={() => {
                    props.inputText(2)
                }}/>
            <FocusableButton
                focusPath='button3' i='3'
                onEnterPress={() => {
                    props.inputText(3)
                }}/>
            <FocusableButton
                focusPath='button4' i='4'
                onEnterPress={() => {
                    props.inputText(4)
                }}/>
            <FocusableButton
                focusPath='button5' i='5'
                onEnterPress={() => {
                    props.inputText(5)
                }}/>
            <FocusableButton
                focusPath='button6' i='6'
                onEnterPress={() => {
                    props.inputText(6)
                }}/>
            <FocusableButton
                focusPath='button7' i='7'
                onEnterPress={() => {
                    props.inputText(7)
                }}/>
            <FocusableButton
                focusPath='button8' i='8'
                onEnterPress={() => {
                    props.inputText(8)
                }}/>
            <FocusableButton
                focusPath='button9' i='9'
                onEnterPress={() => {
                    props.inputText(9)
                }}/>
            <FocusableButtonBack
                focusPath='buttonBack'
                onEnterPress={() => {
                    props.inputText('backspace')
                }}/>
            <FocusableButton
                focusPath='button0' i='0'
                onEnterPress={() => {
                    props.inputText(0)
                }}/>
            <FocusableButton
                focusPath='button10' i='OK'
                onEnterPress={() => console.log('Pressed enter on Button!')}/>
        </div>
    );
};
export default Keyboard;



