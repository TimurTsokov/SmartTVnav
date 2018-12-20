import React, {PureComponent} from 'react';
import './MainPageContainer.scss';
import LanguageService from '../../modules/Services/LanguageService';
import * as cnst from '../../modules/Services/Constants';

const LangService = new LanguageService;

class MainPageContainer extends PureComponent {

    constructor() {
        super();
    }

    render() {
        return (
            <div className={"container main-page" + (this.props.visible ? ' visible' : '')}>
                <h1>Main</h1>
                <button style={{position: 'absolute'}} onClick={() => {LangService.setLang('uk'); this.props._setState(cnst.SIGN_UP)}}>ua</button>
                <button style={{position: 'absolute', top: '100px'}} onClick={() => {LangService.setLang('ru'); this.props._setState(cnst.SIGN_UP)}}>ru</button>
            </div>
        );
    }
}

export default MainPageContainer;
