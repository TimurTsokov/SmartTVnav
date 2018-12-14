import React, {PureComponent, Fragment} from 'react';
import {connect} from 'react-redux';
import './SignUpContainer.scss';
import '../../index.scss';
import logo_image from '../../assets/images/logo.svg';
import phone_sms_image from '../../assets/images/phone_sms.svg';
import {Auth, GetCountries, SetPhone, SetCode, GetInfo} from '../../store/actions/SignUpActions';
import CountryCodesList from './Components/CountryCodesList/CountryCodesList';
import Nav from 'react-navtree'
import Keyboard from '../../Components/Keyboard/Keyboard';
import {resolveNavEvent} from "../../modules/Services/NavService";
import * as cnst from '../../modules/Services/Constants'

class SignUpContainer extends PureComponent {

    constructor() {
        super();
        this.state = {
            codeListVisible: false,
            selectedCodeId: null,
            invalidPhoneErrorMessage: false,
            phoneInputVal: '',
            phone: null
        };
        this._showFullCodeList = this._showFullCodeList.bind(this);
    };

    componentWillMount() {
        this.props.Auth().then(() => {
            if (this.props.signUpStep) {
                this.props.GetInfo();
                this.props.GetCountries();
            } else {
                this.props._setState(cnst.MAIN_PAGE)
            }
        });
        this._retryAuth = setTimeout(() => {
            this.props.Auth().then(() => {
                if (this.props.isAuthorized) {
                    this.props._setState(cnst.MAIN_PAGE)
                }
            });
        }, 6000)
    };

    componentDidMount() {
        window.document.addEventListener('keydown', (e) => {
            if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {
                if (this.props.signUpStep === 'phone') {
                    if (this.state.phoneInputVal.length < 10) {
                        let val = this.state.phoneInputVal;
                        val += e.key;
                        this.setState({
                            ...this.state,
                            phoneInputVal: val
                        })
                    }
                } else {
                    let {codeInputVal} = this.props;
                    if (codeInputVal.length < 4) {
                        this.props.inputCode(codeInputVal += e.key)
                    }
                    if (codeInputVal.length === 4) {
                        setTimeout(() => {
                            this._setCode(this.state.phone, parseInt(this.props.codeInputVal));
                        }, 50)
                    }
                }
            }
        }, false);
    };

    componentDidUpdate() {
        if (this.props.isAuthorized) {
            this.props._setState(cnst.MAIN_PAGE);
        }
        if (this.props.invalidCodeErrorMessage || this.props.codeLimitErrorMessage) {
            clearTimeout(this._hideErrorMessage);
            this._hideErrorMessage = setTimeout(() => {
                this.props.HideErrorMessage();
            }, 4000);
        }
    }

    componentWillUnmount() {
        window.document.removeEventListener('keydown', this);
        clearInterval(this._retryAuth);
    };

