import React, {Component} from 'react';
/*import HeaderContainer from '../HeaderContainer/HeaderContainer';*/
import './ExitFromApp.scss'

/*import {webOS} from '../../modules/Device'*/


class ExitFromApp extends Component {

    functionExit(device) {

        switch (device.sub_type()) {
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

    render() {
        return (
            <div className="exit" id="exitBox">
                <h1>Вы точно хотите выйти из приложения</h1>
                <div className="exit__items">
                    <button className="exit__items_item"
                            onClick={() => this.functionExit()}
                    >ДА</button>
                    <button className="exit__items_item"
                            onClick={() => this.displayNone()}
                    >НЕТ</button>
                </div>
            </div>
        );
    }
}

export default ExitFromApp;
