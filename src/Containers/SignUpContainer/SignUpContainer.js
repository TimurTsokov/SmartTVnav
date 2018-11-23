import React, {Component} from 'react';
import {connect} from 'react-redux';
import classes from './SignUpContainer.scss';
import logo from '../../assets/images/logo.svg';
import {GetCountries, GetInfo, SetPhone} from '../../store/actions/SignUpActions';
import CountryCodesList from './Components/CountryCodesList/CountryCodesList';
import Keyboard from '../../Components/Keyboard/Keyboard';

class SignUpContainer extends Component {

    componentWillMount() {
        this.props.GetInfo();
        this.props.GetCountries();
    }

    render() {
        const countryCodes = this.props.countries.map(countries => {
            return (
                <CountryCodesList focusPath={'code-item-' + countries.id}
                                  key={countries.id}>{countries.telephone_code}</CountryCodesList>
            )
        });
        return (
            <div className={classes["signup-container"]}>
                <img className={classes.logo} src={logo} alt="Sweet TV"/>
                <h1>Введите свой номер телефона для подключения</h1>
                <ul className={classes["country-codes-list"]}>{countryCodes}</ul>
                <button onClick={this.props.SetPhone}>SetPhone</button>
                <Keyboard/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        countries: state.signUp.countries,
        countryId: state.signUp.countryId,
        partnerId: state.signUp.partnerId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        GetCountries: () => dispatch(GetCountries()),
        GetInfo: () => dispatch(GetInfo()),
        SetPhone: () => dispatch(SetPhone())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
