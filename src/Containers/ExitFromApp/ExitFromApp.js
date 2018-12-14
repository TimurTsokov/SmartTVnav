import React, {Component} from 'react';
/*import HeaderContainer from '../HeaderContainer/HeaderContainer';*/
import './ExitFromApp.scss'
import Device from '../../modules/Device';
import logo from '../../assets/images/logo.svg'
/*import {webOS} from '../../modules/Device'*/
import Nav, {navHorizontal} from 'react-navtree';

class ExitFromApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            classNew: false
        }
    };

    //
    // changeDisplay() {
    //     this.setState({...this.state, display: 'inline-block'});
    // };


    functionExit() {
        let device = Device.getObject();
        switch (device.sub_type) {
            case 'DST_LG':
                try {
                    webOS.platformBack();

                } catch (e) {
                }
                break;
            /*case 'DST_SAMSUNG':
                try {
                    tizen.application.getCurrentApplication().exit();
                } catch(e) {
                }
                break;*/
            default:
                window.close();
        }
        /*  props.menuPath === 'main';*/
        /*this.setState({...this.state, menuPath: 'main',});*/

    };

    toggleClass = () => {
        /*let quit = document.getElementById("exitBox");
        quit.style.display = 'none';*/
        this.setState({
            ...this.state,
            classNew: !this.classNew
        })
    };

    /* funcGoBack () {
       document.location = '../'
   }*/

    //------------------------------------ from App AngularJS
    // goBackTo(props) {
    //     switch (this.state.previousState) {
    //         case 'network_disconnected':
    //             // $state.go('main');
    //             props.menuItem === 'main';
    //             break;
    //         case 'signUp':
    //             // $state.go('auth');
    //             props.menuItem === 'auth';
    //             break;
    //         default:
    //             window.history.back();
    //     }
    //     props.previousState = '';
    // };

//---------------------------------------------------
    /*const styles = {
        display: 'none'
    };*/

    resolveFunc = (key, navTree) => {
        switch (key) {
            case 'enter':
                navTree.el.click();
                break;
        }
    };

    render() {
        const {classNew} = this.state;
        console.log(classNew);
        let classNames = 'exit';
        return (
            <div className={(classNew ? classNames + ' visible' : classNames)} id="exitBox">
                <div className="header__logo">
                    <img src={logo} alt="Sweet TV"/>
                </div>
                <div className="exit__group">
                    <h1>Вы точно хотите выйти из приложения?</h1>
                    <div className="exit__items">
                        <Nav className="exit__items_item"
                             func={(key, navTree) => {
                                 this.resolveFunc(key, navTree);
                             }}
                             onClick={() => this.functionExit()}
                        >ДА
                        </Nav>
                        <Nav defaultFocused={true}
                             func={(key, navTree) => {
                                 this.resolveFunc(key, navTree);
                             }}
                             className="exit__items_item"
                             onClick={() => this.toggleClass()}
                        >НЕТ
                        </Nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default ExitFromApp;
