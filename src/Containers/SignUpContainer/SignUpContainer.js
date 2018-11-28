import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import classes from './SignUpContainer.scss';
import globalClasses from '../../index.scss';
import logo from '../../assets/images/logo.svg';
import {withFocusable} from 'react-tv-navigation';
import {GetCountries, GetInfo, SetPhone} from '../../store/actions/SignUpActions';
import CountryCodesList from './Components/CountryCodesList/CountryCodesList';
import Keyboard from '../../Components/Keyboard/Keyboard';

class SignUpContainer extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            codeListVisible: false,
            selectedCodeId: null,
            invalidPhoneErrorMessage: false
        };
        this.showFullCodeList = this.showFullCodeList.bind(this);
    }

    componentWillMount() {
        this.props.GetInfo();
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
                selectedCodeId: id
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
        const content = document.getElementById('input-field').textContent;
        if (key === 'backspace') {
            if (isNaN(parseFloat(content))) {
                document.getElementById('input-field').textContent = '';
            } else {
                document.getElementById('input-field').textContent = content.substring(0, content.length - 1);
            }
        } else {
            if (isNaN(parseFloat(content))) {
                document.getElementById('input-field').textContent = '';
            }
            if (document.getElementById('input-field').textContent.length < 9) {
                document.getElementById('input-field').textContent += key;
            }
        }
    };

    setPhone = () => {
        const inputContent = document.getElementById('input-field').textContent,
            code = document.getElementById(this.props.countryId).textContent;
        if (!isNaN(parseFloat(inputContent))) {
            const phoneNumber = parseFloat(code) + inputContent;
            this.props.SetPhone(phoneNumber);
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
        const ButtonActivate = () => {
            return (
                <button className={[globalClasses.button, classes["button-signup"]].join(' ')}>Активировать
                </button>
            );
        };


        let selected = false;
        const FocusableButtonActivate = withFocusable(ButtonActivate),
            {countryId, countries, setPhoneErrorMessage} = this.props,
            {codeListVisible, selectedCodeId, invalidPhoneErrorMessage} = this.state,
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
            <div className={classes["signup-container"]}>
                <img className={classes.logo} src={logo} alt="Sweet TV"/>
                <h1>Введите свой номер телефона для подключения</h1>
                {invalidPhoneErrorMessage ? <p>{invalidPhoneErrorMessage}</p> : null}
                {setPhoneErrorMessage ? <p>{setPhoneErrorMessage}</p> : null}
                <div className={classes.wrap}>
                    <ul className={classes["country-codes-list"]}>{countryCodes}</ul>
                    <Keyboard inputText={this.inputText}/>
                    <div id='input-field' className={classes["input-field"]}>(___)___-__-__</div>
                    <FocusableButtonActivate focusPath='button-activate' onEnterPress={() => {
                        this.setPhone()
                    }}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        countries: state.signUp.countries,
        countryId: state.signUp.countryId,
        partnerId: state.signUp.partnerId,
        setPhoneErrorMessage: state.signUp.setPhoneErrorMessage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        GetCountries: () => dispatch(GetCountries()),
        GetInfo: () => dispatch(GetInfo()),
        SetPhone: (phone) => dispatch(SetPhone(phone)),
        HideErrorMessage: () => dispatch({type: 'HIDE_ERROR_MESSAGE'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
