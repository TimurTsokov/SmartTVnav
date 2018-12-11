import React, {Component} from 'react';
import {connect} from 'react-redux';
import './SignUpContainer.scss';
import '../../index.scss';
import logo_image from '../../assets/images/logo.svg';
import phone_sms_image from '../../assets/images/phone_sms.svg';
import {GetCountries, SetPhone} from '../../store/actions/SignUpActions';
import CountryCodesList from './Components/CountryCodesList/CountryCodesList';
import Keyboard from '../../Components/Keyboard/Keyboard';
import GeoServerService from "../../modules/services/GeoServerService";
import HeaderContainer from '../HeaderContainer/HeaderContainer';

const GeoService = new GeoServerService();

class SignUpContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            codeListVisible: false,
            selectedCodeId: null,
            invalidPhoneErrorMessage: false,
            phone: null
        };
        this.showFullCodeList = this.showFullCodeList.bind(this);
    }

    componentWillMount() {
        // this.props.GetInfo();
        this.props.GetCountries();
    };


    scrollIntoView = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView();
    };

    showFullCodeList = (id) => {
        if (this.state.codeListVisible) {
            this.setState({
                codeListVisible: !this.state.codeListVisible,
                selectedCode: id
            });
        } else {
            this.setState({
                ...this.state,
                codeListVisible: !this.state.codeListVisible
            });
        }
        this.scrollIntoView(id)
    };

    inputText = (key) => {

        let inputId = null,
            maxLength = 9;

        if (this.props.signUpStep === 'phone') {
            inputId = 'phone-input-field'
        } else {
            maxLength = 4;
            inputId = 'code-input-field'
        }

        const content = document.getElementById(inputId).textContent;

        if (typeof key === 'object') {
            if (isNaN(parseFloat(content))) {
                document.getElementById(inputId).textContent = '';
            } else {
                document.getElementById(inputId).textContent = content.substring(0, content.length - 1);
            }
        } else if (key === 'OK') {
            if (this.props.signUpStep === 'phone') {
                this.setPhone();
            } else {
                //this.setCode()
            }
        } else {
            if (isNaN(parseFloat(content))) {
                document.getElementById(inputId).textContent = '';
            }
            if (document.getElementById(inputId).textContent.length < maxLength) {
                document.getElementById(inputId).textContent += key;
                if (maxLength === 4 && document.getElementById(inputId).textContent.length === 4) {
                    //this.setCode()
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

    render() {
        let selected = false;

        const {countryId, countries, setPhoneErrorMessage, signUpStep} = this.props,
            {codeListVisible, selectedCodeId, invalidPhoneErrorMessage, phone} = this.state,

            caption = signUpStep === 'phone' ?
                <React.Fragment>Введите свой <strong>номер телефона</strong> для подключения</React.Fragment> :
                <React.Fragment>Введите <strong>код</strong> из полученного <strong>SMS сообщения</strong>, отправленный на номер
                    +{phone}</React.Fragment>,
            countryCodes = countries.map(country => {
                if ((countryId === country.id && selectedCodeId === null) ||
                    (selectedCodeId === country.id && !codeListVisible)) {
                    selected = true;
                } else {
                    selected = false;
                }
                return (
                    <CountryCodesList id={country.id}
                                      scrollIntoView={this.scrollIntoView}
                                      focusPath={'code-item-' + country.id}
                                      selected={selected}
                                      codeListVisible={codeListVisible}
                                      showFullCodeList={this.showFullCodeList}
                                      key={country.id}>
                        {country.telephone_code}
                    </CountryCodesList>
                )
            });
        return (
                <div className="signup-container">
                    <HeaderContainer/>

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

// {/*<img className="logo" src={logo_image} alt="Sweet TV"/>*/}
// {/*<h1>{caption}</h1>*/}
// {/*{invalidPhoneErrorMessage || setPhoneErrorMessage ?*/}
//     {/*<p>{invalidPhoneErrorMessage || setPhoneErrorMessage}</p> : null}*/}
// {/*<div nv-scope="signup-field" nv-scope-current className="wrap">*/}
//     {/*<ul className={"country-codes-list" + (signUpStep === 'code' ? ' hidden' : '')}>CountryCodes</ul>*/}
//     {/*<Keyboard inputText={this.inputText} step={signUpStep}/>*/}
//     {/*<div*/}
//     {/*id='phone-input-field'*/}
//     {/*className={"input-field phone" + (signUpStep === 'code' ? ' hidden' : '')}>*/}
//     {/*(___)___-__-__*/}
//     {/*</div>*/}
//     {/*<div*/}
//     {/*id='code-input-field'*/}
//     {/*className={"input-field code" + (signUpStep === 'phone' ? ' hidden' : '')}/>*/}
//     {/*<img className={"phone-sms-image" + (signUpStep === 'phone' ? ' hidden' : '')}*/}
//     {/*src={phone_sms_image} alt="sms"/>*/}
//     {/*<button nv-el className={"button button-signup" + (signUpStep === 'code' ? ' hidden' : '')}*/}
//     {/*onClick={this.props.SetPhone}>Активировать*/}
//     {/*</button>*/}
//     {/*<span className="error-code">Ошибка, введите повторно код</span>*/}
//     {/*<button nv-el className="button button-signup back"*/}
//     {/*onClick={this.props.GoBack}>Изменить моб. номер*/}
//     {/*</button>*/}
//     {/*</div>*/}
//     {/*<span*/}
//     {/*className="contacts">Если у вас возникли вопросы: <b>2121</b> (бесплатно для Украины) / <b>info@sweet.tv</b></span>*/}