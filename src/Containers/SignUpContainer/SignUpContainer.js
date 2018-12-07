import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import './SignUpContainer.scss';
import '../../index.scss';
import logo_image from '../../assets/images/logo.svg';
import phone_sms_image from '../../assets/images/phone_sms.svg';
import {GetCountries, SetPhone} from '../../store/actions/SignUpActions';
import CountryCodesList from './Components/CountryCodesList/CountryCodesList';
import Nav from 'react-navtree'
import Keyboard from '../../Components/Keyboard/Keyboard';
import {resolveNavEvent} from "../../modules/services/NavService";
import GeoServerService from "../../modules/services/GeoServerService";

const GeoService = new GeoServerService();

class SignUpContainer extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            codeListVisible: false,
            selectedCodeId: 1,
            invalidPhoneErrorMessage: false,
            phoneInputVal: '',
            codeInputVal: '',
            phone: null
        };
        this.showFullCodeList = this.showFullCodeList.bind(this);
    };

    componentWillMount() {
        // this.props.GetInfo();
        this.props.GetCountries();
    };

    componentDidMount() {
        window.document.addEventListener('keydown', (e) => {
            if (e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105) {
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
                    if (this.state.codeInputVal.length < 4) {
                        let val = this.state.codeInputVal;
                        val += e.key;
                        this.setState({
                            ...this.state,
                            codeInputVal: val
                        })
                    }
                }
            }
        }, false);
    };

    componentWillUnmount() {
        window.document.removeEventListener('keydown');
    };

    scrollIntoView = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView();
    };

    showFullCodeList = (id) => {
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
                this.scrollIntoView(id)
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
                this.setPhone();
            } else {
                if (phoneInputVal.length < 10) {
                    this.setState({
                        ...this.state, phoneInputVal: phoneInputVal += key
                    });
                }
            }
        } else {
            let {codeInputVal} = this.state;

            if (typeof key === 'object') {
                this.setState({
                    ...this.state, codeInputVal: codeInputVal.slice(0, -1)
                })
            } else if (key === 'OK') {
                //this.setCode()
            } else {
                if (codeInputVal.length < 4) {
                    this.setState({
                        ...this.state, codeInputVal: codeInputVal += key
                    });
                }
            }
        }
    };

    setPhone = () => {
        const inputContent = document.getElementById('phone-input-field').textContent,
            code = document.getElementById(this.props.countryId).textContent;
        if (!isNaN(parseFloat(inputContent))) {
            const phoneNumber = parseFloat(code) + inputContent;
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
                this.scrollIntoView(codeId)
        }
    };

    render() {
        console.log('render');
        let selected = false;

        const Countries = [
            {
                id: 1,
                telephone_code: 380
            },
            {
                id: 2,
                telephone_code: 7
            },
            {
                id: 3,
                telephone_code: 356
            },
            {
                id: 5,
                telephone_code: 384
            },
            {
                id: 6,
                telephone_code: 384
            },
            {
                id: 7,
                telephone_code: 384
            },
            {
                id: 8,
                telephone_code: 384
            },
            {
                id: 9,
                telephone_code: 384
            },
            {
                id: 10,
                telephone_code: 3855
            },
            {
                id: 11,
                telephone_code: 384
            },
            {
                id: 12,
                telephone_code: 384
            },
            {
                id: 13,
                telephone_code: 384
            },
            {
                id: 14,
                telephone_code: 384
            },
        ];

        const {countryId, countries, setPhoneErrorMessage, signUpStep} = this.props,
            {codeListVisible, selectedCodeId, invalidPhoneErrorMessage, phone} = this.state,

            caption = signUpStep === 'phone' ?
                <React.Fragment>Введите свой <strong>номер телефона</strong> для подключения</React.Fragment> :
                <React.Fragment>Введите <strong>код</strong> из полученного <strong>SMS сообщения</strong>, отправленный
                    на номер
                    +{phone}</React.Fragment>,
            countryCodes = Countries.map(country => {
                // if ((countryId === country.id && selectedCodeId === null) ||
                //     (selectedCodeId === country.id && !codeListVisible)) {
                //     selected = true;
                // } else {
                //     selected = false;
                // }
                if (country.id === this.state.selectedCodeId) {
                    selected = true
                } else {
                    selected = false
                }
                return (
                    <CountryCodesList id={country.id}
                                      selected={selected}
                                      _resolveNav={this._resolveNav}
                                      scrollIntoVIew={this.scrollIntoView}
                                      codeListVisible={codeListVisible}
                                      showFullCodeList={this.showFullCodeList}
                                      key={country.id}>
                        {country.telephone_code}
                    </CountryCodesList>
                )
            });
        return (
            <div className="signup-container container-fluid">
                <img className="logo" src={logo_image} alt="Sweet TV"/>
                <h1>{caption}</h1>
                {invalidPhoneErrorMessage || setPhoneErrorMessage ?
                    <p>{invalidPhoneErrorMessage || setPhoneErrorMessage}</p> : null}
                <div className="wrap">
                    <ul className={"form-control country-codes-list" + (signUpStep === 'code' ? ' hidden' : '')}>{countryCodes}</ul>
                    <Keyboard inputText={this._inputText}/>
                    <div
                        id='phone-input-field'
                        className={"input-field phone" + (signUpStep === 'code' ? ' hidden' : '')}>
                        {this.state.phoneInputVal || '(___)___-__-__'}
                    </div>
                    <div
                        id='code-input-field'
                        className={"input-field code" + (signUpStep === 'phone' ? ' hidden' : '')}>
                        {this.state.codeInputVal}
                    </div>
                    <img className={"phone-sms-image" + (signUpStep === 'phone' ? ' hidden' : '')}
                         src={phone_sms_image} alt="sms"/>
                    <Nav className={"nav button button-signup" + (signUpStep === 'code' ? ' hidden' : '')}
                         func={resolveNavEvent}
                         component={'button'}
                         onClick={this.props.SetPhone}>Активировать
                    </Nav>
                    <span className="error-code">Ошибка, введите повторно код</span>
                    <Nav className="nav button button-signup back"
                         onNav={(path) => {
                             console.log(path)
                         }}
                         component={'button'}
                         defaultFocused
                         func={resolveNavEvent}
                         onClick={this.props.GoBack}>Изменить моб. номер
                    </Nav>
                </div>
                <span
                    className="contacts">Если у вас возникли вопросы: <b>2121</b> (бесплатно для Украины) / <b>info@sweet.tv</b></span>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        countries: state.signUp.countries,
        countryId: state.signUp.countryId,
        partnerId: state.signUp.partnerId,
        setPhoneErrorMessage: state.signUp.setPhoneErrorMessage,
        signUpStep: state.signUp.signUpStep
    };
};

const mapDispatchToProps = dispatch => {
    return {
        GetCountries: () => GeoService.GetCountries(),
        GetInfo: () => GeoService.GetInfo(),
        SetPhone: () => dispatch(SetPhone()),
        HideErrorMessage: () => dispatch({type: 'HIDE_ERROR_MESSAGE'}),
        GoBack: () => dispatch({type: 'GO_BACK'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
