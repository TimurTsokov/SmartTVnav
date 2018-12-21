import React, {Component} from 'react';
/*import NavBar from '../NavBar/NavBar';*/
import './ExitFromApp.scss'
import DeviceService from '../../../modules/Services/DeviceService';
import logo from '../../../assets/images/logo.svg'
/*import {webOS} from '../../modules/Device'*/
import Nav, {navHorizontal} from 'react-navtree';
import * as cnst from "../../../modules/Services/Constants";

class ExitFromApp extends Component {

    functionExit() {
        let device = DeviceService.device;
        switch (device.sub_type) {
            case 'DST_LG':
                try {
                   /* webOS.platformBack();*/

                } catch (e) {
                }
                break;
            case 'DST_SAMSUNG':
                try {
                    /*tizen.application.getCurrentApplication().exit();*/
                } catch(e) {
                }
                break;
            default:
                window.close();
        }

    };

    resolveFunc = (key, navTree) => {
        switch (key) {
            case 'enter':
                navTree.el.click();
                break;
        }
    };

    render() {

        return (
            <div className="exit">
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
                        onClick={() =>{this.props.changePath(cnst.MAIN_PAGE); this.functionExit()}}
                        >ДА
                        </Nav>
                        <Nav defaultFocused={true}
                             func={(key, navTree) => {
                                 this.resolveFunc(key, navTree);
                             }}
                             className="exit__items_item"
                             onClick={() => this.props.changePath()}
                        >НЕТ
                        </Nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default ExitFromApp;

