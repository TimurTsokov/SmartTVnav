import React, {Component} from 'react';
/*import HeaderContainer from '../HeaderContainer/HeaderContainer';*/
import './ExitFromApp.scss'
import Device from '../../modules/Device';
import logo from '../../assets/images/logo.svg'
/*import {webOS} from '../../modules/Device'*/
import Nav, {navHorizontal} from 'react-navtree';

class ExitFromApp extends Component {

    functionExit() {
        let device = Device.getObject();

        switch (device.sub_type) {
            case 'DST_LG':
                try {
                    webOS.platformBack();
                } catch (e) {
                }
                break;
            /* case 'DST_SAMSUNG':
                 try {
                     tizen.application.getCurrentApplication().exit();
                 } catch(e) {
                 }
                 break;*/
            default:
                window.close();
        }
    };

    displayNone() {
        let quit = document.getElementById("exitBox");
        quit.style.display = 'none';

        /*const styles = {
            display: 'none'
        };*/
    }
    resolveFunc = (key, navTree) => {
        switch (key) {
            case 'enter':
                navTree.el.click()
                break;
        }
    };

    render() {
        return (
            <div className="exit" id="exitBox">
                <div className="header__logo">
                    <img src={logo} alt="Sweet TV"/>
                </div>
                <div className="exit__group">
                    <h1>Вы точно хотите выйти из приложения?</h1>
                    <div className="exit__items">
                        <Nav className="exit__items_item" id="yes"
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
                            className="exit__items_item" id="no"
                             onClick={() => this.displayNone()}
                        >НЕТ
                        </Nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default ExitFromApp;