    _scrollIntoView = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView();
    };

    _showFullCodeList = (id) => {
        if (this.state.codeListVisible) {
            this.setState({
                codeListVisible: !this.state.codeListVisible,
                selectedCodeId: id
            });
        } else {

            setTimeout(() => {
                this.setState({
                    ...this.state,
                    codeListVisible: !this.state.codeListVisible
                });
                this._scrollIntoView(id)
            }, 0)
        }
    };

    _inputText = (key) => {
        if (this.props.signUpStep === 'phone') {
            let {phoneInputVal} = this.state;

            if (typeof key === 'object') {
                this.setState({
                    ...this.state, phoneInputVal: phoneInputVal.slice(0, -1)
                })
            } else if (key === 'OK') {
                this._setPhone();
            } else {
                if (phoneInputVal.length < 10) {
                    this.setState({
                        ...this.state, phoneInputVal: phoneInputVal += key
                    });
                }
            }
        } else {
            let {codeInputVal} = this.props;

            if (typeof key === 'object') {
                this.props.inputCode(codeInputVal.slice(0, -1));
            } else if (key === 'OK') {
                //this._setCode()
            } else {
                if (codeInputVal.length < 4) {
                    this.props.inputCode(codeInputVal += key);
                    if (codeInputVal.length === 4) {
                        setTimeout(() => {
                            this._setCode(this.state.phone, parseInt(this.props.codeInputVal));
                        }, 50)
                    }
                }
            }
        }
    };

    _setPhone = () => {
        if (!isNaN(parseFloat(this.state.phoneInputVal))) {
            const code = document.querySelector('.selected').textContent.substring(1);
            const phoneNumber = code + this.state.phoneInputVal;
            this.props.SetPhone(phoneNumber);
            this.setState({
                ...this.state,
                phone: phoneNumber
            })
        } else {
            this.setState({
                ...this.state,
                invalidPhoneErrorMessage: 'Номер телефона введен неверно'
            });
            setTimeout(() => {
                this.setState({
                    ...this.state,
                    invalidPhoneErrorMessage: false
                });
            }, 3000)
        }
    };

    _setCode = (phone, code) => {
        this.props.SetCode(phone, code);
    };

    _resolveNav = (key, navTree, codeId) => {
        switch (key) {
            case 'enter':
                navTree.el.click();
                break;
            case 'left':
            case 'right':
                this.setState({
                    ...this.state,
                    codeListVisible: false
                });
                break;
            case 'up':
            case 'down':
                this._scrollIntoView(codeId);
                break;
            default:
                return
        }
    };

    render() {
        let selected = false,
            caption = '';

        if (this.props.signUpStep === 'phone') {
            caption = <Fragment>Введите свой <strong>номер телефона</strong> для подключения</Fragment>
        } else if (this.props.signUpStep === 'code') {
            caption = <Fragment>Введите <strong>код</strong> из полученного <strong>SMS сообщения</strong>, отправленный
                на номер + {this.state.phone}</Fragment>
        }

        const countryCodes = this.props.countries.map(country => {
            selected = (this.props.countryId === country.id && this.state.selectedCodeId === null) ||
                (this.state.selectedCodeId === country.id && !this.state.codeListVisible);

            return (
                <CountryCodesList id={country.id}
                                  selected={selected}
                                  resolveNav={this._resolveNav}
                                  scrollIntoVIew={this._scrollIntoView}
                                  codeListVisible={this.state.codeListVisible}
                                  showFullCodeList={this._showFullCodeList}
                                  key={country.id}>
                    {country.telephone_code}
                </CountryCodesList>
            )
        });
        return (
            <div className="signup-container container-fluid">
                {this.props.signUpStep ? <img className="logo" src={logo_image} alt="Sweet TV"/> : ''}
                <h1>{caption}</h1>
                <p className="error-phone">{this.state.invalidPhoneErrorMessage || this.props.codeLimitErrorMessage ?
                    this.state.invalidPhoneErrorMessage || this.props.codeLimitErrorMessage : ''}</p>
                <div className="wrap">
                    <ul className={"form-control country-codes-list" + (this.props.signUpStep === 'code' ? ' hidden' : '')}>
                        {countryCodes}
                    </ul>
                    {this.props.signUpStep ? <Keyboard inputText={this._inputText}/> : ''}
                    <div
                        id='phone-input-field'
                        className={"input-field phone" + (this.props.signUpStep === 'phone' ? ' visible' : '')}>
                        {this.state.phoneInputVal || '(___)___-__-__'}
                    </div>
                    <div
                        id='code-input-field'
                        className={"input-field code" + (this.props.signUpStep === 'code' ? ' visible' : '')}>
                        {this.props.codeInputVal}
                    </div>
                    <img
                        className={"phone-sms-image" + (this.props.signUpStep === 'code' && !this.props.buttonBackVisible ? ' visible' : '')}
                        src={phone_sms_image} alt="sms"/>
                    <Nav className={"nav button button-signup" + (this.props.signUpStep === 'phone' ? ' visible' : '')}
                         func={(key, navTree) => resolveNavEvent(key, navTree)}
                         onClick={this._setPhone}
                        // onMouseEnter={(e) => { e.stopPropagation(); this.navTree.focus() }}
                         component={'button'}>Активировать
                    </Nav>
                    <span
                        className="error-code">{this.props.signUpStep === 'code' ? this.props.invalidCodeErrorMessage : ''}</span>
                    <Nav
                        className={"nav button button-signup back" + (this.props.signUpStep === 'code' && this.props.buttonBackVisible ? ' visible' : '')}
                        component={'button'}
                        // ref={(nav) => { this.navTree = nav && nav.tree }}
                        // onMouseEnter={(e) => { e.stopPropagation(); this.navTree.focus() }}
                        defaultFocused
                        func={resolveNavEvent}
                        onClick={this.props.GoBack}>Изменить моб. номер
                    </Nav>
                </div>
                {this.props.signUpStep ? <span
                    className="contacts">Если у вас возникли вопросы: <b>2121</b> (бесплатно для Украины) / <b>info@sweet.tv</b></span> : ''}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthorized: state.signUp.isAuthorized,
        countries: state.signUp.countries,
        countryId: state.signUp.countryId,
        setPhoneErrorMessage: state.signUp.setPhoneErrorMessage,
        signUpStep: state.signUp.signUpStep,
        invalidCodeErrorMessage: state.signUp.invalidCodeErrorMessage,
        codeLimitErrorMessage: state.signUp.codeLimitErrorMessage,
        codeInputVal: state.signUp.codeInputVal,
        buttonBackVisible: state.signUp.buttonBackVisible
    };
};

const mapDispatchToProps = dispatch => {
    return {
        Auth: () => dispatch(Auth()),
        GetCountries: () => dispatch(GetCountries()),
        GetInfo: () => dispatch(GetInfo()),
        SetPhone: (phone) => dispatch(SetPhone(phone)),
        SetCode: (phone, code) => dispatch(SetCode(phone, code)),
        inputCode: (val) => dispatch({type: 'INPUT_CODE', payload: val}),
        HideErrorMessage: () => dispatch({type: 'HIDE_ERROR_MESSAGE'}),
        GoBack: () => dispatch({type: 'GO_BACK'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
